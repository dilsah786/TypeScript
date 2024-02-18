class Coder {
    secondLang! :string;

    constructor(
        public name:string,
        public music:string,
        public age:number,
        public lang:string = "English"
         )
    {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getName(){
        return `Hello I am ${this.name}`
    }

}
const user = new Coder('Dilnawaz',"Melody",22,"Hindi")


console.log(user.getName());

console.log(user.name);
console.log(user.age);



class WebDev extends Coder {
    constructor(public computer:string,
                name:string,
                music:string,
                age:number
        ){
            super(name,music,age)
           this.computer = computer
    }
    public getLang(){
        return `I know ${this.lang} language`
    }
}

const user1 = new WebDev("Acer",'Dil',"Hip Hop",22)

console.log(user1.getLang());

