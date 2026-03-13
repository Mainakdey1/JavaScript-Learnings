
let variable = 3;

if (variable === 3) {
    console.log('True that');
} else if (variable === 2) {
    console.log('Oh no');
} else {
    console.log('fuck');
}

switch (true) {
    case false:
        console.log('False');
    case true:
        console.log('Truue')
};


switch ( 2 + 2 === 7 ) {
    case false: {
        console.log( "False." );
        break;
    }
    case true: {
        console.log( "True." );
        break;
    }
    default: {
        console.log('Do this if nothing is matched');
        break;
    };
};
