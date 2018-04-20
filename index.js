var require=require("./words.js");


var inquirer=require('inquirer');

var selector=function(){
        var randomWords=Math.floor(Math.random()*list.length);
        allWords=list[randomWords];
        for(var i=0;i<allWords.length;i++){
            return console.log(blinker());
            
            
            }

        }
        inquirer.prompt([
            {
        name:"play",
        type:"confirm",
        message:"are you ready to play?"

            }

        ]).then(function(answer){
            if(answer.play){
                selector();

            }
        });
