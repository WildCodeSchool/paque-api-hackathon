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

const images = [
    "http://miam-images.m.i.pic.centerblog.net/o/094d0369.png",
    "http://miam-images.m.i.pic.centerblog.net/70cb07b9.png",
    "https://shop.whitehousehistory.org/media/catalog/product/t/r/trump_egg_gold_shop.png",
    "https://s3-ap-southeast-2.amazonaws.com/sunnyqueen.com.au/images/about-eggs/tip-egg-size-guide-x-jumbo-%402x.png",
    "https://www.buttermilk.co.uk/wp-content/uploads/2018/02/css-egg-web.png",
    "https://vignette.wikia.nocookie.net/bubble-gum-simulator/images/7/72/Lucky_Egg.png/revision/latest?cb=20190315192058",
    "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/ad5d66afe65240749572864e85109ec9_Large.png",
    "https://ghraouichocolate.com/wp-content/uploads/Ghraoui-Easter-Egg-Chocolate-Huge@2x.png",
    "https://a9effd958e0dc59aaf3b-80520a33cc33a15351bd958c9b8ecc55.ssl.cf2.rackcdn.com/one-step/graphic-egg.png",
    "https://www.sideshow.com/storage/product-images/903635/velociraptor-egg_jurassic-park_silo.png",
    "https://cdn.shopify.com/s/files/1/0993/5182/products/CXBO_Chocolate_Disco_Egg_large.png?v=1519913456",
    "https://i1.wp.com/borgattis.com/wp-content/uploads/2019/03/blue-egg.png?fit=861%2C877&ssl=1",
    "https://rebekahlang.files.wordpress.com/2015/08/pokemon-egg-png.png",
    "https://banner2.kisspng.com/20180525/lec/kisspng-pokmon-bulbasaur-egg-charmander-drawing-broken-egg-5b07f7302287f2.6863793515272486881415.jpg",
    "http://pixelartmaker.com/art/2480187d8bd9102.png"
]

module.exports = () => {
    return {
        id: ObjectID(),
        name: `Egg of ${random(animals)}`,
        color: faker.internet.color(),
        caliber: random(calibers),
        farming: random(farmings),
        country: faker.address.countryCode(),
        rarity: random(rarities),
        image: random(images),
        power: `${random(powers)}:${randomNumber()}`
    }
}

const random = (data) => {
    const index = Math.floor(Math.random() * (data.length));
    return data[index];
}