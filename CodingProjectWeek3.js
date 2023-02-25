
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

function yourName(firstName,lastName){
return (firstName+" "+lastName);
}
console.log(yourName("Breanna","Bonnet"));

function isArrayGreaterThan(arr) {
    var a=0
    for (i=0;i<arr.length;i++){
        a=a+arr[i];
    } if (a>100) {
    return true;
} else {
    return false;
}
}

let numberOfPets= [3,5,8,4,6,3,2,2,1]
console.log(isArrayGreaterThan(numberOfPets));
let timesItHasSnowedEveryMonth= [15,20,35,13,5,2,1,0,0,6,22,40]
console.log(isArrayGreaterThan(timesItHasSnowedEveryMonth));

function findTheAverage(arr) {
    var b=0
    for (i=0;i<arr.length;i++) {
        b=b+arr[i]
    }
    return (b/arr.length);
}

let mugsInEachHouse=[5,6,3,9]
console.log(findTheAverage(mugsInEachHouse));


function compareAverages(arr1,arr2){
    var a=0
    for (var i=0;i<arr1.length;i++){
        a=a+arr1[i]
    }
    var b=0
    for (var i=0;i<arr2.length;i++){
        b=b+arr2[i]
    }
    var average1=a/arr1.length;
    var average2=b/arr2.length;
    if (average1>average2){
        return true;
    }else{
        return false;
    }
}
let thisArrayFirst=[20,10,80,60]
let thisArraySecond=[5,8,10,16]
console.log(compareAverages(thisArrayFirst,thisArraySecond));


function willBuyDrink(isHotOutside,moneyInPocket){
    if((isHotOutside=true)&&(moneyInPocket>10.50)){
        return true;
    } else {
        return false;
    }
    
}
console.log(willBuyDrink(true,20));
console.log(willBuyDrink(false,8));
console.log(willBuyDrink(true,7.50));


function isStudentPassing(grade){
    if (grade>=70){
    return "Student is passing";
} else{
    return "Student is not passing";
}
}
console.log(isStudentPassing(80));
console.log(isStudentPassing(69));

function canWeGoOnVacation(timeOffWorkApproved,moneyInSavings){
    if((timeOffWorkApproved=true)&&(moneyInSavings>=900)){
        return "We can plan our vacation"
     } else{
        return "We have to wait to plan our vacation"
     }       
}
console.log(canWeGoOnVacation(true,900));
console.log(canWeGoOnVacation(true,750));
