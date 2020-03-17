
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix)) {return [];}
  let arr=[],g=0;
  for (let i=0;i<matrix.length;i++)
  {
    if (i%2==0)
    {
      for (let j=0;j<matrix[i].length;j++)
      {
        arr[g]=matrix[i][j];
        g++;
      }
    }
    else {
      matrix[i].reverse();
      for (let j=0;j<matrix[i].length;j++)
      {
        arr[g]=matrix[i][j];
        g++;
      }
    }
  }
  return arr;
}
