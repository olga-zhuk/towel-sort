module.exports = function towelSort (matrix){
    matrix = typeof matrix !== 'undefined' ? matrix : [];
  matrix.map(function (v,i){
   if (i % 2 != 0) {
       v.reverse();
   } 
  });
  var array = [].concat(...matrix);
  return array;
}
