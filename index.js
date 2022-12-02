const fs = require('fs')


function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function Question(eulerQNum){
    var questionFileName ='./resultsOfEuler/Q'+padLeadingZeros(eulerQNum,4);
    
    try {
        fs.access(questionFileName+'.js', fs.constants.F_OK, (err) => {
            if (err){
                return "Question "+eulerQNum+" is not solved yet."
            }else{
                var resultQ = require(questionFileName);
                return "Answer:\n"+resultQ.answer +"\n\nDescription of question"+ eulerQNum + "\n"+resultQ.questionDescription+"\nhttps://projecteuler.net/problem="+eulerQNum
            
            };
          });
      } catch (err) {
        return "Error:\n"+err
      }
      
    
}
function test(){
    return "got number:"
}
module.exports  = {
    Question:Question,
    test:test
};
