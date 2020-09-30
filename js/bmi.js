var bmi = function(weight, heightSquared){
    return weight/heightSquared;
    }
var weight = parseFloat(prompt("Enter your weight"));
var height = parseFloat(prompt("Enter your height in ft"));
var heightInMeters = height * 0.3048
heightSquared = heightInMeters * heightInMeters;
var result = bmi(weight, heightSquared);
alert("your bmi is " + result);
