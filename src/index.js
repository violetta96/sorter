class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = function(left, right) {
      return left - right;
    };
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var sorterMass = [];
    indices.sort(function(left, right) {
      return left - right;
    });
    for (var i = 0; i < indices.length; i++) {
    sorterMass.push(this.arr[indices[i]]);
    }
    sorterMass.sort(this.comparator);
    
    for (var i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = sorterMass[i];
  }
}

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
