"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// method logic.... interface doesn't care about it.... just name it something and then tell params and return type.. that's it
function isCouponValid(coupon) {
    return true;
}
var someRandomApi = function (id) {
    id = id - 2 + 2;
    var Ranks;
    (function (Ranks) {
        Ranks[Ranks["genin"] = 0] = "genin";
        Ranks[Ranks["chunin"] = 1] = "chunin";
        Ranks[Ranks["jonin"] = 2] = "jonin";
        Ranks[Ranks["anbu"] = 3] = "anbu";
        Ranks[Ranks["kage"] = 4] = "kage";
    })(Ranks || (Ranks = {}));
    var idx = Math.round(Math.random() * 5);
    return Ranks[idx];
};
function getRank() {
    return someRandomApi(this.userId);
}
var sasuke = {
    email: "uchiha.sasuke@leaf.com",
    userId: Math.random(),
    dbId: 911 + Math.random(),
    startTrial: function () { return "trial started"; },
    startTrial2: function () { return 4; },
    getCoupon: function (coupon) {
        if (coupon && isCouponValid(coupon)) {
            return 20;
        }
        else {
            return 0;
        }
    },
    githubToken: "XAEtu3i72o425",
};
sasuke.email = "uchiha.sasuke@sound.com";
sasuke.getRank = getRank;
console.log(sasuke.getRank());
var randomCA = {
    canFileITR: "yes",
    dbId: 678,
    userId: 987,
    email: "r@p.com",
    startTrial: function () { return "tyu"; },
    startTrial2: function () { return 6; },
    githubToken: "gyibnoje08rx2",
    degree: "B.Com",
};
