//Write code that will go through each number from 1 to 100 and:

//For each number that is a multiple of 3, print "Fizz"
//For each number that is a multiple of 5, print "Buzz"
//For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
//ll other numbers should just print normally


for (let num = 1; num < 101; num++){
    if(num % 3 == 0 && num % 5 == 0) {
        console.log("fizzbuzz");
    } else if (num % 3 == 0) {
        console.log("fizz");
    } else if (num % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(num);
    }
}

