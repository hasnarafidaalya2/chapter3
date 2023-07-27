function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let k = 0; k<cars.length; k++){
    const car = cars[k];
    if (car.available === true) {
      result.push(car);
    }
  }
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
