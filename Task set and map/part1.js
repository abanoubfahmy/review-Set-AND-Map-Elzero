// let mySet = new Set([10]);
// mySet.add(20).add(mySet.size);
// console.log(mySet);
// mySet.forEach((e) => e === 2 ? console.log(e) : e)




// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// let mySet = new Set(myFriends.sort());
// console.log(mySet);



// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
//   };
  
//   let myMap=new Map(Object.entries(myInfo));
//   console.log(myMap);
//   console.log(myMap.size)


// 
// let theNumber = 100020003000;

// // Convert the number to a string, split it into individual characters, 
// // create a Set to remove duplicates, convert it back to an array, and then sort it.
// let sortedUniqueDigits = Array.from(new Set(theNumber.toString().split(''))).sort().slice(true);

// console.log(sortedUniqueDigits);

// let theName = "Elzero";
// theName = theName.split(''); // Split the string into characters

// let mySet = new Set(theName); // Create a Set to hold unique characters
// console.log(mySet); // Output the Set


// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// console.log(chars.copyWithin(3));

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let mySet = new Set(chars); // Create a Set to hold unique characters

// // Convert the Set back to an array
// let uniqueArray = Array.from(mySet);

// // Use copyWithin to copy elements within the array
// // This will copy elements starting from index 0 to index 3
// uniqueArray.copyWithin(3,);

// // Output the modified array
// console.log(uniqueArray);

// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']


// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let mySet = new Set(chars); // Create a Set to hold unique characters

// // Convert the Set back to an array
// let uniqueArray = Array.from(mySet);

// // Remove the specific element (20) using filter
// uniqueArray = uniqueArray.filter(item => item !== 20);

// // Output the modified array
// console.log(uniqueArray);

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let mySet = new Set(chars); // Create a Set to hold unique characters

// // Convert the Set back to an array
// let uniqueArray = Array.from(mySet);

// // Remove the specific element (20) using filter
// uniqueArray = uniqueArray.filter(item => item !== 20);

// // Output the modified array
// console.log(uniqueArray);
