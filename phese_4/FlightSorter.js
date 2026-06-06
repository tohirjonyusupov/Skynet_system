class FlightSorter {
  // Ikki saralangan qismni birlashtiruvchi yordamchi metod
  static _merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Har ikkala massivda element borligida solishtiramiz
    while (leftIndex < left.length && rightIndex < right.length) {
      // Masalan, "08:30" < "10:15" kabi string solishtirish ishlaydi
      if (left[leftIndex].departureTime <= right[rightIndex].departureTime) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // Qolib ketgan elementlarni massivga qo'shib qo'yamiz
    return result
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }

  // Asosiy MergeSort rekursiv funksiyasi
  static mergeSort(flights) {
    if (flights.length <= 1) return flights;

    // Massivni teng ikkiga bo'lamiz
    const middle = Math.floor(flights.length / 2);
    const left = flights.slice(0, middle);
    const right = flights.slice(middle);

    // Bo'laklarni rekursiv saralab, keyin birlashtiramiz
    return this._merge(
      this.mergeSort(left),
      this.mergeSort(right)
    );
  }
}

module.exports = FlightSorter