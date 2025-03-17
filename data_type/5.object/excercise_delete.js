var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    features: {
        color: "Blue",
        sunroof: true,
        navigation: true
    },
    accessories: ["Floor Mats", "Car Cover"]
};
var carCopy = car;

carCopy.brand="Honda"
carCopy.transmission=("transmission:Automatic")//添加新属性
console.log(car)
car.accessories.splice(1,1)//删除一个元素

var newCar={...car}

newCar.year =2025;
console.log(car.year);
console.log(newCar.year);