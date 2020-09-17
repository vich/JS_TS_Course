export class Order {
    constructor(customerId, ...productIds) {
        this.customerId = customerId;
        this.productIds = productIds;
    }

    toString(){
        return `customerId=${this.customerId}, productId=${this.productIds}`;
    }
}