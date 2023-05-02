var superObj = {superVal:'super'};

// 상속관계 설정
// 1. __proto__ 속성 사용
// 2. Object.create() 사용

// var subObj = {subVal:'sub'};
// subObj.__proto__ = superObj;    // prototype, __proto__
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;   // javascript실행을 일시중지 시킴 >> 브라우저에서 개발자도구 실행후 실행하면 디버거 위치에서 스크립트를 중지함
console.log('subObj.subVal >>', subObj.subVal);
console.log('subObj.superVal >>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal >>', superObj.superVal);

var kim = {
    name: 'kim',
    first: 10, second: 20,
    sum: function () {
        return this.first + this.second;
    }
}
/*
var lee = {
    name: 'lee',
    first: 10, second: 10,
    avg: function () {
        return (this.first + this.second) / 2;
    }
}
lee.__proto__ = kim;
*/
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first + this.second) / 2;
}
console.log('kim.sum() : ', kim.sum());
console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());
