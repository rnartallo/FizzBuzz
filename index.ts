console.log('Hello world!')
for (let i=1;i<101;i++){
    var fb = false
    if (i%15==0){
        fb= true
    }
    if (i%3==0 && !fb){
        console.log('Fizz')
    }
    else if(i%5 ==0 && !fb){
        console.log('Buzz')
    }
    else if(fb){
        console.log('Fizzbuzz')
    }
    else{
        console.log(i)
    }
}