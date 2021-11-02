let info=[];

function getArea(shape,a,b,c){
    switch (shape) {
        case 'rect':
            let rectArea=a*b;
            ExecutionSequence('rect',rectArea);
            break;
        case 'trapezoid':
            let trapezoidArea=(a+b)*c/2;
            ExecutionSequence('trapezoid',trapezoidArea);
            break;
        case 'circle':
            const pi=3.14;
            if(b===undefined){
                let oneCircle=a*a*pi;
                ExecutionSequence('circle',oneCircle);
            }else{
                let sum=0;
                for(let i=1; i<=b; i++){
                    let otherCircle=i*i*pi;
                    sum=sum+otherCircle;
                }
                ExecutionSequence('circleSum',sum);
            }  
            break;    
    }   
}
function ExecutionSequence(shape,outcome){
    info.push(`${shape} = ${outcome}`);
}

function printExecutionSequence(){
    const printInfo=info.join('/');
    console.log(printInfo);
}

getArea('circle',10);
getArea('rect',10,15);
getArea('trapezoid',10,15,12);
getArea('circle',1,5);
printExecutionSequence();