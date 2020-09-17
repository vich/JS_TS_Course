export class Product {
    constructor(id, name, itemsInStock) {
        this.id = id;
        this.name = name;
        this.itemsInStock = itemsInStock;
    }

    toString(){
        return `id=${this.id}, name=${this.name}, itemsInStock=${this.itemsInStock}`;
    }
}