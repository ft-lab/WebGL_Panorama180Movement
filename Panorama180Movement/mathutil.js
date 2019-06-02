/**
 * Math operation.
 */
var MathUtil = {};
MathUtil.name = "Math util";

/**
 * Calculate the position of the perpendicular drawn from cPos to the straight line of p1-p2.
 * @param[in]  p1    Starting point of straight line.
 * @param[in]  p2    End point of straight line.
 * @param[in]  cPos  Target point.
 * @param[out] retData  var retData = {position: 0.0, distance: 0.0};
 *                      'position' : Position when p1-p2 is 1.0.
 *                      'distance' : Length of perpendicular.
 */
MathUtil.calcPerpendicular = function (p1, p2, cPos, retData) {
    retData['position'] = -1.0;
    retData['distance'] = -1.0;

    var retV = new THREE.Vector3(0, 0, 0);
    var fMin = 1e-7;

    var vDir = new THREE.Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
    var len1 = p1.distanceTo(p2);
    if (len1 < fMin) return false;
    vDir.x = vDir.x / len1;
    vDir.y = vDir.y / len1;
    vDir.z = vDir.z / len1;

    var vDir2 = new THREE.Vector3(cPos.x - p1.x, cPos.y - p1.y, cPos.z - p1.z);
    var len2 = cPos.distanceTo(p1);
    if (len2 < fMin) {
        retData['position'] = 0.0;
        retData['distance'] = 0.0;
        return true;
    }
    vDir2.x = vDir2.x / len2;
    vDir2.y = vDir2.y / len2;
    vDir2.z = vDir2.z / len2;

    // Is it on the straight line of p1-p2.
    var angleV = vDir.dot(vDir2);
    if (Math.abs(angleV) > 1.0 - fMin) {
        var aPos = len2 / len1;
        if (angleV < 0.0) {
            retData['position'] = -aPos;
            retData['distance'] = 0.0;
            return true;
        }
    }

    var len3 = angleV * len2;
    retData['position'] = len3 / len1;
    retData['distance'] = vDir.clone().multiplyScalar(len3).add(p1).distanceTo(cPos);
    return true;
};

