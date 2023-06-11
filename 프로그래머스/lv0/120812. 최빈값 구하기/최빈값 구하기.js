function solution(array) {
let obj={}
let answer=[]
for(i in array){
 if(obj[array[i]]==undefined){
     obj[array[i]]=1
 }else if(obj[array[i]]!=undefined){
     obj[array[i]]+=1
 }
}
for(k in obj){
   answer.push(k)
}
let maxvalue=0;
let maxkey=0;
for(let i=0; i<answer.length; i++){
    if(maxvalue<obj[answer[i]]){
        maxvalue=obj[answer[i]];
        maxkey=Number(answer[i]);
    }else if(maxvalue==obj[answer[i]]){
        maxkey=-1
    }
}return  maxkey
}

 

   



