// Displaying number from 1 to 100
let num = 100, n, count;
console.log('Displaying number from 1 to 100');

for (number = 1; number <= num; number++) {
    console.log(number);    
}

// Displaying even numbers from 1 to 100
console.log('Displaying even number from 1 to 100');
for(i =1; i<=num; i++)
{
    if(i % 2 == 0){
        console.log(i);
    } 
}

// Displaying odd numbers from 1 to 100
console.log('Displaying odd numbers from 1 to 100');
for(n=1; n<=num; n++){
    if( n % 2 == 1){
        console.log(n);
    } 
}

// Prime numbers
console.log('Displying prime number from 1 to 100');

for(i=2; i<=100; i++){
   n = i / 2;
   if(n % 2 == 0){
    console.log(n);
   }
 
}










// for(i=1; i<=100; i++){
//     // console.log(i % 2 ==0);
//     if(i%2 == 0 && true)
//     {
//         console.log(i);
//     }
//     else{
//         console.log('odd numbers');
//     }
// }