let buttonColor = 'azure'
let buttonPressedColor = '#911'

let cache = 0;
let memory = 0;
let operator = "";
let doc=document.getElementById("screen");
doc.textContent = cache;


function buttonPress(button) {
    //adds numbers to screen as a calculator should behave
    if ( Number.isInteger(button) == true ) {
        cache = cache.toString() + button.toString();
        cache = parseFloat(cache);
        doc.textContent = cache;
     }

    if ( button == 'ac') {
        cache = 0;
        memory = 0;
        output = 0;
        doc.textContent = cache;
        //resets whatever operator button is highlighted back to original
        document.getElementById(operator).style.backgroundColor=buttonColor;
    }

    else if ( button == 'posneg') {
        cache = cache * -1;
        doc.textContent = cache;
    }

    else if ( button == 'percent' ) {
        cache = cache * 0.01;
        doc.textContent = cache;
    }

    else if ( button == 'decimal' ) {
        cache = cache + '.';
        doc.textContent = cache;
    }

    else if ( button == 'equals') {
        let output = 0;
        if ( operator == 'plus') {
            output = cache + memory;
            doc.textContent = output;
            memory = output;
        } else if (operator == 'minus') {
            output = memory - cache;
            doc.textContent = output;
            memory = output;
        } else if (operator == 'multiply') {
            output = memory * cache;
            doc.textContent = output;
            memory = output;
        } else if (operator == 'divide') {
            output = memory / cache;
            doc.textContent = output;
            memory = output;
        }
        document.getElementById(operator).style.backgroundColor=buttonColor;
    }
    //switch statement for the operators
    switch ( button ) {
        case "plus":
            memory = cache;
            cache=0;
            operator = button;
            document.getElementById('plus').style.backgroundColor=buttonPressedColor;
            document.getElementById('minus').style.backgroundColor=buttonColor;
            document.getElementById('multiply').style.backgroundColor=buttonColor;
            document.getElementById('divide').style.backgroundColor=buttonColor;
            break;
        case 'minus':
            memory = cache;
            cache = 0;
            operator = button;
            document.getElementById('minus').style.backgroundColor=buttonPressedColor;
            document.getElementById('plus').style.backgroundColor=buttonColor;
            document.getElementById('multiply').style.backgroundColor=buttonColor;
            document.getElementById('divide').style.backgroundColor=buttonColor;
            break;
        case "multiply": 
            memory = cache;
            cache = 0;
            operator = button;
            document.getElementById('multiply').style.backgroundColor=buttonPressedColor;
            document.getElementById('plus').style.backgroundColor=buttonColor;
            document.getElementById('minus').style.backgroundColor=buttonColor;
            document.getElementById('divide').style.backgroundColor=buttonColor;
            break;
        case "divide":
            memory = cache;
            cache = 0;
            operator = button;
            document.getElementById('divide').style.backgroundColor=buttonPressedColor;
            document.getElementById('plus').style.backgroundColor=buttonColor;
            document.getElementById('multiply').style.backgroundColor=buttonColor;
            document.getElementById('minus').style.backgroundColor=buttonColor;
            break;
    };
}