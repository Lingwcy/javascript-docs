function camelize(str) {
    var result = str.split('');
    for (var i = 0; i < result.length; i++) {
        if (result[i] === '-') {
            result.splice(i, 1);
            if (i < result.length) {
                result[i] = result[i].toUpperCase();
            }
            i--;
        }
    }
    return result.join('');
}


function camelize2(str){
    return str
        .split('-')
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('')
}
console.log(camelize2("background-color"));
