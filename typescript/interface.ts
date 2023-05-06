/*
let user: object;

user = {
    name: 'xx',
    age: 30
}
// object의 경우 특정 속성값에 대한 정보가 없기 때문 
*/

type Score = 'A' | 'B' | 'C' | 'D'

interface User {
    name: string,
    age: number,
    gender?: string,
    readonly birthYear: number,
    [grade: number]: Score
}
let user: User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1:'A',
    2:'B'
    // 3:'q'
}

user.age = 10;
user.gender = "male";
// user.birthYear = 1990;   // readonly이므로 수정이 불가능

console.log(user.age)


// 함수의 경우
// interface 함수명{(매개변수):리턴타입}
interface Add {
    (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
    return x + y;
}

add(10, 20);

interface isAdult{
    (age:number):boolean;
}

const adultAge: isAdult = (age) => { return age > 19 };

// 클래스의 경우 implements

interface Car{
    color: string,
    wheels: number,
    start(): void
}

class Bmw implements Car{
    color;
    wheels = 4;
    constructor(c:string){
        this.color = c;
    }
    start(){
        console.log('go');
    }
} 

const bmw = new Bmw('green');
console.log(bmw);
bmw.start();

interface Benz extends Car{
    door:number,
    stop():void
}

const benz:Benz = {
    color:'red',
    wheels : 4,
    door : 5,
    stop() {
        console.log('stop')
    },
    start(){
        console.log('go');
    }
}
console.log(benz);
benz.start();
benz.stop();

interface Toy {
    name: string;
}

interface ToyCar extends Car, Toy {
    price: number;
}