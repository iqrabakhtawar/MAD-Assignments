/////Question 1
let num= "23617";
let kth_number=4;
    console.log("Kth last digit is: ");
let a=0;
for( let j=num.length; j>=0; j--){
    
    if (a==4){
        console.log(num[j]);
        break;
    }
    else{
        a=a+1;
        continue;

    }
}

//// Question 2
let string="23618";
  let c=Array.from(string);
  console.log(c);

   let result=c.reduce(reducer_func)
    function reducer_func(prev,curr)
    {
        return Number (prev)+ Number (curr);
    }
    console.log(result);


////Question 3
    let string1="23617";
    let y=Array.from(string1);
    console.log(y);
    let arr6=y.filter(filter_func)
    function filter_func(a,i)
{
    if(a,i%2==0)
    {
        return a+i;
    }
}
  console.log(filter_func(2,6));



  //// Question 4
  let arr1=[0,1,2,3,4,5,6,7,8,9,10]
  let arr2=arr1.map(squareX);
  function squareX(n)
  {
      return n**2;
  }
  console.log(arr2);


  let arr3=[0,1,2,3,4,5,6,7,8,9,10]
  let arr4=arr3.map(cubeX);
  function cubeX(n)
  {
      return n**3;
  }
  console.log(arr4);


/////Question 6
let number = Math.ceil(Math.random() * 10);
console.log(number);
let guess_number = prompt('Guess the number between 1 and 10');
if (guess_number==number)
console.log("You Win");
else
console.log("Not Matched");



//// Question 7
function first_last_10(numbers)
{
  var end_position = numbers.length >=2;
  return numbers[0] == 10 || numbers[end_position] == 10;
}


console.log(first_last_10([10,4,5]));
console.log(first_last_10([1,6,8,1]));
console.log(first_last_10([2,5,3])); 



 /////QUESTION 8
function alphabetical_order(string)
  {
        return string.split('').sort().join('');
  }
console.log(alphabetical_order("comsats"));


