function one(){
    var a = 10;
}
one();
console.log(a);

function two(){
    let b = 10;
    let bb = 20;
}
two();
console.log(b);

let c;

function three(){
    c= 25;
}
three();
console.log(c);

function four(){
    d =25;
}
four();
console.log(d);

let e;
function five(){
    const greetting = "hello";

    function greet(){
        let name = "Eddie";
        e = `${greetting} ${name}`;
    }
    greet();
}

five()
console.log(e)

function six() {
    if (true) {
        let f = 50
    }
    console.log(f);
}