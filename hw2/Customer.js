export class Customer {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    toString(){
        return `id=${this.id}, name=${this.name}, address=${this.address}`;
    }
}