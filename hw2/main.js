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
        new Customer(101, "Yaron", "Tel-Aviv"),
        new Customer(102, "Yigal", "Yokneam"),
        new Customer(103, "Nadav", "Akko"),
        new Customer(104, "Sigal", "Eilat"),
        new Customer(105, "Rivka", "Jerusalem")];

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
store.addOrder(102, 1,2,3);
let storeStateInJson = saveStoreState(store);
initStore();
loadStoreData(storeStateInJson);
store.printOrders();
