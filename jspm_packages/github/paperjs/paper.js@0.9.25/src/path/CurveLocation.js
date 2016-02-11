/*
 * Paper.js - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2014, Juerg Lehni & Jonathan Puckey
 * http://scratchdisk.com/ & http://jonathanpuckey.com/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

/**
 * @name CurveLocation
 *
 * @class CurveLocation objects describe a location on {@link Curve} objects,
 * as defined by the curve-time {@link #parameter}, a value between {@code 0}
 * (beginning of the curve) and {@code 1} (end of the curve). If the curve is
 * part of a {@link Path} item, its {@link #index} inside the
 * {@link Path#curves} array is also provided.
 *
 * The class is in use in many places, such as
 * {@link Path#getLocationAt(offset)},
 * {@link Path#getLocationOf(point)},
 * {@link Path#getNearestLocation(point)},
 * {@link PathItem#getIntersections(path)},
 * etc.
 */
var CurveLocation = Base.extend(/** @lends CurveLocation# */{
    _class: 'CurveLocation',
    // Enforce creation of beans, as bean getters have hidden parameters.
    // See #getSegment() below.
    beans: true,

    // DOCS: CurveLocation class description: add these back when the  mentioned
    // functioned have been added: {@link Path#split(location)}
    /**
     * Creates a new CurveLocation object.
     *
     * @param {Curve} curve
     * @param {Number} parameter
     * @param {Point} [point]
     */
    initialize: function CurveLocation(curve, parameter, point,
            _overlap, _distance) {
        // Merge intersections very close to the end of a curve with the
        // beginning of the next curve.
        if (parameter > /*#=*/(1 - Numerical.CURVETIME_EPSILON)) {
            var next = curve.getNext();
            if (next) {
                parameter = 0;
                curve = next;
            }
        }
        // Define this CurveLocation's unique id.
        // NOTE: We do not use the same pool as the rest of the library here,
        // since this is only required to be unique at runtime among other
        // CurveLocation objects.
        this._id = UID.get(CurveLocation);
        this._setCurve(curve);
        this._parameter = parameter;
        this._point = point || curve.getPointAt(parameter, true);
        this._overlap = _overlap;
        this._distance = _distance;
        this._intersection = this._next = this._prev = null;
    },

    _setCurve: function(curve) {
        var path = curve._path;
        this._version = path ? path._version : 0;
        this._curve = curve;
        this._segment = null; // To be determined, see #getSegment()
        // Also store references to segment1 and segment2, in case path
        // splitting / dividing is going to happen, in which case the segments
        // can be used to determine the new curves, see #getCurve(true)
        this._segment1 = curve._segment1;
        this._segment2 = curve._segment2;
    },

    _setSegment: function(segment) {
        this._setCurve(segment.getCurve());
        this._segment = segment;
        this._parameter = segment === this._segment1 ? 0 : 1;
        // To avoid issues with imprecision in getCurve() / trySegment()
        this._point = segment._point.clone();
    },

    /**
     * The segment of the curve which is closer to the described location.
     *
     * @type Segment
     * @bean
     */
    getSegment: function() {
        // Request curve first, so _segment gets invalidated if it's out of sync
        var curve = this.getCurve(),
            segment = this._segment;
        if (!segment) {
            var parameter = this.getParameter();
            if (parameter === 0) {
                segment = curve._segment1;
            } else if (parameter === 1) {
                segment = curve._segment2;
            } else if (parameter != null) {
                // Determine the closest segment by comparing curve lengths
                segment = curve.getPartLength(0, parameter)
                    < curve.getPartLength(parameter, 1)
                        ? curve._segment1
                        : curve._segment2;
            }
            this._segment = segment;
        }
        return segment;
    },

    /**
     * The curve that this location belongs to.
     *
     * @type Curve
     * @bean
     */
    getCurve: function() {
        var curve = this._curve,
            path = curve && curve._path,
            that = this;
        if (path && path._version !== this._version) {
            // If the path's segments have changed in the meantime, clear the
            // internal _parameter value and force refetching of the correct
            // curve again here.
            curve = this._parameter = this._curve = this._offset = null;
        }

        // If path is out of sync, access current curve objects through segment1
        // / segment2. Since path splitting or dividing might have happened in
        // the meantime, try segment1's curve, and see if _point lies on it
        // still, otherwise assume it's the curve before segment2.
        function trySegment(segment) {
            var curve = segment && segment.getCurve();
            if (curve && (that._parameter = curve.getParameterOf(that._point))
                    != null) {
                // Fetch path again as it could be on a new one through split()
                that._setCurve(curve);
                that._segment = segment;
                return curve;
            }
        }

        return curve
            || trySegment(this._segment)
            || trySegment(this._segment1)
            || trySegment(this._segment2.getPrevious());
    },

    /**
     * The path this curve belongs to, if any.
     *
     * @type Item
     * @bean
     */
    getPath: function() {
        var curve = this.getCurve();
        return curve && curve._path;
    },

    /**
     * The index of the {@link #curve} within the {@link Path#curves} list, if
     * it is part of a {@link Path} item.
     *
     * @type Index
     * @bean
     */
    getIndex: function() {
        var curve = this.getCurve();
        return curve && curve.getIndex();
    },

    /**
     * The curve-time parameter, as used by various bezier curve calculations.
     * It is value between {@code 0} (beginning of the curve) and {@code 1}
     * (end of the curve).
     *
     * @type Number
     * @bean
     */
    getParameter: function() {
        var curve = this.getCurve(),
            parameter = this._parameter;
        return curve && parameter == null
            ? this._parameter = curve.getParameterOf(this._point)
            : parameter;
    },

    /**
     * The point which is defined by the {@link #curve} and
     * {@link #parameter}.
     *
     * @type Point
     * @bean
     */
    getPoint: function() {
        return this._point;
    },

    /**
     * The length of the path from its beginning up to the location described
     * by this object. If the curve is not part of a path, then the length
     * within the curve is returned instead.
     *
     * @type Number
     * @bean
     */
    getOffset: function() {
        var offset = this._offset;
        if (offset == null) {
            offset = 0;
            var path = this.getPath(),
                index = this.getIndex();
            if (path && index != null) {
                var curves = path.getCurves();
                for (var i = 0; i < index; i++)
                    offset += curves[i].getLength();
            }
            this._offset = offset += this.getCurveOffset();
        }
        return offset;
    },

    /**
     * The length of the curve from its beginning up to the location described
     * by this object.
     *
     * @type Number
     * @bean
     */
    getCurveOffset: function() {
        var curve = this.getCurve(),
            parameter = this.getParameter();
        return parameter != null && curve && curve.getPartLength(0, parameter);
    },

    /**
     * The curve location on the intersecting curve, if this location is the
     * result of a call to {@link PathItem#getIntersections(path)} /
     * {@link Curve#getIntersections(curve)}.
     *
     * @type CurveLocation
     * @bean
     */
    getIntersection: function() {
        return this._intersection;
    },

    /**
     * The tangential vector to the {@link #curve} at the given location.
     *
     * @name CurveLocation#getTangent
     * @type Point
     * @bean
     */

    /**
     * The normal vector to the {@link #curve} at the given location.
     *
     * @name CurveLocation#getNormal
     * @type Point
     * @bean
     */

    /**
     * The curvature of the {@link #curve} at the given location.
     *
     * @name CurveLocation#getCurvature
     * @type Number
     * @bean
     */

    /**
     * The distance from the queried point to the returned location.
     *
     * @type Number
     * @bean
     * @see Curve#getNearestLocation(point)
     * @see Path#getNearestLocation(point)
     */
    getDistance: function() {
        return this._distance;
    },

    // DOCS: divide(), split()

    divide: function() {
        var curve = this.getCurve(),
            res = null;
        if (curve) {
            res = curve.divide(this.getParameter(), true);
            // Change to the newly inserted segment, also adjusting _parameter.
            if (res)
                this._setSegment(res._segment1);
        }
        return res;
    },

    split: function() {
        var curve = this.getCurve();
        return curve ? curve.split(this.getParameter(), true) : null;
    },

    /**
     * Checks whether tow CurveLocation objects are describing the same location
     * on a path, by applying the same tolerances as elsewhere when dealing with
     * curve time parameters.
     *
     * @param {CurveLocation} location
     * @return {Boolean} {@true if the locations are equal}
     */
    equals: function(loc, _ignoreOther) {
        var res = this === loc,
            epsilon = /*#=*/Numerical.GEOMETRIC_EPSILON;
        // NOTE: We need to compare both by (index + parameter) and by proximity
        // of points. See:
        // https://github.com/paperjs/paper.js/issues/784#issuecomment-143161586
        if (!res && loc instanceof CurveLocation
                && this.getPath() === loc.getPath()
                && this.getPoint().isClose(loc.getPoint(), epsilon)) {
            // The position is the same, but it could still be in a different
            // location on the path. Perform more thorough checks now:
            var c1 = this.getCurve(),
                c2 = loc.getCurve(),
                abs = Math.abs,
                // We need to wrap diff around the path's beginning / end:
                diff = abs(
                    ((c1.isLast() && c2.isFirst() ? -1 : c1.getIndex())
                            + this.getParameter()) -
                    ((c2.isLast() && c1.isFirst() ? -1 : c2.getIndex())
                            + loc.getParameter()));
            res = (diff < /*#=*/Numerical.CURVETIME_EPSILON
                // If diff isn't close enough, compare the actual offsets of
                // both locations to determine if they're in the same spot,
                // taking into account the wrapping around path ends too.
                // This is necessary in order to handle very short consecutive
                // curves (length ~< 1e-7), which would lead to diff > 1.
                || ((diff = abs(this.getOffset() - loc.getOffset())) < epsilon
                    || abs(this.getPath().getLength() - diff) < epsilon))
                && (_ignoreOther
                    || (!this._intersection && !loc._intersection
                        || this._intersection && this._intersection.equals(
                                loc._intersection, true)));
        }
        return res;
    },

    /**
     * @return {String} a string representation of the curve location
     */
    toString: function() {
        var parts = [],
            point = this.getPoint(),
            f = Formatter.instance;
        if (point)
            parts.push('point: ' + point);
        var index = this.getIndex();
        if (index != null)
            parts.push('index: ' + index);
        var parameter = this.getParameter();
        if (parameter != null)
            parts.push('parameter: ' + f.number(parameter));
        if (this._distance != null)
            parts.push('distance: ' + f.number(this._distance));
        return '{ ' + parts.join(', ') + ' }';
    },


    /**
     * {@grouptitle Tests}
     * Checks if the location is an intersection with another curve and is
     * merely touching the other curve, as opposed to crossing it.
     *
     * @return {Boolean} {@true if the location is an intersection that is
     * merely touching another curve}
     * @see #isCrossing()
     */
    isTouching: function() {
        var inter = this._intersection;
        if (inter && this.getTangent().isCollinear(inter.getTangent())) {
            // Only consider two straight curves as touching if their lines
            // don't intersect.
            var curve1 = this.getCurve(),
                curve2 = inter.getCurve();
            return !(curve1.isStraight() && curve2.isStraight()
                    && curve1.getLine().intersect(curve2.getLine()));
        }
        return false;
    },

    /**
     * Checks if the location is an intersection with another curve and is
     * crossing the other curve, as opposed to just touching it.
     *
     * @return {Boolean} {@true if the location is an intersection that is
     * crossing another curve}
     * @see #isTouching()
     */
    isCrossing: function() {
        // Implementation based on work by Andy Finnell:
        // http://losingfight.com/blog/2011/07/09/how-to-implement-boolean-operations-on-bezier-paths-part-3/
        // https://bitbucket.org/andyfinnell/vectorboolean
        var inter = this._intersection;
        if (!inter)
            return false;
        var t1 = this.getParameter(),
            t2 = inter.getParameter(),
            tMin = /*#=*/Numerical.CURVETIME_EPSILON,
            tMax = 1 - tMin;
        // If the intersection is in the middle of the path, it is either a
        // tangent or a crossing, no need for the detailed corner check below.
        // But we do need a check for the edge case of tangents?
        if (t1 >= tMin && t1 <= tMax || t2 >= tMin && t2 <= tMax)
            return !this.isTouching();
        // Values for getTangentAt() that are almost 0 and 1.
        // NOTE: Even though getTangentAt() has code to support 0 and 1 instead
        // of tMin and tMax, we still need to use this instead, as other issues
        // emerge from switching to 0 and 1 in edge cases.
        // NOTE: VectorBoolean has code that slowly shifts these points inwards
        // until the resulting tangents are not ambiguous. Do we need this too?
        var c2 = this.getCurve(),
            c1 = c2.getPrevious(),
            c4 = inter.getCurve(),
            c3 = c4.getPrevious(),
            PI = Math.PI;
        if (!c1 || !c3)
            return false;

        function isInRange(angle, min, max) {
            return min < max
                ? angle > min && angle < max
                // The range wraps around -PI / PI:
                : angle > min && angle <= PI || angle >= -PI && angle < max;
        }

        // Calculate angles for all four tangents at the intersection point
        var a1 = c1.getTangentAt(tMax, true).negate().getAngleInRadians(),
            a2 = c2.getTangentAt(tMin, true).getAngleInRadians(),
            a3 = c3.getTangentAt(tMax, true).negate().getAngleInRadians(),
            a4 = c4.getTangentAt(tMin, true).getAngleInRadians();

        // Count how many times curve2 angles appear between the curve1 angles
        // If each pair of angles split the other two, then the edges cross.
        return (isInRange(a3, a1, a2) ^ isInRange(a4, a1, a2))
            && (isInRange(a3, a2, a1) ^ isInRange(a4, a2, a1));
    },

    /**
     * Checks if the location is an intersection with another curve and is
     * part of an overlap between the two involved paths.
     *
     * @return {Boolean} {@true if the location is an intersection that is
     * part of an overlap between the two involved paths}
     * @see #isCrossing()
     * @see #isTouching()
     */
    isOverlap: function() {
        return !!this._overlap;
    }
}, Base.each(Curve.evaluateMethods, function(name) {
    // Produce getters for #getTangent() / #getNormal() / #getCurvature()
    var get = name + 'At';
    this[name] = function() {
        var parameter = this.getParameter(),
            curve = this.getCurve();
        return parameter != null && curve && curve[get](parameter, true);
    };
}, {
    // Do not override the existing #getPoint():
    preserve: true
}),
new function() { // Scope for statics

    function insert(locations, loc, merge) {
        // Insert-sort by path-id, curve, parameter so we can easily merge
        // duplicates with calls to equals() after.
        var length = locations.length,
            l = 0,
            r = length - 1;

        function search(index, dir) {
            // If we reach the beginning/end of the list, also compare with the
            // location at the other end, as paths are circular lists.
            // NOTE: When merging, the locations array will only contain
            // locations on the same path, so it is fine that check for the end
            // to address circularity. See PathItem#getIntersections()
            for (var i = index + dir; i >= -1 && i <= length; i += dir) {
                // Wrap the index around, to match the other ends:
                var loc2 = locations[((i % length) + length) % length];
                // Once we're outside the spot, we can stop searching.
                if (!loc.getPoint().isClose(loc2.getPoint(),
                        /*#=*/Numerical.GEOMETRIC_EPSILON))
                    break;
                if (loc.equals(loc2))
                    return loc2;
            }
            return null;
        }

        while (l <= r) {
            var m = (l + r) >>> 1,
                loc2 = locations[m],
                found;
            // See if the two locations are actually the same, and merge if
            // they are. If they aren't check the other neighbors with search()
            if (merge && (found = loc.equals(loc2) ? loc2
                    : (search(m, -1) || search(m, 1)))) {
                // We're done, don't insert, merge with the found location
                // instead, and carry over overlap:
                if (loc._overlap) {
                    found._overlap = found._intersection._overlap = true;
                }
                return found;
            }
        var path1 = loc.getPath(),
            path2 = loc2.getPath(),
            // NOTE: equals() takes the intersection location into account,
            // while this calculation of diff doesn't!
            diff = path1 === path2
                //Sort by both index and parameter. The two values added
                // together provides a convenient sorting index.
                ? (loc.getIndex() + loc.getParameter())
                - (loc2.getIndex() + loc2.getParameter())
                // Sort by path id to group all locs on same path.
                : path1._id - path2._id;
            if (diff < 0) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        // We didn't merge with a preexisting location, insert it now.
        locations.splice(l, 0, loc);
        return loc;
    }

    return { statics: {
        insert: insert,

        expand: function(locations) {
            // Create a copy since insert() keeps modifying the array and
            // inserting at sorted indices.
            var expanded = locations.slice();
            for (var i = 0, l = locations.length; i < l; i++) {
                insert(expanded, locations[i]._intersection, false);
            }
            return expanded;
        }
    }};
});
