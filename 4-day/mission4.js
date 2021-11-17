function bracketDepth(data){
let array=[];
let openBracket=0;
let closeBracket=0;
const dataSplit=data.split("");

for(let i=0; i<dataSplit.length; i++){
    if(dataSplit[i]==="["){
        array.push(dataSplit[i]);
        openBracket+=1;
    }else if(dataSplit[i]==="]"){
        array.pop();
        closeBracket+=1;
    }
}
if(openBracket===closeBracket){
    return openBracket;
}else{
    return "닫는 괄호가 일치하지 않습니다.";
}
}

function bracketElements(data){
    let result=data.replace(/[0-9]/g,"");
    result=result.split("");
    return data.length - result.length;
}

const data = "[1,[2],[3,4,[5,[6]]]]";
console.log(`배열의 중첩된 깊이 수준은 ${bracketDepth(data)}이며 총 ${bracketElements(data)}개의 원소가 포함되어 있습니다.`);

