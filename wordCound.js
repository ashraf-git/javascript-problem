var speech = "I am a good Person.   I don't   snore at night";
// speech[2] = "m";
// console.log(speech[2]);
var count = 0;
for(i = 0; i<speech.length; i++){
    var char = speech[i];
    if (char == " " && speech[i-1] != " ") {
        count++;
    }

}
count++;
console.log(count);