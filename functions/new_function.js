function myfunction() {
    console.log('This is my first function ');
};

myfunction();

function defaultarg(param = 'omitted') {
    console.log(param);
};

defaultarg();
function myFunction() {
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
    console.log( result );
};
myFunction("My first string", "My second string", "my third string");