function reverseString(str){
    var reverse = "";
    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
        
    }
    return reverse;
}
var statement = "Moahammad Ali";
var reverseThis = reverseString(statement);
console.log(reverseThis)