var name = [3, 6, 7, 3, 9, 4, 5, 7, 5,9];
var uniqueName = [];
for (let i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);