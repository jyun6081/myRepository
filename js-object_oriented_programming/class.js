class Person {
    // constructor :: 객체 생성시 실행되는 함수(초기값 설정) 
    constructor(name, first, second) {
        console.log('constructor');
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first + this.second;
    }
}
// 상속
// super() :: 부모 class의 constructor를 참조한다.
// super.method() :: 부모 class의 prototype method를 참조한다.
class PersonPlus extends Person {
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;
    }
    avg() {
        return (this.first + this.second + this.third) / 3;
    }
}
// 메소드 구현방법 
// 1. prototype 객체 사용하여 작성
// 2. class 내부에 작성
/*
Person.prototype.sum = function () {
    return 'prototype : ' + (this.first + this.second);
}
*/
var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim', kim);
/*
kim.sum = function () {
    return 'this : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10);
console.log('lee.sum()', lee.sum());
*/
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());