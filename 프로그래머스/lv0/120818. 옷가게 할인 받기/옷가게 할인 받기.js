function solution(price) {
    if(price>=500000){
        price*=0.8
        return Math.floor(price)
    }else if(price>=300000){
        price*=0.9
        return Math.floor(price)
    }else if(price>=100000){
        price*=0.95   
        return Math.floor(price)
    }else{return Math.floor(price)}
}


