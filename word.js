var require=require("./letter.js");
var userInput=process.argv[2];
var list=["letter","words","money","spring","tree","wine"];
var arr=[];
for(var i=0;i<list.length;i++){
var secretWord=list.split(",");
arr=arr.push(secretWord[i]);}

    
var allWords=new Letter(userInput,arr,false);
var blinker=function(){
    if(userInput){
        allWords.Show();
        allWords.Check();
        
    }
};




    
    