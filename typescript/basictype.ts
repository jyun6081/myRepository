// string, number, boolean
let car:string = 'bmw';
let age:number = 30;
let isAdult:boolean = true;

// 배열
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

// 튜블(Tuple)
let b:[string, number];
b = ['z', 1];
// b = [1, 'z']

b[0].toLowerCase();
// b[1].toLowerCase();

// 함수에서
// void >> 아무것도 return 하지 않는 경우
function sayHello():void{
    console.log('hello')
}

// never >> error반환 혹은 무한루프같이 끝나지 않는 경우
function showError():never{
    throw new Error();
}

function infLoop():never{
    while(true){
        // do something
    }
}

// enum >> 숫자의 경우 양방향으로 매핑, 문자의 경우 단방향으로 매핑
enum Os{
    Window,
    Ios,
    Android
}

let myOs:Os;

myOs = Os.Window;

// null, undefined

let d:null = null;
let e:undefined = undefined;