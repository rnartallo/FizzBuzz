const prompt = require('prompt-sync')({sigint: true});

const n = Number(prompt('Enter a maximum'));

console.log(n+1)
function playFizzBuzz(n: number){
    for (let i=1;i<(n+1);i++){
        var div = false
        var message =''
        var hasfizz = false
        var hasbuzz = false
        var hasbang = false
        var hasbong = false
        var hasfezz = false
        var seventeen_exception = false
        if (i%3==0){
            div=true
            hasfizz = true
        }
        if(i%5 ==0){
            hasbuzz= true
            div = true
        }
        if(i%7==0){
            div = true
            hasbang = true
        }
        if(i%11==0){
            div =true
            hasbong = true
        }
        if(i%13==0){
            div = true
            hasfezz = true
        }
        if(i%17==0){
            seventeen_exception = true
        }
        if(div){
            if (hasfizz && !hasbong){
                message = message + "Fizz"
            } 
            if (hasfezz){
                message = message + "Fezz"
            }
            if (hasbuzz && !hasbong){
                message = message +"Buzz"
            }
            if (hasbang && !hasbong){
                message = message +"Bang"
            }
            if (hasbong){
                message = message + "Bong"
            }
            if (seventeen_exception){
                message =""
                if (hasbong){
                    message = message + "Bong"
                }
                if (hasbang && !hasbong){
                    message = message +"Bang"
                }
                if (hasbuzz && !hasbong){
                    message = message +"Buzz"
                }
                if (hasfezz){
                    message = message + "Fezz"
                }
                if (hasfizz && !hasbong){
                    message = message + "Fizz"
                }
            }
            console.log(message)
        }
        else{
            console.log(i)
        }
    }};
playFizzBuzz(n)

