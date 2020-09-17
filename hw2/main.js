import {Store} from './Store.js';
import {Product} from './Product.js';
import {Customer} from './Customer.js';

function initStore(){
    const products = [new Product(1,"Tomato", 1),
        new Product(2,"Apple",  1),
        new Product(3,"Orange", 20),
        new Product(4,"Lemon", 10),
        new Product(5,"Cucamber", 15),
        new Product(6,"Potato",  4),
        new Product(7,"Watermelon", 0)];

    const customers = [new Customer({id: 100, name:"Avraham", address:"NYC"}),
        new Customer({id: 101, name:"Yaron", address:"Tel-Aviv"}),
        new Customer({id: 102, name:"Yigal", address:"Yokneam"}),
        new Customer({id: 103, name:"Nadav", address:"Akko"}),
        new Customer({id: 104, name:"Sigal", address:"Eilat"}),
        new Customer({id: 105, name:"Rivka", address:"Jerusalem"})];

    console.log("Store initialized...");
    return new Store(products, customers, []);

}

function saveStoreState(store){
    let jsonData = JSON.stringify(store);
    console.log(jsonData);
    return jsonData;
}

function loadStoreData(storeInJson){
    let store = JSON.parse(storeInJson);
    return store;
}


let store = initStore();
store.notify()
store.addOrder(106, 1,2,3);
let storeStateInJson = saveStoreState(store);
initStore();
loadStoreData(storeStateInJson);
store.printOrders();
