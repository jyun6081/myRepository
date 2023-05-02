function Person(name, first, second) {
    this.name = name,
        this.first = first,
        this.second = second
}
// 생성자 안에 함수를 작성시 객체가 생성될 때마다 메소드를 새로 만드므로 컴퓨터 자원(메모리, 성능)의 낭비가 생김
Person.prototype.sum = function () {
    return 'prototype : ' + (this.first + this.second);
}
var kim = new Person('kim', 10, 20);
kim.sum = function () {
    return 'this : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10);

// prototype의 특징 (javascript의 실행순서)
// 1. kim.sum() 호출시 객체 자신이 sum이라는 속성이 있는지를 찾음
// 2. 만약 존재하지 않다면 생성자의 prototype에 sum이 정의되어있는지 찾아서 실행

console.log('kim.sum()', kim.sum());
// kim.sum()의 경우 객체 자신이 sum이라는 속성이 있으므로 그것을 실행
console.log('lee.sum()', lee.sum());
// lee.sum()의 경우 객체 자신이 sum이라는 속성이 없으므로 생성자의 prototype에 sum이 정의되었는지 찾아서 실행