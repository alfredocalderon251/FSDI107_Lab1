//imports
var math=require("./myMathLib");

//console.log("Hello from NodeJS");

function init(){
    // console.log("Inside Init fn");
    // var sum=21+21;
    // console.log(sum);
    HelloMe("Alfredo");

    var res=math.lowerNumber(9,10);
    console.log(res);

    var divide_res=math.divide(5,10);

    var divide2=math.divide(10,2);
    var divide3=math.divide(10,0);
    var divide4=math.divide(0,40);
    console.log(divide_res);
    console.log(divide2);
    console.log(divide3);
    console.log(divide4);

    var nums = [1912, 289, 12398,2340970,123409,0987123,287];

    console.log(math.lowestInArray(nums));

    console.log(math.isItEven(5));
    console.log(math.isItEven(2));

    console.log(math.isItEven(446846846));

    console.log(math.isItEven(57));

    //printsomeEvens(5);
    console.log("EvenNumbers "+math.printsomeEvens(600));


    //usage of Lib
    console.log(math.version());
}

function HelloMe(Name){
    console.log("Hello & Welcome "+Name);
}



function test(){
    console.log("Hello, Im a fn");
}

init();

/**
 * Console tricks and commands
 * 
 * WIN:
 * on file explorer address bar type cmd + Enter
 * 
 * cd= change directory
 * 
 * Win:
 * cls= clear screen
 */