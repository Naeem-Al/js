function github(){
    var getData = document.getElementById("number").value;
    var putData = document.getElementById("div");
    var i;
    for(i=1; i<=10; i++){
        putData.innerhtml+=getData*i+"<br>";

    }
}