const fs = require('fs');

function isFileExisted(path_way){
/*
    return new Promise((resolve,reject) =>{
        fs.access(path_way, (err)=>{
            if (err){
                reject(false);
            }else{
                resolve(true);
            }
        })
    })
*/

    return fs.promises.access(path_way, fs.constants.F_OK)
             .then(() => true)
             .catch(() => false)
  

};





function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
};

function Question(eulerQNum){
    var questionFileName ='./resultsOfEuler/Q'+padLeadingZeros(eulerQNum,4);
      if (isFileExisted(questionFileName+'.js')===true){
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
