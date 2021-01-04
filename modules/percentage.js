function modulo(first, second) {
    return first % second;
}

function percentage(first, second) {
    return (first * second) / 100;
}

function percentageOf(first, second) {
    return (first * 100) / second;
}

function difference(first, second ) {
    let calc = second - first;
    return (calc * 100) / first 
}  /*switch (e.target.id) {
    case "difference_1":
    case "difference_2":
        result.value = difference(Number(input[0].value), Number(input[1].value)); 
}*/
 export {modulo}
 export {percentage}
 export {percentageOf}
 export {difference}
