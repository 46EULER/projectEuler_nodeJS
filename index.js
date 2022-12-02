const fs = require('fs')


function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function Question(eulerQNum){
    var questionFileName ='./resultsOfEuler/Q'+padLeadingZeros(eulerQNum,4);

        fs.access(questionFileName+'.js', function(err){
            if (err.code == "ENOENT"){
                return "Question "+eulerQNum+" is not solved yet."
            }else{
                var resultQ = require(questionFileName);
                return "Answer:\n"+resultQ.answer +"\n\nDescription of question"+ eulerQNum + "\n"+resultQ.questionDescription+"\nhttps://projecteuler.net/problem="+eulerQNum
            
            };
          });

      
    
}
function test(){
    return "got number:"
}
module.exports  = {
    Question:Question,
    test:test
};
