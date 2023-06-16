function solution(emergency) {
    var answer = [];
    let clone=[];
    for(let i=0; i<emergency.length; i++){
      clone[i]=emergency[i]
    }
    for(let i=0; i<clone.length; i++){
        for(let j=i+1; j<clone.length; j++){
            if(clone[i]<clone[j]){
              let x=clone[i];
              clone[i]=clone[j];
              clone[j]=x;
            }
        }
    }
    for(let i=0; i<clone.length; i++){
       for(let j=0; j<clone.length; j++){
           if(emergency[i]==clone[j]){
              answer[i]=j+1
           }
       } 
    }
    return answer;
}