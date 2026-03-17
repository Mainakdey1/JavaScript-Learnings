const myPromise = new Promise(( fulfill, reject) => {
    const res = true;
    setTimeout(() => {
        if (res === true) {
            fulfill('This promise was fulfilled');
        } else {
            reject(new Error('This promise was rejected'));
        };
    }, 10000);
});

myPromise.then( successfulResult => console.log( successfulResult), failedResult => console.error(failedResult));
