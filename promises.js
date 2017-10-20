/*
function getTempPromise(location){
    
    return new Promise(function(resolve, reject){
        
        resolve(79);
        
        reject('City not found');
        
    });
    
}

getTempPromise('Boston').then(function(temp){
    
    console.log('Success', temp);
    
}, function(err){
    
    console.log('Error', err);

})
*/

function addPromise(a,b) {
    
    return new Promise(function(resolve, reject){
        
        if (typeof a === 'number' && typeof b === 'number') {
            
            resolve(a+b);
            
        }
        else {
            
            reject('One or both parameters are not valid');
        }
        
    });

}

addPromise(10,5).then(function(ans){
    
    console.log('Success: ', ans);
    
}, function(err){
    
    console.log('Error: ', err);

})

addPromise(10,'John').then(function(ans){
    
    console.log('Success: ', ans);
    
}, function(err){
    
    console.log('Error: ', err);

})

addPromise(100,24).then(function(ans){
    
    console.log('Success: ', ans);
    
}, function(err){
    
    console.log('Error: ', err);

})

