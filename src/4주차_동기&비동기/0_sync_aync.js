document.write("<div>0장 sync & async</div>");

// // 동기 코드 & 비동기 코드 예)
// function s_taskA()
// {
//     console.log('동기 : A 작업 끝');
// }

// s_taskA();
// console.log('동기 : 코드 끝!');

// function a_taskA()
// {
//     setTimeout(()=>{
//         console.log('비동기 : A 작업 끝!')}
//         ,2000);
// }

// a_taskA();
// console.log('비동기 : 코드 끝!'); 

// ------------------------------------------------------------------------------------

// Synchronous , Asynchronous (동기, 비동기)

// 동기적 방식 ( == 블로킹 방식 )
// : 자바스크립트는 코드가 작성된 순서대로 작업 처리 !
// : 이전 작업이 진행 중 일 때는 다음 작업을 수행하지 않고 대기 !
// : 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행 !
// : 정리 - 앞의 명령이 끝나고, 차례로 명령이 실행이되는 방식을 동기 !

// 동기적 방식의 장, 단점 ?
// : 장점 - 어떻게 작업들이 실행될 것임을 파악하기 쉬움 !!
// : 단점 - 하나의 작업이 너무 오래 걸리면 모든 작업이 오래 걸리게 때문에 속도 저하 !
// : 단점 - 이러한 단점이 웹 사이트에 적용되면 버튼 클릭 시 걸리는 시간에 따라 고객 만족 저하 !

// 비동기적 방식 ( == 논 블로킹 방식 )
// : 여러 개의 작업을 동시에 실행 !
// : 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행 !
// : 정리 - 독립적으로 자신만의 시간을 가지면서 병렬적으로 실행되는 방식을 비동기 !
// : 예) 어떤 작업이 언제 끝날지 예측하기 어렵거나, 주가 되는 작업이 아닐 때 ! - 통신 작업 fetch('url')

// 비동기적 방식의 장, 단점 ?
// : 장점 - 훨씬 빠른 속도로 전체 작업 실행 가능 !!
// : 장점 - 원래의 작은 그대로 진행되고, 비동기 작업은 병렬적으로 진행되면서 작업이 끝나면 원래 작업과 합류 !!
// : 단점 - 어떻게 작업들이 실행될 것임을 파악하기 어려움 !!

// 비동기적 방식의 종료 및 결과는 어떻게 확인 ??
// : 작업 전달 시 종료 할 때 실행시킬 콜백 함수를 같이 전달 !
