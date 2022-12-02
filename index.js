const fs = require('fs');

function isFileExisted(path_way){
    return new Promise((resolve,reject) =>{
        fs.access(path_way, (err)=>{
            if (err){
                reject(false);
            }else{
                resolve(true);
            }
        })
    })
};

function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
};
function Question(eulerQNum){
    var questionFileName ='./resultsOfEuler/Q'+padLeadingZeros(eulerQNum,4);
    if (isFileExisted(questionFileName+'.js')){
        var resultQ = require(questionFileName);
        return "Answer: \n"+resultQ.answer +"\n\nDescription of question"+ eulerQNum + "\n"+resultQ.questionDescription+"\nhttps://projecteuler.net/problem="+eulerQNum;
    
    }else{
        return "Question "+eulerQNum+" is not solved yet.";
    }

      
    
};
function test(){
    return "got number:"
};
module.exports  = {
    Question:Question,
    test:test
};
