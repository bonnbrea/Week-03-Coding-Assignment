
let ages= [3,9,23,64,2,8,28,93];
console.log(ages);

var first=ages[ages.length-ages.length];
var last=ages[ages.length-1];
function difference(first, last){
   return last-first;
}
console.log(difference(first,last));

ages.push(21);
var last=ages[ages.length-1];
console.log(difference(first,last));

 var x=0;
for (var i=0;i<ages.length;i++) {
    x=x+ages[i];
}
var average=x/ages.length;
console.log(average);

let names= ['Sam','Tommy','Tim','Sally','Buck','Bob'];
console.log(names);

var y=0
for (var i=0;i<names.length;i++) {
    y=y+names[i].length;
}
var averageNameLength=y/names.length;
console.log(averageNameLength);

var allNames=names[0];
for (var i=1;i<names.length;i++) {
    allNames=allNames.concat(" ",names[i]);
}
console.log(allNames);

var lastName=names[names.length-1];
console.log(lastName);

var firstName=names[0];
console.log(firstName);

var nameLengths=[]
for (var i=0;i<names.length;i++) {
    nameLengths[i]=names[i].length
}
console.log(nameLengths);

var addLengths=0
for (var i=0;i<nameLengths.length;i++){
    addLengths=addLengths+nameLengths[i];
}
console.log(addLengths);

function newFunction(word,n){
    var w=''
    for (i=1;i<=n;i++)
    {
       w= w.concat(word);
    }
    return w;
}
console.log(newFunction('Hello',3));


