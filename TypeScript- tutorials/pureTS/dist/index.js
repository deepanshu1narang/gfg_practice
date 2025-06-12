"use strict";
console.log("TS is still here");
const trial = "lite-server";
console.log(trial);
///////////////////////// Classes /////////////////
class User {
    constructor(email, name, pincode, city) {
        this.city = "Jodhpur";
        //   this readable property can be modified in the class
        this.pincode = 136043;
        this.email = email;
        this.name = name;
        this.city = city;
        // left side city is string type while right side city is string | ubdefined type..... we need to match their types
        this.pincode = pincode;
    }
    //   in this for the properties/methods the ones who aren't private are public.... or it's better to write them as public email: string instead of email:string
    //   example in class User2
    pinCode() {
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
    constructor(email, name, pincode, city) {
        this.city = "Jodhpur";
        this.pincode = 136043;
        this.email = email;
        this.name = name;
    }
    pinCode() {
        console.log(this.pincode);
    }
    getLocation() {
        return this.city;
    }
}
// User3 class for eriting in one more syntax
class User3 {
    constructor(emai, name, pincode = 210032, nickName, age = 21) {
        this.emai = emai;
        this.name = name;
        this.pincode = pincode;
        this.nickName = nickName;
        this.age = age;
        // keep all readonly outside
        this.city = "Bangalore";
        // this.email = email; ....... this not needed inside constructor
    }
    setPin() {
        this.pincode = Math.floor(Math.random() * 100000) + 101010;
    }
    getPin() {
        this.setPin();
        console.log(this.pincode);
    }
    //   this getPin can be written as:
    get getPinReturned() {
        return this.pincode;
    }
    //   IMP setters can never have a return type ...... interiview tip
    set giveNickName(name) {
        this.nickName = name;
    }
    get getNickName() {
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
    constructor(frameWork, experience, salary, email, name) {
        super(email, name);
        this.frameWork = frameWork;
        this.experience = experience;
        this.salary = salary;
        this.email = email;
        this.name = name;
        this.language = "JS";
    }
    grownBy(years) {
        this.age += years;
    }
    getAge() {
        return this.age;
    }
    changePinCode(newPin) {
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
