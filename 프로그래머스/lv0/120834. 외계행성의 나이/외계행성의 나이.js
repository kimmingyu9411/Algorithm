function solution(age) {
  var answer = '';
  let strAge=String(age)
  let strNum=['a','b','c','d','e','f','g','h','i','j']
  for(let i=0;i<strAge.length;i++){
    answer+=strNum[strAge[i]]
    
  } 
return answer
}