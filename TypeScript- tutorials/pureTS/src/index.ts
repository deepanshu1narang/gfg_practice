console.log("TS is still here");
const trial: string = "lite-server";
console.log(trial);

///////////////////////// Classes /////////////////

class User {
  email: string;
  name: string;
  readonly city?: string = "Jodhpur";
  //   this readable property can be modified in the class
  private pincode?: number = 136043;

  constructor(email: string, name: string, pincode: number, city?: string) {
    this.email = email;
    this.name = name;
    this.city = city;
    // left side city is string type while right side city is string | ubdefined type..... we need to match their types
    this.pincode = pincode;
  }

  //   in this for the properties/methods the ones who aren't private are public.... or it's better to write them as public email: string instead of email:string
  //   example in class User2

  public pinCode(): void {
    console.log(this.pincode);
  }
}

const deepanshu = new User("deepanshu@narang.com", "Deepanshu Narang", 136053);
const hitesh = new User("h@h.com", "Hitesh Choudhary", 129401, "Jaipur");
// hitesh.city = "34134"; ///readbale properties can only  be accessed but not modified outside class
console.log(deepanshu.city);
console.log(hitesh.city);
// console.log(hitesh.pincode); // can't access private outside class .... inside class it can be accessed as well as modified
hitesh.pinCode();

class User2 {
  public email: string;
  public name: string;
  readonly city: string = "Jodhpur";
  private pincode: number = 136043;

  constructor(email: string, name: string, pincode: number, city?: string) {
    this.email = email;
    this.name = name;
  }

  public pinCode(): void {
    console.log(this.pincode);
  }
  private getLocation(): string {
    return this.city;
  }
}

// User3 class for eriting in one more syntax

class User3 {
  // keep all readonly outside
  readonly city: string = "Bangalore";
  constructor(public emai: string, public name: string, private pincode: number = 210032, private nickName?: string, protected age: number = 21) {
    // this.email = email; ....... this not needed inside constructor
  }

  private setPin(): void {
    this.pincode = Math.floor(Math.random() * 100000) + 101010;
  }
  public getPin(): void {
    this.setPin();
    console.log(this.pincode);
  }
  //   this getPin can be written as:
  public get getPinReturned(): number {
    return this.pincode;
  }

  //   IMP setters can never have a return type ...... interiview tip
  public set giveNickName(name: string) {
    this.nickName = name;
  }

  public get getNickName(): unknown {
    console.log(this.nickName);
    return 0;
  }
}

const naruto = new User3("uzumaki.naruto@rasengan.com", "Naruto Uzumaki");
console.log(naruto.getPinReturned);
naruto.getPin();
console.log(naruto.getPinReturned);
// naruto.nickName = "kyuuubi";
// console.log(naruto.nickName);
naruto.giveNickName = "The unprecictable ninja";
// console.log(naruto.nickName);
naruto.getNickName;

// /////////// getters and setters /////////////////

class Developer extends User3 {
  language: string = "JS";
  constructor(public frameWork: string, public experience: number, private salary: number, public email: string, public name: string) {
    super(email, name);
  }

  public grownBy(years: number): void {
    this.age += years;
  }

  public getAge(): number {
    return this.age;
  }

  private changePinCode(newPin: number): void {
    // Property 'pincode' is private and only accessible within class 'User3'.
    // this.pincode = newPin;
    // Property 'setPin' is private and only accessible within class 'User3'.
    // this.setPin();
  }
}

const dev = new Developer("React", 3, 1500000, "denji.sasuke@sharingan.com", "Uchiha Sashuke");
console.log(dev.getAge());
dev.grownBy(5);
console.log(dev.getAge());
// console.log(dev.salary);
