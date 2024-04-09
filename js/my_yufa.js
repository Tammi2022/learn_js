function mf1() {
    var x, y, A, B, C;	// 如何声明变量
    x = 7; y = 8;	// 如何赋值
    z = x + y;	// 如何计算值
    A = 15.90;
    B = 'T';
    C = "a";
    document.getElementById("p1").innerHTML = A + B + C + x + y + z;
}

function mf2() {
    a = (7 + 8) * 10 / 5
    document.getElementById("p2").innerHTML = 
    a * 10 + "A" + "大小写敏感" + "倾向于小写字母开头的驼峰大小写法";
}