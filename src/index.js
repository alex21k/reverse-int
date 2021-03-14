module.exports = function reverse (n) {
    let str = n.toString();
    
    str = str.split('').reverse().join('');
    
    let x = Number.parseInt(str);
    console.log(x);
    return x;
    }
