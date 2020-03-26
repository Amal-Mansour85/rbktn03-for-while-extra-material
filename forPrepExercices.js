// Basic Requirments
// 0.Try to write all of the exercises using both the for loop and while loop.

// 1.Write a function sum that computes the sum of the numbers in an array.

var arr =[1,2,3,4,5];

function sum(arr) {
	var totale = 0;
	for(var i = 0; i< arr.length ;i++){
		
		totale = totale + arr[i];
	}
	  return totale;

}
    

// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.
  var array =[1,2,3,4,5,6,7,8,9];

  function max (array){
  	var x = 0;
  	for(var i = 0; i< array.length ;i++){
  		if(array[i] > x){
  		
  		x = array[i]
  	}
   return x;
  }
// 3.Try the following at a console:
     function longestWord (str){

     	var strAr = str.split(" ");
     	var longest = strAr [i]

     for (var i= 0; i<strAr.length ; i++){

     if (longest.length < strAr[i].length){ 
 	 	 	 

 	 	  longest=strAr[i];
     	
}

     	return longest ;
 }
}
//  'the quick brown fox jumped over the lazy dog'.split(' ');
//  'Hello, world!'.split('')
//  '1,2,3,4,5,6'.split(',')
// What is returned by split (You can read more about it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and how does it work?
//  Use split to write a function longestWord that takes a string as an argument and returns the longest word.
// 4.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

// function remove(array, element) {
	function remove (array,element){
   
   	for(var i=0 ; i < array.length ; i++){
   		
   		if(array[i] === element){
   			array.slice(i);
   			i-- ;
   		}

   	}
       return array;

   }
//  // your code here
//  }
//  remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
// 5.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.
   function evens (array){
   
   	for(var i=0 ; i < array.length ; i++){
 
   	     array [i] ++ ;
   	}
   	return array ;
   }
// More Practice
// 1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.
 var array =[1,2,3],

 function average (array){

  var sum = 0 ;
 	 
 	 for(var i = 0; i < array.length; i++){

 	 	sum += array [i];


 	 }
 	return sum /array.length;

 }


// 2. Write a function called min that finds the smallest number in an array of numbers.
var array=[10,20,40,100];

function min (number){
	return Math.min(...array);
}


// 3.Write a function shortestWord that works like longestWord, but returns the shortest word instead.
function  shortestWord (str){

 	 var arrayStr = string.split(" ") ; 
 	 var shortest = arrayStr[0] ; 

 	 for (var i=0; i<arrayStr.length; i++){ 
 	 	 if(shortest.length > arrayStr[i].length){ 

 	 	 	 shortest = arrayStr[i] ; 
 	 	} 
 	 } 		
 	       return shortest ; 
 }


// 4.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of times that the character occurs in the string.
function countChar (str,charac){

	var strArr =  str.split('') ; 
 	 var counter = 0 ; 

 	 for (var i = 0; i < strArr.length; i++) { 
 	 	 if(strArr[i] === char){ 

 	 	 	   counter++ ; 
 	 	 } 
 	 } 

 	   return counter ; 
 }

// 5.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.
function evenLengthWords (arr){

	var results= arr[i];

	for (var i = 0; i < arr.length; i++){

	     results.push(arr[i]); 

     } 
   } 

 	      return results; 
 }
	



// Advanced
// 1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed

// 2.Write a function keep that 'keeps' certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.
