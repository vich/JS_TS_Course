import {Store} from './Store.js';
import {Product} from './Product.js';
import {Customer} from './Customer.js';

function initStore(){
    const products = [
        new Product(1,"Bose QC2", 11),
        new Product(2,"Sony MX4",  0),
        new Product(3,"Thermometer", 14),
        new Product(4,"Lightning  cable", 2),
        new Product(5,"Dance Dress", 7),
        new Product(6,"Sunglasses ",  9),
        new Product(7,"Ice Maker", 10)];

    const customers = [
        new Customer(100, "Felix", "Fort Di"),
        new Customer(101, "Kaitlin ", "Tertu"),
        new Customer(102, "Chantelle", "Jerusalem"),
        new Customer(103, "Joel", "Great Adthersling"),
        new Customer(104, "Gabriella", "Yokneam"),
        new Customer(105, "Violet", "New Sing")];

    return new Store(products, customers, []);

}

function saveStoreState(store){
    const jsonData = JSON.stringify(store);
    console.log(jsonData);
    return jsonData;
}

function loadStoreData(storeInJson){
    const store = JSON.parse(storeInJson);
    return store;
}


let store = initStore();
store.notify()
store.addOrder(102, 1,2,3);
const storeStateInJson = saveStoreState(store);
initStore();
loadStoreData(storeStateInJson);
store.printOrders();
