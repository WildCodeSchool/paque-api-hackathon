const faker = require('faker');
const ObjectID = require("bson-objectid");

const animals = [
    "Alligator American",
    "Sturgeon Atlantic",
    "Ostrich",
    "Tuna",
    "Carp",
    "Cod Atlantic",
    "Pike Northern",
    "Trout brown",
    "Trout Rainbow",
    "Gar longnose",
    "Haddock",
    "Salmon Chum",
    "Flounder Winter",
    "Perch",
    "Duck Mallard",
    "Mackerel Spanish",
    "Sea lamprey",
    "Bullhead Brown",
    "Duck Wood",
    "Bass Rock",
    "Gull Herring",
    "Pumpkinseed",
    "Pigeon",
    "Guinea fowl",
    "Magpie Black-billed",
    "Hawk Night",
    "Frog leopard",
    "Goldfish",
    "Toad American",
    "Frog Bull",
    "Eel American",
    "Kiwi",
    "Fighting Fish Siamese",
    "Gila Monster",
    "Chameleon",
    "Cobra Indian",
    "Salamander Tiger",
    "Swordtail Mexican",
    "Stickleback three spine",
    "Hellbender",
    "Herring Atlantic",
];

const calibers = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL"
];

const farmings = [
    0, 1, 2, 3
];

const rarities = [
    "junk", "basic", "fine", "masterwork", "rare", "exotic", "ascended", "legendary"
];

const powers = [
    "increase physical power",
    "decrease physical power",
    "increase magical power",
    "decrease magical power",
    "increase attack speed",
    "decrease attack speed",
    "increase physical proctection",
    "decrease physical proctection",
    "increase magical proctection",
    "decrease magical proctection",
    "increase movement speed",
    "decrease movement speed",
    "increase health",
    "decrease health",
];

const randomNumber = () => {
    return Math.floor(Math.random() * (+10 - +1)) + +1
}

module.exports = () => {
    return {
        id: ObjectID(),
        name: `Egg of ${random(animals)}`,
        color: faker.internet.color(),
        caliber: random(calibers),
        farming: random(farmings),
        country: faker.address.countryCode(),
        rarity: random(rarities),
        avatar: '',
        power: `${random(powers)}:${randomNumber()}`
    }
}

const random = (data) => {
    const index = Math.floor(Math.random() * (data.length));
    return data[index];
}