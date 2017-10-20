//var names = ['John', 'Romina', 'Ryan'];
//
//names.forEach(function(name){
//    
//    console.log(name);
//    
//});
//
//names.forEach((name) => {
//
//    console.log("Arrow: " + name);
//    
//});
//
//names.forEach((name) => console.log(name));

function add(a,b){
    return a+b;
}

var addStatement = (a,b) => {
    return a+b;
}
console.log(addStatement(1,4));

var addExpression = (a,b) => a+b;
console.log(addExpression(10,40));