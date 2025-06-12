interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   method 1 to define a function inside interface
  startTrial: () => string;
  //   optional method
  getDiscount?: (coupon: string) => number;
  // 2nd method
  startTrial2(): number;
  //   optional method
  getCoupon?(coupon: string | undefined): number;
  getRank?(): string;
}

// method logic.... interface doesn't care about it.... just name it something and then tell params and return type.. that's it

function isCouponValid(coupon: string): boolean {
  return true;
}

const someRandomApi = (id: number): string => {
  id = id - 2 + 2;
  enum Ranks {
    genin,
    chunin,
    jonin,
    anbu,
    kage,
  }
  let idx = Math.round(Math.random() * 5);
  return Ranks[idx];
};

function getRank(this: any): string {
  return someRandomApi(this.userId);
}

const sasuke: User = {
  email: "uchiha.sasuke@leaf.com",
  userId: Math.random(),
  dbId: 911 + Math.random(),
  startTrial: () => "trial started",
  startTrial2: () => 4,
  getCoupon: (coupon) => {
    if (coupon && isCouponValid(coupon)) {
      return 20;
    } else {
      return 0;
    }
  },
  githubToken: "XAEtu3i72o425",
};
sasuke.email = "uchiha.sasuke@sound.com";
sasuke.getRank = getRank;
console.log(sasuke.getRank());
// sasuke.dbId = 91; readOnly

// to add something in interface
interface User {
  githubToken: string;
}
// it got added.... it is called re-opening of interface

// Admin has all the properties of User and on top of itAdmin has some of the properties of its own
interface Admin extends User {
  role: "admin" | "modeler" | "autheror";
}

interface CA {
  degree: string;
}
interface SuperAdmin extends User, CA {
  canFileITR: "yes" | "no";
}

const randomCA: SuperAdmin = {
  canFileITR: "yes",
  dbId: 678,
  userId: 987,
  email: "r@p.com",
  startTrial: () => "tyu",
  startTrial2: () => 6,
  githubToken: "gyibnoje08rx2",
  degree: "B.Com",
};

// interface SuperAdmin extends

export {};
