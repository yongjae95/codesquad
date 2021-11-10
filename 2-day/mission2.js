//1. factorial 함수
//임의의 숫자(m)를 입력받아 1부터 m까지의 factorial 값을 배열로 담아서 반환하는 함수 만들기.
function calculate(m){
    if(m<=1) return[1];//종료 시점
    let factorial=calculate(m-1);
    factorial.push(m*factorial[factorial.length-1]);
    return factorial;
}

console.log(calculate(4));
/*2. 배열 거르기
주어진 사람들 중 아래 조건을 만족하는 사람들로 구성된 배열을 만들어서 반환하는 함수 만들기.
특수기호가 없는 아이디 제외
아이디에서 숫자를 제거
2 가지 iteration을 처리하는 버전을 만든다.
for/while문을 사용한 버전 만들기.
forEach,filter, map등의 고차함수를 사용한 버전 만들기
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
filterId(peoples)
> ["honux", "head", "zello", "lucas"]
*/

/*3. 평균 구하기
아래 예시는 네 명의 학생에 대한 과목 점수이다.

각 학생은 3가지 과목에 대한 점수를 가지고 있다.

각 학생의 평균점수(1)와 모든 학생의 최고점수의 평균점수(2)를 출력하라.
const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];
*/
const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];

function avg(grades){
    return grades.reduce(accumuLator,currentValue)
}