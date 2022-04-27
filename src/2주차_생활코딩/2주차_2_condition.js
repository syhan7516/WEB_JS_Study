document.write("<div>2장 조건문</div>");


document.write("<h2>- if 조건문</h2>");
if(true)
{
    console.log("1");
}
console.log("2");
console.log("3");
console.log("4");
console.log("------------------");

if(false)
{
    console.log("1");
}
console.log("2");
console.log("3");
console.log("4");
console.log("------------------");

document.write("<h2>- if ~ else 조건문</h2>");
if(true)
{
    console.log("1");
}            
else
{
    console.log("2");
}
console.log("3");
console.log("4");
console.log('------------------');

document.write("<h2>- if ~ else if ~ else 조건문</h2>");
if(false)
{
    console.log("1");
}
else if(false)
{
    console.log("2");
}
else
{
    console.log("3");
}
console.log("4");
console.log('------------------');

// 조건문? 
// 하나의 프로그램이 하나의 흐름으로 가는 것이 아닌 조건에 따라 다른 순서의 기능들이 동작가능하게 하는 것!
// 조건문 방법 :
// 1.if(조건) {~실행할 코드~} 
// 2.if(조건) {~실행할 코드~} else {~실행할 코드~}
// 3.if(조건) {~실행할 코드~} else if {~실행할 코드~} else {~실행할 코드~}

// 실습 : 