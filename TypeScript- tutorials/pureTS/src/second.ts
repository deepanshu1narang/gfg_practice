//////////////// INTERFACES (again) ............/////////////////
// in IOS dev similar things are called protocols

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

type Content = {
  id: string;
  time: Date;
  media: Media;
};

type Media = {
  size: string;
  bit: string;
};

class Instagram implements TakePhoto, Story {
  constructor(public cameraMode: string, public filter: string, public burst: number, public conte?: Content) {}

  createStory(): void {
    console.log(`Story was created`);
  }
}

// can be done more than necessary but not lesser than necessary

class Youtube implements TakePhoto {
  constructor(protected vidId: number, public cameraMode: string, public filter: string, public burst: number, private flag: boolean) {}

  private isSafe(): void {
    let flag = Math.random() > 0.5;
    this.flag = flag;
  }

  public isUploadable(): boolean {
    this.isSafe();
    return this.flag;
  }
}
