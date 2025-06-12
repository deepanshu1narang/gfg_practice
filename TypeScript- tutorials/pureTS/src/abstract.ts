/////////// ABSTRACT Classes in TS ////////////

abstract class TakePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}

  // method definitions
  abstract getSepia(): void;
  getReelTime(): number {
    // some calculations
    return 8;
  }
}

// cannot create instance of abstract class .... (s = new TakePhoto2 ..... s is an instance of TakePhoto2)
// const hc = new TakePhoto2("HD", "canva");

//  to make object from that class this some other class has to inherit its properties

class Insta extends TakePhoto2 {
  constructor(public cameraMode: string, public filter: string, public burst: number) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("abstract method implemented");
  }
}

const hc = new Insta("HD", "canva", 9);
console.log(hc.getReelTime());
