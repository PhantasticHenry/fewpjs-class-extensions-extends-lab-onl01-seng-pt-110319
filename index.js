class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        let sum = 0;
        for (let element of this.array) {
            sum += element;
        }
        return sum;
        // for (let e = 0; e < this.array.length; e++ ) {
        //     sum += this.array[e]
        // }
        // return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
        return (this.array[0] + this.array[1] > this.array[2]) && (this.array[1] + this.array[2] > this.array[0]) && (this.array[0] + this.array[2] > this.array[1]);
    }
}

class Square extends Polygon {
    get isValid() {
        return ((this.array[0] === this.array[1]) && (this.array[0] === this.array[2]) && (this.array[0] === this.array[3]));
    }

    get area() {
        return this.array[0] * this.array[0];
    }
}