// const myPromise = new Promise( ( fulfill, reject ) => {
//   const myResult = false;
//   setTimeout(() => {
//     if( myResult === true ) {
//         fulfill( "This Promise was fulfilled." );    
//     } else {
//         reject( new Error( "This Promise has been rejected." ) );
//     }
//   }, 100);
// });

// myPromise
//   .then( fulfilledResult => console.log(fulfilledResult ) )
//   .catch( rejectedResult => console.log( rejectedResult ) )
//   .finally( () => console.log( "The Promise has settled." ) );

async function myfunc() {
    return 'khatam tata';
};

myfunc().then( res => console.log(res));