console.log('Hello world!')
for (let i=1;i<101;i++){
    var div = false
    var message =''
    var hasfizz = false
    var hasbuzz = false
    var hasbang = false
    var hasbong = false
    var hasfezz = false
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

        console.log(message)
    }
    else{
        console.log(i)
    }
    
}