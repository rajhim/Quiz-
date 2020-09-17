let qweLength = quiz.length;
document.querySelector('#instutin_Name').innerHTML=insName;
document.querySelector('.qwe-no').innerHTML = qweLength;
let qweTitle = document.querySelector('#qwe');
let qweOptions = document.querySelector("#options");
var qweNo= 0;
var marks = 0;
let chekAns=(qweNo,key)=>{
if(quiz[qweNo].answer === key){
    marks++;
}else{
    return;
}
}

let reqQue=(qweNo)=>{
    qweTitle.innerHTML='';
    qweOptions.innerHTML ='';
    qweTitle.innerHTML=quiz[qweNo].q;
    quiz[qweNo].options.map((opt,key)=>{
        qweOptions.innerHTML +=`<input type="radio" name="${qweNo}" onchange='chekAns(${qweNo},${key})' 
        value="${opt}" id='${opt}${key}'><label class="pointer" for="${opt}${key}">${opt}</label> `;
    })
}
let qwe =['1','2','3','4','5','6','7','8','9','10','11','12']; 
var i=0;
function callForLoop(){  
 setTimeout(()=>{
     console.log(qwe[i]);
        if(i<qwe.length){
            callForLoop();
        } 
        i++;
    },3000);

}
let startTime = async ()=>{
        console.log("Start");
        await callForLoop();
        console.log("End");
}

let result = ()=>{
    document.querySelector('#totalQuestion').innerHTML = qweLength;
    document.querySelector('#correctAnswers').innerHTML = marks;
    document.querySelector('#wrongAnswers').innerHTML = qweLength-marks;
    document.querySelector('.qwe').style.display = 'none'
}
let nextQwe=()=>{
    qweNo < qweLength-1 ? qweNo+=1: result(); ;
    reqQue(qweNo);
}
let reset=()=>{
    qweNo=0
    reqQue(qweNo);
}
reqQue(qweNo);
