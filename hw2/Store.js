import {Order} from "./Order.js";

const NOTIFY_INTERVAL = 10000;
export class Store {

    constructor(products, customers, orders) {
        this.products = products;
        this.customers = customers;
        this.orders = orders;
    }


    addOrder(customerId, ...productsIds){
        let validFlag = true;
        //validate customer
        if(!this.customers.includes(customerId)){
            console.log(`Fails, invalid customer ${customerId}`);
            validFlag = false;
        }

        //validate productsIds
        productsIds.forEach((id)=>{
            if(this.products.includes(id)){
                if(!(this.products["id"].itemsInStock > 0)){
                    console.log(`Fails, missing items of productId ${id}`);
                    validFlag = false;
                }
            }
            else{
                console.log(`Fails, invalid productId: ${id}`);
                validFlag = false;
            }

        });

        if(validFlag){
            productsIds.forEach((id) => {
                --this.products["id"].itemsInStock;
            });
            
            let newOrder = new Order(customerId, productsIds);
            this.printOrders();
            this.orders.push(newOrder);
            this.printOrders();
        }
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