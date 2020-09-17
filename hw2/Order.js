export class Order {
    constructor(customerId, ...productIds) {
        this.customerId = customerId;
        this.productIds = productIds;
    }

    toString(){
        return `customerId=${this.customerId}, productsIds=${this.productIds}`;
    }
}