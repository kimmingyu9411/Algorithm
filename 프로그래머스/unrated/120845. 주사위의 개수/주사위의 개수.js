function solution(box, n) {
    var answer = 0;
    if(box[0]%n!==0){
       box[0]-=1;
    };
     if(box[1]%n!==0){
       box[1]-=1; 
    };
     if(box[2]%n!==0){
       box[2]-=1; 
    };
   let box_pull=box[0]*box[1]*box[2];
   let n_pull=n*n*n;
    answer=box_pull/n_pull
    return answer;
}