function f1() {
    document.getElementById('p1').innerHTML = 'a';
    document.getElementById('p1').innerHTML = Date();
}

function displayDate(idname) {
    document.getElementById(idname).innerHTML = Date();
}

function f2(){
    document.getElementById('p2').innerHTML = 'Date()';
    document.getElementById('p2').innerHTML = 'Date()'.length;
    var x = "中国是瓷器的故乡，因此 china 与\"China（中国）\"同名。"
    var x = "中国是瓷器的故乡，因此 china 与'China（中国）'同名。"
    var x = "字符 \\ 被称为反斜杠。";
    document.getElementById('p2').innerHTML = x;
}