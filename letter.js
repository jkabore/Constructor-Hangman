var inquirer=require("inquirer");

var remaining=10;


var Letter=function(underliner,words,value){
this.underliner=underliner;
this.words=[];
this.value=false;

}
Letter.prototype.Show=function(){
    if(this.underliner===""){

return console.log(this.underliner="");
    }else{return console.log(this.underliner+"_");}
    

}
//checking to see the letter that was guessed is true
Letter.prototype.Check=function(){
    for(var i=0;i<this.words.length;i++){
if(this.underliner.indexOf(this.words[i])>0){
    return this.value=true;
    remaining--;
}else{remaining--;}
if(this.underliner===this.words[i]){
    console.log("yay you guessed the secret word");
    return this.value=false;
}else if(remaining===0){ return this.value=false;}
}}


module.exports=Letter;