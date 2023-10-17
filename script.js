let cache = 0;
let doc=document.getElementById("screen");
doc.textContent = cache;


function buttonPress(button) {
    //adds numbers to screen as a calculator should behave
    if ( Number.isInteger(button) == true ) {
       cache = cache.toString() + button.toString();
       cache = parseInt(cache);
       doc.textContent = cache;
    }
    else if ( button == 'ac') {
        cache = 0;
        doc.textContent = cache;
    }
    else if ( button == 'posneg') {
        cache = cache * -1;
        doc.textContent = cache;
    }
}