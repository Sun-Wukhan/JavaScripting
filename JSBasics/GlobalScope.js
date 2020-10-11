var myGlobalVariable; 

function testRun1(){
oopsGlobal = 5;

}

function testRun2(){
    var output = "";

    if(typeof myGlobalVariable != "undefined") {
        output += "myGlobalVariable: " + myGlobalVariable; 
    } else {
        output = "Hello";
    }

    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    
    console.log(output);
}

testRun2(); 

