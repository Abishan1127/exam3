// MCQ
const obj={
    first:20,second:30,first:50
}
console.log(obj)
console.log(typeof(NaN))
var a = "scaler"
var result = a.substring(2,4);
document.write(result);
console.log(typeof(NULL))
 
//Essay
//01

let n = 24;
let I = 20, r = 100, ans = n;

while (I <= r) {
    let mid = Math.floor((I + r) / 2);
    if (mid * mid <= n) {
        ans = mid;
        I = mid + 1;
    } else {
        r = mid - 1;
    }
}

console.log(ans);

//02
const example =({a,b,c}) => {
    console.log(a,b,c);

};
example(0,1,2);
//03
let arr = [10, 20, 30, 40, 50];

let first = arr[0];
console.log(first);


let last = arr[arr.length - 1];
console.log(last);  

//04
const arr4 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}
//05
function flatten(arr) {
    return arr.reduce((one, two) => {
      if (Array.isArray(two)) {
        return one.concat(flatten(two));
      } else {
        return one.concat(two);
      }
    }, []);
  }
  const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
  const flattened = flatten(nestedArray);
  
  console.log(flattened);  
  
  
//06
 
//reduce() is used to take all element and use of the array.

//07
//filter
const numberss = [1, 2, 3, 4, 5];
const even = numberss.filter(num => num % 2 === 0);

console.log(even); 

//find
const numbersss = [1, 2, 3, 4, 5];
const first1 = numbersss.find(num => num % 2 === 0);

console.log(first1);  

//08
const obj22 = {
    name: 'Abi',
    age: 21,
    city: 'kili'
  };
  
  Object.values(obj22).forEach(value => {
    console.log(value);
  });
  
  
//09
// a blue print of creating more objects with properties and methods

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.self = function() {
      console.log("Hello, my name is " + this.name);
    };
  }
  
  let person1 = new Person("thathu", 30);
  let person2 = new Person("sinthu", 25);

  console.log(person1.name);  
  console.log(person2.age);   
  person1.self();        
  person2.self();  
//10
let persons = { name: "Abinaya", age: 21 };

console.log("name" in persons); 
console.log("age" in persons);
console.log("address" in persons);  

  






     