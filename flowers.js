const flowers = [
{
    id: 1,
    color: "White",
    species: "Rose",
    price: 0.90
},
{
    id: 2,
    color: "Red",
    species: "Tulip",
    price: 1.10
}
]

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const newId = currentLastFlower.id
    const newFlowerId = newId + 1

    flowerObject.id = newFlowerId
    flowers.push(flowerObject)
}




const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

for (const flower of flowers) {
    if (flower.price >= 1.00 ) {
        expensiveFlowers.push(flower)
    }
}
    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

