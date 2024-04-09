var a = 1;
let b1 = 2;
var b2 = 2;

function f1() {
    document.getElementById("p1").innerHTML = a;
}

function f2() {
    a = 2;
    let x = 3;
    document.getElementById("p2").innerHTML = x;
}

function f3() {
    a = 2;
    x = 10;
    for (let x = 0; x < 2; x++) {
        window.alert(x)
    }
    document.getElementById("p3").innerHTML = x;
}

function f4() {
    document.getElementById("p4").innerHTML =
        b1 + "!" + window.b1 + "!" + window.b2 +
        "在相同的作用域，或在相同的块中，通过 let 重新声明一个 var 变量是不允许的：";
}

function f5() {
    carName = "Audi";
    document.getElementById("p5").innerHTML = carName;
    var carName;
    // v=1;
    // document.getElementById("p5").innerHTML = v;
    // let v; 这种不允许
}

function f6() {
    const PI = 3.141592653589793;
    // PI = 3.14;      // 会出错
    // PI = PI + 10;   // 也会出错
    document.getElementById("p6").innerHTML = PI;
}

function f7() {
    const ali = {
        type: "a", mode: 43265, color: "pink"
    }
    // document.getElementById("p7").innerHTML = ali;
    ali.type = 1;
    // const car = { type: "porsche", model: "911", color: "Black" };
    // car = { type: "Volvo", model: "XC60", color: "White" };    // ERROR
    document.getElementById("p7").innerHTML = ali.type;
}

function f8() {
    const ls = [1, 3, '5']
    ls[0] = 2;
    ls.push(666);
    document.getElementById("p8").innerHTML = ls;
    // const cars = ["Audi", "BMW", "porsche"];
    // cars = ["Honda", "Toyota", "Volvo"];    // ERROR
}