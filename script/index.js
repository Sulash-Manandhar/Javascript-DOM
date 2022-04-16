
function addText(){
    console.log("button clicked")
    var input = document.getElementById('select').textContent;
    console.log(input);

}







// Closures 
function outerValue(outerval){
    return (function innerValue(innerVal){
        console.log(outerval);
        console.log(innerVal);
    })
}

const callFunction = outerValue('out');
callFunction('in')


