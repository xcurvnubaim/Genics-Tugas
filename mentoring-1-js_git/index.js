// for(let i=1; i<=100; i++){
//     if(i % 15 == 0)
//         console.log("FizzBuzz");
//     else if(i%5 == 0)
//         console.log("Buzz");
//     else if(i%3 == 0)
//         console.log("Fizz")
//     else
//         console.log(i)
// }

// const min = (a,b) => a<b? a:b;

// console.log(min(0,10));

// const arr = [1,2,3,4]

// const res = arr.map(i => "number" + i)
// const res2 = arr.filter(i => i%2==0)
// console.log(res)
// console.log(res2)

const url = "https://booking.kai.id/api/stations2";

const getStation = async()=>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.table(data);
    } catch(e){
        console.log(e);
    }
}

getStation();