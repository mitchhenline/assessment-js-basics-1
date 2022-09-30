///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let sumFujiAcres = 0;
let sumGalaAcres = 0;
let sumPinkAcres = 0;


for (let i = 0; i<fujiAcres.length; i++){
    sumFujiAcres += fujiAcres[i];
}
//console.log(sumFujiAcres)

for (let i = 0; i<galaAcres.length; i++){
    sumGalaAcres += galaAcres[i];
}
//console.log(sumGalaAcres)

for (let i = 0; i<pinkAcres.length; i++){
    sumPinkAcres += pinkAcres[i];
}
//console.log(sumPinkAcres)

let totalAcres = sumFujiAcres + sumGalaAcres + sumPinkAcres

console.log(totalAcres)
//returns 63

/*

MY COMMENTS: first I created let variables for the sum of each array and set it to zero. Then I created a for loop
for each one that would add each number of acres from each day and save it to the variable I created. I checked that each
was working with console.log. I finished by setting the totalAcres variable to equal the sum of the other three

*/


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)
// returns 9

/*

MY COMMENTS: Calculated the average simply by dividing totalAcres by 7

*/


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0){
    days += 1
    acresLeft -= averageDailyAcres
}
console.log(days)

/*

MY COMMENTS: wrote the while loop so that as long as there are acres left there would be one more day added,
then the number of averageDailyAcres would be subtracted from that number. It repeates until the number got to zero
tested and returned 20 days.

*/

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiM = fujiAcres.slice()
let galaM = galaAcres.slice()
let pinkM = pinkAcres.slice()

let fujiTons = []
let galaTons = []
let pinkTons = []

//console.log(fujiM)

for (let i = 0; i < fujiM.length; i++){
   fujiTons.push(fujiM[i] * 6.5)
}

for (let i = 0; i < galaM.length; i++){
    galaTons.push(galaM[i] * 6.5)
}

for (let i = 0; i < pinkM.length; i++){
    pinkTons.push(pinkM[i] * 6.5)
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

/*

MY COMMENTS: First, I created variables fujiM, galaM and pinkM and set them as copies of the acres arrays.
Then, I set the fujiTons, galaTons and pinkTons variables to empty arrays
Then I took the acre numbers set in the fujiM arrays and multiplied each index by 6.5 in a for loop
I repeated this with gala and pink. The math seems to check out!

*/


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// let fujiPounds =
// let galaPounds =
// let pinkPounds =






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
