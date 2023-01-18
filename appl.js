const garage = new MyGarage();
const myCar = new Car(111,'Nissan XTrail', 2020, 150000, 5);
const myTruck = new Truck(222, 'Scania', 2015, 350000, 15000);
const myScutter = new ElectroScutter(333, "Wings", 2021, 50000);
garage.addTransport(myCar);
garage.addTransport(myTruck);
garage.addTransport(myScutter);

garage.getAllTransport().forEach(item => console.log(item))

console.log(garage)