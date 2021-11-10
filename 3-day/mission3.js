/*
1. 해시맵 구현
해시맵(해시테이블)의 특징에 대해서 미리 학습한다.

해시맵처럼 동작하는 코드를 구현한다.

문자열 키와 문자열 값을 저장하는 해시맵 라이브러리를 구현한다.
고유한 Hash 함수를 정한다.
put(String key, String value) 키-값을 추가한다.
remove(String key) 해당 키에 있는 값을 삭제한다.
containsKey(String) 해당 키가 존재하는지 판단해서 Bool 결과를 리턴한다.
get(String) 해당 키와 매치되는 값을 찾아서 리턴한다.
isEmpty() 비어있는 맵인지 Bool 결과를 리턴한다.
keys() 전체 키 목록을 [String] 배열로 리턴한다.
replace(String key, String value) 키-값으로 기존 값을 대체한다.
size() 전체 아이템 개수를 리턴한다.
clear() 전체 맵을 초기화한다.
객체 형태로 만든다.
객체는 JavaScript prototype 속성을 활용한다.
*/

function myHash(){
    myHash.prototype.put=function(stringKey,stringValue){
        this[stringKey]=stringValue;
    };
    myHash.prototype.remove=function(stringKey){
        delete this[stringKey];
    };
    myHash.prototype.containsKey=function(stringKey){
         for(let key in this){
             if(key===stringKey){
                 return true;
             }else{
                 return false;
             }
         }
    };   
    myHash.prototype.get=function(stringKey){
        return this[stringKey];
    };
    myHash.prototype.isEmpty=function(){

    };
    myHash.prototype.keys=function(){
        return Object.keys(this);
    };
    myHash.prototype.replace=function(stringKey,stringValue){
        if(Object.keys(this).includes(stringKey)){
            this[stringKey]=stringValue;
        }
        
    };
    myHash.prototype.size=function(){
        return Object.keys(this).length;
    };
    myHash.prototype.clear=function(){
        for(let stringKey in this){
            delete this[stringKey];
        }
    };
}
//test
const hash=new myHash();
hash.put("a",1);
hash.put("b",2);
hash.put("c",3);
hash.put("a",4);
hash.put("a",3);
console.log(Object.keys(hash));
console.log(hash);