"use strict";
class Coder {
    constructor(name, music, age, lang = "English") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getName() {
        return `Hello I am ${this.name}`;
    }
}
const user = new Coder('Dilnawaz', "Melody", 22, "Hindi");
console.log(user.getName());
console.log(user.name);
console.log(user.age);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I know ${this.lang} language`;
    }
}
const user1 = new WebDev("Acer", 'Dil', "Hip Hop", 22);
console.log(user1.getLang());
