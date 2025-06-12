"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function passCoordinatesFromObject(obj) {
    return __assign({}, obj);
}
function passCoordinatesFromNumber(x, y) {
    return { x: x, y: y };
}
function passCoordinate(arg1, arg2) {
    var coords = { x: 0, y: 0 };
    if (typeof arg1 === "object") {
        // coords = { ...arg1 }; // Type '{}' is missing the following properties from type 'Coordinate': x, y
        coords = __assign({}, arg1);
    }
    else if (typeof arg1 === "string") {
        arg1.split(",").forEach(function (str) {
            var _a = str.split(":"), key = _a[0], value = _a[1];
            coords[key] = parseInt(value, 10);
        });
    }
    else {
        coords = {
            x: arg1,
            y: arg2,
        };
    }
    return coords;
}
console.log(passCoordinate(10, 20));
console.log(passCoordinate({ x: 10, y: 20 }));
console.log(passCoordinate("x:10,y:20"));
