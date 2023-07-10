var var1;
var var2;
function compare1(value1){
    var1 = value1;
}

function compare2(value2){
    var2 = value2;
    compare();
}

function compare(){
    var1 = var1.split(" ");
    var temp = [];
    for(var i = 0;i<var2.length;i++){
        if(var1.length>i){
            //console.log(typeof(var1));
            //result = var1.match(var2[i])
            result = var2.search(var1[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"))
            if(result == -1){
            document.getElementById("missing").innerHTML += var1[i] + " ";
            temp.push(var1[i]);
            delete var1[i];
            }else{
                document.getElementById("missing").innerHTML += var1[i] + " ";
                delete var1[i];        
            }
        }   
    }
    p = document.getElementById("missing");
    for(var k=0;k<temp.length;k++){
    //p.innerHTML = p.innerHTML.replace( new RegExp("\\b"+temp[k]+"\\b","g"),"<span style='color:red'>" + temp[k] + "</span>");
    p.innerHTML = p.innerHTML.replace( temp[k],"<span style='color:red'>" + temp[k] + "</span>");
}
}




