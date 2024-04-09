function f1() {
    // var x = 7;		// 向 x 赋值 7
    // var y = 8;		// 向 y 赋值 8
    // var z = x + y;		// 向 z (x + y) 赋值 15
    // z = x * y;
    // var x = 7;
    // x += 8;
    // z++;
    // txt1 = "Bill";
    // txt2 = "Gates";
    // txt3 = txt1 + " " + txt2;
    // txt1 = "Hello ";
    // txt1 += "Kitty!";
    // x = 7 + 8;
    // y = "7" + 8;
    var z = "Hello" + 7;
    // document.getElementById('p1').innerHTML = ++z;
    // document.getElementById('p1').innerHTML = txt3;
    // document.getElementById('p1').innerHTML = txt1;
    document.getElementById('p1').innerHTML = z;
}

function f2() {
    a = 5;
    z = a ** 2;
    z = Math.pow(2, a);
    document.getElementById('p2').innerHTML = z;
    document.getElementById('p2').innerHTML = "PI" in Math;
    // document.getElementById('p2').innerHTML = yield z;
}

function f3() {
    var length = 7;                             // 数字
    var lastName = "Gates";                      // 字符串
    var cars = ["Porsche", "Volvo", "BMW"];         // 数组
    var x = { firstName: "Bill", lastName: "Gates" };    // 对象
    var x = 911 + "Porsche";
    var x = 911 + 7 + "Porsche";
    var x = "Porsche" + 911 + 7;
    var answer = "It's alright";             // 双引号内的单引号
    var answer = "He is called 'Bill'";    // 双引号内的单引号
    var answer = 'He is called "Bill"';    // 单引号内的双引号
    var x1 = 34.00;     // 带小数点
    var x2 = 34;        // 不带小数点
    document.getElementById('p3').innerHTML = x1;
    // document.getElementById('p3').innerHTML = x1 + "" + x2;
    var y = 123e5;      // 12300000
    var z = 123e-5;     // 0.00123
    document.getElementById('p3').innerHTML = y;
    document.getElementById('p3').innerHTML = z;
    var x = true;
    var y = false;
    var person;                  // 值是 undefined，类型是 undefined。
    person = undefined;          // 值是 undefined，类型是 undefined。
    var car = "";                // 值是 ""，类型是 "string"
    var person = null;           // 值是 null，但是类型仍然是对象
    var person = undefined;           // 值是 undefined，类型是 undefined。
    document.getElementById('p3').innerHTML = typeof (person);
    document.getElementById('p3').innerHTML = typeof (person);
    document.getElementById('p3').innerHTML = typeof undefined;
    document.getElementById('p3').innerHTML = typeof null;
    document.getElementById('p3').innerHTML = null === undefined;
    document.getElementById('p3').innerHTML = null == undefined;
    document.getElementById('p3').innerHTML = typeof [1, 2, 3, 4];
    //typeof 运算符把数组返回为 "object"，因为在 JavaScript 中数组即对象。

}

function sum(a, b) {
    return a + b
}
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

function f4() {
    a = 1, b = 2;
    document.getElementById('p4').innerHTML = sum(a, b);
    document.getElementById('p4').innerHTML = toCelsius(77);
    document.getElementById("p4").innerHTML = toCelsius;
    document.getElementById("p4").innerHTML = typeof (toCelsius);
    var x = toCelsius(77);
    var text = "The temperature is " + x + " Celsius";
    var text = "The temperature is " + toCelsius(88) + " Celsius";
    document.getElementById('p4').innerHTML = text;
}

function f5(){
    var person = {
        firstName: "Bill",
        lastName: "Gates",
        id: 678,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
        myf:function(a,b){
            return a + " ~ " + b;
        }
    };
    document.getElementById('p5').innerHTML = person;
    document.getElementById('p5').innerHTML = person.fullName;
    document.getElementById('p5').innerHTML = person.fullName();
    document.getElementById('p5').innerHTML = person.myf();
    document.getElementById('p5').innerHTML = person.myf(22,33);
    document.getElementById('p5').innerHTML = person.id;
    document.getElementById('p5').innerHTML = person['firstName'];
}