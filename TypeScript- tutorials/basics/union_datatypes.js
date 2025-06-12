"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = "44";
var somebody = {
    name: "Sergio Martin",
    id: 334,
};
somebody = {
    userName: "Professsor",
    id: 1007,
};
somebody = {
    name: "Anibal Cortes",
    userName: "Rio",
    id: 911,
};
modifyId("i23");
modifyId(92);
modifyId();
// modifyId({ id: "i90" });
function modifyId(id) {
    if (id === void 0) { id = 13; }
    //   id = id.toUpperCase();
    //   Property 'toUpperCase' does not exist on type 'string | number'.
    //   Property 'toUpperCase' does not exist on type 'number'.
    ///////////////////////////
    //   to get rid of this error
    if (typeof id === "string") {
        id = id.toUpperCase();
    }
    else {
        id += 21;
    }
}
