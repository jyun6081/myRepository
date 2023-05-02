var kim = { name: 'kim', first: 10, second: 20 };
var lee = { name: 'lee', first: 10, second: 10 };
function sum(prefix) {
    return prefix + (this.first + this.second);
}
// sum.call(); 은 sum();과 같다.
// sum.call(this에 넣을 값, 인자값)
// 모든 함수는 call이라는 메소드를 가지고있다. 
console.log('sum.call(kim) ', sum.call(kim, '>> '));    //apply
console.log('sum.call(lee) ', sum.call(lee, ':: '));
// .bind() 내부적으로 사용할 this, 인자를 고정하여 새로운 함수를 만듬
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());