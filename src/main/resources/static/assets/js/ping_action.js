"use strict";
function findField(myForm){
    let name = myForm.prop("name");
    console.log("name:" + name);
    var fields = [];
    myForm.find(":input").each(function(idx, ele){
        fields.push(ele);
        //console.log(idx + ":name:" + ele.name + ":id:" + ele.id + ":type:" + ele.type);
    });
}