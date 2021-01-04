// Your code goes here!
import {calculateAspectRatio} from './aspect-ratio.js';
import{modulo, percentage, percentageOf, difference} from'./percentage.js';
import * as elem from './elements.js';
/* import {
    mod2,
    perc2,
    percOf2,
    diff2,
    asp2,
} from './elements.js'; */

elem.mod2.addEventListener('keyup', function(){
    elem.modResult.value = modulo(Number(elem.mod1.value),Number(elem.mod2.value));
})

elem.perc2.addEventListener('keyup', function(){
    elem.percResult.value = percentage(Number(elem.perc1.value),Number(elem.perc2.value));
})
elem.percOf2.addEventListener('keyup', function(){
    elem.percOfResult.value = percentageOf(Number(elem.percOf1.value),Number(elem.percOf2.value));
})
elem.diff2.addEventListener('keyup', function(){
    elem.diffResult.value = difference(Number(elem.diff1.value),Number(elem.diff2.value));
})

elem.aspResultWidth.addEventListener('keyup', function(){
    elem.aspResultHeight.value = calculateAspectRatio(Number(elem.asp1.value),Number(elem.asp2.value), Number(elem.aspResultWidth.value));
})
elem.aspResultHeight.addEventListener('keyup', function(){
    elem.aspResultWidth.value = calculateAspectRatio(Number(elem.asp1.value),Number(elem.asp2.value), Number(elem.aspResultHeight.value),'h');// ===h and not undefined anymore
})

// elem - is a namespace