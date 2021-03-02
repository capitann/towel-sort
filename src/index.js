
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (arguments.length == 0 || matrix.length == 0) return result;
  for(let i = 0; i < matrix.length; i++){
    if (i % 2 != 0){
      Array.prototype.push.apply(result, matrix[i].reverse());
    }else{
      Array.prototype.push.apply(result, matrix[i]);
    }
  }
  return result;
}
