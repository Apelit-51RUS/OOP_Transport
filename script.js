class Transport {
    #id
    constructor(id, model, year, price) {
        this.#id = id;
        this._model = model;
        this._year = year;
        this._price = price;
    }

    get id() {
        return this.#id;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get year() {
        return this._year;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

class Car extends Transport {

    constructor(id, model, year, price, n_passengers) {
        super(id, model, year, price);
        this._n_passengers = n_passengers;
    }

    get n_passengers() {
        return this._n_passengers;
    }

    set n_passengers(value) {
        this._n_passengers = value;
    }
}

class Truck extends Transport {

    constructor(id, model, year, price, l_cap) {
        super(id, model, year, price);
        this._l_cap = l_cap;
    }

    get l_cap() {
        return this._l_cap;
    }

    set l_cap(value) {
        this._l_cap = value;
    }
}

class ElectroScutter extends Transport{

    constructor(id, model, year, price, voltage) {
        super(id, model, year, price);
        this._voltage = voltage;
    }

    get voltage() {
        return this._voltage;
    }

    set voltage(value) {
        this._voltage = value;
    }
}
class MyGarage {

    constructor() {
        this.garage = [];
    }
     addTransport(transport){
        if(this.garage.find(t => t.id === transport.id))
            return false;
        else{
            this.garage.push(transport);
            return true;
        }
     }

     getAllTransport(){
        return [...this.garage]
     }
}

