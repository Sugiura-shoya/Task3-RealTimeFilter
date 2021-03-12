'use strict';

let flag=true;

var array = ["mainPhoto_0","mainPhoto_1","mainPhoto_2","mainPhoto_3"];

var inputText = document.getElementById("inputText");

inputText.addEventListener("input",function(){
    if(inputText.value === ""){
        array.forEach(function(value){
            document.getElementById(value).style.display='block';
        });
    }
    else{
       Search(inputText.value);
    }
},false);


//文字を探す関数
function Search(text){
    //配列のを探す変数
    let i = 0;
    //漢字の配列
    var array0=['車','青空','朝顔','馬'];
    var array1=['くるま','あおぞら','あさがお','うま'];
    var array2=['kuruma','aozora','asagao','uma'];
    array.forEach(function(value){
    if(array0[i].indexOf(text)===-1 && array1[i].indexOf(text)===-1&&array2[i].indexOf(text)===-1){
        document.getElementById(value).style.display='none';
            
    }
    else{
        document.getElementById(value).style.display='block';
        console.log("aaaaaaa");
    }
    i++;
    });
}