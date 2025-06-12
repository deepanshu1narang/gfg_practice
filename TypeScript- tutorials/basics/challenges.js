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
var houses = [
    { name: "Atreides", planets: "Calladan" },
    { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
    { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
];
function findHouses(houses, filter) {
    var housesFound = [];
    if (typeof houses === "string") {
        houses = JSON.parse(houses);
    }
    Array.isArray(houses) &&
        houses.forEach(function (house) {
            if (filter) {
                var bool1 = filter(house);
                if (bool1) {
                    housesFound.push(__assign(__assign({}, house), { id: Math.random() }));
                }
            }
            else {
                housesFound.push(__assign(__assign({}, house), { id: Math.random() }));
            }
        });
    return housesFound;
}
var house1 = findHouses(houses, function (x) { return x.name === "Atreides"; });
var house2 = findHouses(houses, function (x) { return x.name === "Harkonnen"; });
