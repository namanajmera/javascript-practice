const getCheese = (callback) => {
    setTimeout(() => {
        const cheese = "🧀";
        callback(cheese);
    }, 2000);
}

const getDough = (cheese, callback) => {
    setTimeout(() => {
        const dough = cheese + "🍩";
        callback(dough);
    }, 2000)
}

const getPizza = (dough, callback) => {
    setTimeout(() => {
        const pizza = dough + "🍕";
        callback(pizza);
    },2000)
}

getCheese((cheese) => {
    console.log("Here is the cheese ", cheese);
    getDough(cheese,(dough) => {
        console.log("Here is the dough ", dough);
        getPizza(dough,(pizza) => {
            console.log("And here's your PIZZA!", pizza);
        })
    })
})