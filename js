Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

Tests
Passed:myArray should now equal [["dog", 3]].
Passed:removedFromMyArray should contain ["John", 23].



answer:

const myArray = [["John", 23], ["dog", 3]];

const removedFromMyArray = myArray.shift();
