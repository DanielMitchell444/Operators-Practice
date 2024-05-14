/*
In this section, we will be learning about operators in JavaScript.
In most programming languages, operators are incredibly similar, but
some of the time, you will see different operator symbols or words
depending on the programming language. But JavaScript follows
similar syntax for operator symbols
*/

/*
One of the first operator symbols we will be learning is the greater than
symbol. The greater then symbol essentially checks to see if a variable
is greater than a number. For example, lets say we declare a variable
named number and set it equal to 8. Lets now use the greater than operator
to check to see if number is greater than 5. If it is greater than 5, we
can console.log("hi"). We can do this like so
*/

let number = 8;

if(number > 5){
console.log("hi")
}

/*The greater than sign is essential tool to programming. This is also
something that you will be using a lot in your programming journey,
so make sure to remember it.
*/


/*In some instances, you will also have to check to see if a number is
greater than or equal to another number. This is essentially the same thing
as what we did. But the huge different being that the equal sign it after the
greater than sign. For example, lets say we want to check to see if the number
variable we just created is greater than or equal to 5, we can write this like so
*/

if(number >= 5){
  console.log('hi');
}


/* 
Another operator that is constantly used in JavaScript and most programming
languages is the less then operator. The less than operator checks to see
if a number is less than another number. For example, lets say we want to
check to see if number is less than 5. We can do this like so
*/

if(number < 5){
    console.log('hi');
}

/*
Lets say we want to check to see if number is less than or equal to 5. We can do
this using the following syntax. This syntax is incredibly similar to the
greater than, except with different signs. We can do this like so
*/

if(number <= 5){
    console.log('hi');
}

/*The point of this is that whatever operator we use, the equal sign it typically
after the less than or greater than sign.

*/

/*
PRACTICE
Below this comment, i want you to create a if statement. I want you to make a
variable that checks to see if a number is greater than or equal to another number
please post the code below this comment.
After that i want you to create another if statement that checks to see if
the variable you just created is less than another number. Please post all
your code below this comment.
*/

/*
OR OPERATOR
Do you ever wonder if they're other operators in programming. Well, luckily
there are 2 or 3 more operators that we will be using. Firstly, we will be
learning about the or operator.
The or operator is symbolized using || sign. This will indicate to JavaScript
that we are saying or.
You might be asking yourself, okay, but what do we use this for?
We can typically use the or operator to check to see if two conditions
are true. But the catch is that when we use the or operator, either condition
can be true for the entire condition to be true. Lets show this by creating
a variable and putting the or operator in practice.
Below we will create another variable named number2 that is equal to 6, we will
then check to see if number is greater than 5 or if number2 is greater than 8,
like so
*/

let number2 = 6;
if(number2 > 5 || number2 > 8){
    console.log("hi");
}

/*
Essentially, we both know that 6 is not greater to 8. So your first instinct
might be to say that entire condition would be false. But that is not the case
with the or operator, only one condition needs to be true in order for it to
be true. So since 6 is greater than 5, the condition would still be deemed true.
*/

/*
PRACTICE:
Below this comment, i want you to create 2 if statement using the or operator.
You also need to create variables for this if statement, the first if statement
should have both conditions being false, while the second if statement should
have only one condition to be true. Please post the code below
*/

/*
AND OPERATOR
The and operator is the last operator we will be looking at. The and operator
has a syntax of &&. This is a bit different from or, because unlike or,
both conditions need to be true in order for the condition to be true.
If one condition is considered false, then the whole condition will be false
and it will go to the next available statement.
To test this, lets create a variable named number3 and set it equal to 7,
and then lets create a if statement with it like so
*/

let number3 = 7;

if(number3 >= 7 && number3 < 6){
    console.log("hi");
}

/*
If you look at the problem, you will notice that the first condition is true
but the second condition is false, this means that the entire condition would
be false and it would not run. But if we did something like so
*/

if(number3 >= 7 && number3 > 3){
    console.log("hi")
}

/*Since both condition are true, this would be considered a true statement,
and thus, hi would be logged into the console
*/


/*
PRACTICE
Below this comment, i want you to create  2 if statement that uses the && 
operator, the first if statement needs to be deemed as false, while the other
if statement needs to be deemed true. Please put the code below this comment
*/


/*
The last thing we will be talking about is the not equal to sign. The not equal
to sign basically is a way to check to see if something is not equal to another
thing. There are multiple ways we can use it. The first way is with equal
signs, we can essentially use the not equal sign in front of two equal
signs, and to JavaScript, that would symbolize that we are trying to check
to see if it is not equal.
For example, lets create a variable that is equal to 8, and then check to see if
the variable is not equal to 6. We can do this like so
*/
let number4 = 8

if(number4 !== 6){
    console.log("hi")
}

/*
In this instance, this condition would be true. Since 8 is not equal to 6, it
would log hi in the console.
*/

/*
The second way, and probably one of the more weirder ways of using the not
equal to sign is by putting a ! in front of a variable. For example, lets go
back to one of the coding problems we did earlier. The sleep in
problem.

The problem is as follows

The parameter weekday is true if it is a weekday, 
and the parameter vacation is true if we are on vacation. 
We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

Examples

sleepIn(true, true) → true
sleepIn(true, false) → false
sleepIn(false, true) → true
*/

/*Essentially for this problem we can use the not equal to sign, since it says that
we sleep in if it is not a weekday or we're on vacation. So to do this,
we first got to set up the function like so
*/

function sleepIn(weekday, vacation){

}

/*Remember that weekday, and vacation are parameters. Meaning that they 
are just references, and when we call the function, we will be passing
arguments that will replace both weekday and vacation
Most of the time, the parameters will be the things you will be
using inside the if statement.
So, we know that we sleep in if it is not a weekday or we're on vacation,
so we know that we can use the not equal to operator. We can essentially
write it like so
*/

if(!weekday || vacation){
    return true;

} else {
 return false;
}

/*This is essentially checking to see if it isn't a weekday, and we know that
if it isn't a weekday, then we are on vacation, so we can just put the vacation
parameter there 
When we have a parameter like that without a not equal sign, we are essentially
just checking to see if the parameter is there or not.
*/

/*PRACTICE 
Below this comment, i want you to create a variable that is equal to 10,
and then i want you to check to see if the variable is not equal to 8 using
the correct syntax. Please post the code below this comment.

After that, i want you to create 2 variables, one will be equal to true,
and the other will be equal to false. After that, i want you to create
two if statements, one if statement will check to see if the true statement
is not equal. and then the second statement will have the variable without
the not equal sign.
*/