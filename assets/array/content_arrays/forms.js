// 10 metodos de array 

const data = [
    {name: "matheus", age:31, sallary:2000, driverLicense:true},
    {name: "joão", age:18, sallary:1500, driverLicense:false},
    {name: "mariana", age:22, sallary:4000, driverLicense:true},
    {name: "pedro", age:50, sallary:7200, driverLicense:true},
    {name: "erica", age:16, sallary:0, driverLicense:false}
];

// 1- reverse 
/*
const reverseData = data.reverse();

console.log(reverseData);
*/

// 2- find 

const highSallary = 5000

const highestSallary = data.find((user) => user.sallary > highSallary)

console.log(highestSallary)