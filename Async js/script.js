// var a=10;
// let b = 20;
// let c;
// function add(a,b,c){
//     return a+b+c;
// }
// c=30;  
// let store = add(a,b,c);
// // c=30;   
// console.log(store);
// console.log(`hello`);
// for(let i=0; i<100; i++){
// }
// console.log(`world`);

// function delayedfunction() {
//     console.log(`hi there`);
// }
// setTimeout(delayedfunction,2000);

function getdata(callbackread){
    setTimeout(function(){
        let data = [{name:"virat",matchs:125}]
        callbackread(data);      
    }, 4000);
}

function readdata(arr) {
    setTimeout(function(){
        let arrvalues = arr[0].name;
        callbackprint(arrvalues);
        // printdata(arr);
    },2000)
}
function printdata(value){
    console.log(`${value}hello`);
    
}
getdata(function(arr){
    readdata(arr,printdata)
})