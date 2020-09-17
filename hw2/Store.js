import {Order} from "./Order.js";

const NOTIFY_INTERVAL = 10000;
export class Store {

    constructor(products, customers, orders) {
        this.products = products;
        this.customers = customers;
        this.orders = orders;
    }


    addOrder(customerId, ...productsIds){
        const validFlag = this.validateOrderParams(customerId, productsIds);

        if(validFlag){
            productsIds.forEach((id) => {
                let product = this.products.find(p=>p.id === id);
                --product.itemsInStock;
            });
            
            const newOrder = new Order(customerId, productsIds);
            this.orders.push(newOrder);
        }
    }


    validateOrderParams(customerId, productsIds) {
        let validFlag = true;
        //validate customer
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer) {
            console.log(`Fails, invalid customer ${customerId}`);
            validFlag = false;
        }

        //validate productsIds
        productsIds.forEach((id) => {
            const product = this.products.find(p => p.id === id);
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
            console.log(`Order (${i+1}) - ${order}`);
        }
    }


    save(){
        const jsonData = JSON.stringify(this);
        return jsonData;
    }


    load(state){
        const store = JSON.parse(state)

        this.products = store.products;
        this.customers = store.customers;
        this.orders = store.orders;
    }


    notify(){
        setInterval(()=> {
            const productsOutOfStock = this.products.filter(product => !product.itemsInStock);
            console.log(`Out of stock products: ${JSON.stringify(productsOutOfStock)}`);
        }, NOTIFY_INTERVAL);
    }

}