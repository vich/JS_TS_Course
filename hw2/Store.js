import {Order} from "./Order.js";

const NOTIFY_INTERVAL = 10000;
export class Store {

    constructor(products, customers, orders) {
        this.products = products;
        this.customers = customers;
        this.orders = orders;
    }


    addOrder(customerId, ...productsIds){
        let validFlag = this.validateOrderParams(customerId, productsIds);

        if(validFlag){
            productsIds.forEach((id) => {
                let product = this.products.find(p=>p.id === productId);
                --product.itemsInStock;
            });
            
            let newOrder = new Order(customerId, productsIds);
            this.printOrders();
            this.orders.push(newOrder);
            this.printOrders();
        }
    }


    validateOrderParams(customerId, productsIds) {
        let validFlag = true;
        //validate customer
        if (!this.customers.find(c => c.id === customerId)) {
            console.log(`Fails, invalid customer ${customerId}`);
            validFlag = false;
        }

        //validate productsIds
        productsIds.forEach((id) => {
            let product = this.products.find(p => p.id === productId);
            if (product) {
                if (!(product.itemsInStock > 0)) {
                    console.log(`Fails, missing items of productId ${id}`);
                    validFlag = false;
                }
            }
            else {
                console.log(`Fails, invalid productId: ${id}`);
                validFlag = false;
            }

        });
        return validFlag;
    }

    
    printOrders(){

        console.log(`orders contains ${ this.orders.length} rows`);
        for (let i = 0; i < this.orders.length; i++){
            let order = this.orders[i];
            console.log(`Order (${i}) - ${order}`);
        }
    }


    save(){
        let jsonData = JSON.stringify(this);
        return jsonData;
    }


    load(state){
        let store = JSON.parse(state)

        this.products = store.products;
        this.customers = store.customers;
        this.orders = store.orders;
    }


    notify(){
        setInterval(()=> {
            let productsOutOfStock = this.products.filter(product => !product.itemsInStock);
            console.log(`Out of stock products: ${JSON.stringify(productsOutOfStock)}`);
        }, NOTIFY_INTERVAL);
    }

}