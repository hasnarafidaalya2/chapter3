function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let k=0; k<result.length; k++){
    for(let i=0; i<result.length-1; i++){
      if(result[i].year > result[i+1].year){
        let temp = result[i];
        result[i] = result[i+1];
        result[i+1] =temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
