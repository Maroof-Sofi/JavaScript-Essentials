let counter = 0;
const getData = ()=>{
    // calls an ApI and getData
 console.log("Fetching Data..." + counter++);
}
const doSomeMagic = function (getData, d){
    let timer;
    return function(){
    let context = this;
    let timer = setTimeout(()=>{
         getData.apply(context, arguments);
        }, d);
    }
}
const betterFunction = doSomeMagic(getData, 300); 