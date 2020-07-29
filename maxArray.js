var marks = [24, 58, 55, 85, 58, 57, 24, 54];
var max = marks[0]
for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if(element>max){
        max = element
    }
    
}
console.log("Hghest is : ", max);