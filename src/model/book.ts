export default class Book {
    constructor(private name: string, private price: number) {};

    getPrice() {
        return this.price;
    }

    getName() {
        return this.name;
    }
}