
var friends = ["Jack", "Steven", "Stan", "Rick", "Russ"];
// console.log(friends[0]);
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i].toUpperCase() + ":");
    for (var j = 99; j > 0; j--) {
        // in here, j is first 99, then it will be 98, then it will be 97
// check as you go along. start with consoling just 'j'
        if (j > 2) {
            console.log(j + " lines of code in the file, " + j + " lines of code, " + friends[i] +  " strikes one out, clears it all out, " + (j-1) + " lines of code in the file.");


           } else if (j === 2) {
             console.log(j + " lines of code in the file, " + j + " lines of code, " + friends[i] +  " strikes one out, clears it all out, " + (j-1) + " line of code in the file.");
           } else {
            console.log("1 line of code in the file, 1 line of code, " + friends[i] + " strikes one out, clears it all out, no lines of code in the file.");
        }
    }
}
