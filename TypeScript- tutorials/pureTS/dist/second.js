"use strict";
//////////////// INTERFACES (again) ............/////////////////
// in IOS dev similar things are called protocols
class Instagram {
    constructor(cameraMode, filter, burst, conte) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.conte = conte;
    }
    createStory() {
        console.log(`Story was created`);
    }
}
// can be done more than necessary but not lesser than necessary
class Youtube {
    constructor(vidId, cameraMode, filter, burst, flag) {
        this.vidId = vidId;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.flag = flag;
    }
    isSafe() {
        let flag = Math.random() > 0.5;
        this.flag = flag;
    }
    isUploadable() {
        this.isSafe();
        return this.flag;
    }
}
