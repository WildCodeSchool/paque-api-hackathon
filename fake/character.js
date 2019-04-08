const ObjectID = require("bson-objectid");

const characters = [{
    "name": "Rick Sanchez",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    "name": "Rogger Rabbit",
    "species": "Rabbit toon",
    "gender": "Male",
    "origin": "Toons City",
    "image": "https://i.pinimg.com/originals/4d/f1/6f/4df16f2a2102cb1e39d2f2531e3b7881.jpg"
  },
  {
    "name": "Morty Smith",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  },
  {
    "name": "Darth Vader",
    "species": "Human/Cyborg",
    "gender": "Male",
    "origin": "Tatooine",
    "image": "https://static.comicvine.com/uploads/scale_small/13/132327/6438864-dc94c42f-acac-44ff-8804-85a37f06262d.jpeg"
  },
  {
    "name": "Summer Smith",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
  },
  {
    "name": "Ellen Ripley",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth",
    "image": "https://static.comicvine.com/uploads/scale_small/0/77/385922-3756-ellen-ripley.jpg"
  },
  {
    "name": "Beth Smith",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
  },
  {
    "name": "Jerry Smith",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
  },
  {
    "name": "Mystique",
    "species": "Human Mutant",
    "gender": "Female",
    "origin": "Earth",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Mystique11.png/250px-Mystique11.png"
  },
  {
    "name": "Abadango Cluster Princess",
    "species": "Alien",
    "gender": "Female",
    "origin": {
      "id": "2",
      "name": "Abadango",
      "type": "Cluster"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
  },
  {
    "name": "Abradolf Lincler",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
  },
  {
    "name": "Adjudicator Rick",
    "species": "Human",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
  },
  {
    "name": "Hellboy",
    "species": "Demon",
    "gender": "Male",
    "origin": "Hell",
    "image": "https://static.comicvine.com/uploads/scale_small/3/31666/5612601-hbyws17-fc-fnlc.jpg"
  },
  {
    "name": "Agency Director",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg"
  },
  {
    "name": "Alan Rails",
    "species": "Human",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg"
  },
  {
    "name": "Albert Einstein",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg"
  },
  {
    "name": "Supergirl (Kara Zor-El)",
    "species": "Kryptonian",
    "gender": "Female",
    "origin": "Krypton",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Supergirl_%28Kara_Zor-El%29_-DC_Rebirth_version-.jpg/250px-Supergirl_%28Kara_Zor-El%29_-DC_Rebirth_version-.jpg"
  },
  {
    "name": "Alexander",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg"
  },
  {
    "name": "Alien Googah",
    "species": "Alien",
    "gender": "unknown",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg"
  },
  {
    "name": "Alien Morty",
    "species": "Alien",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg"
  },
  {
    "name": "Alien Rick",
    "species": "Alien",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg"
  },
  {
    "name": "Elektra Natchios",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Elektra_3.jpg/250px-Elektra_3.jpg"
  },
  {
    "name": "Amish Cyborg",
    "species": "Alien",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg"
  },
  {
    "name": "Annie",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
  },
  {
    "name": "Judge Dredd",
    "species": "Human",
    "gender": "Male",
    "origin": "Mega-City One",
    "image": "https://images-na.ssl-images-amazon.com/images/I/91P9Csqk5RL.jpg"
  },
  {
    "name": "Antenna Morty",
    "species": "Human",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg"
  },
  {
    "name": "Antenna Rick",
    "species": "Human",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
  },
  {
    "name": "Catwoman",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Catwoman_%28DC_Rebirth_version%29.jpg/250px-Catwoman_%28DC_Rebirth_version%29.jpg"
  },
  {
    "name": "Ants in my Eyes Johnson",
    "species": "Human",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
  },
  {
    "name": "Crocubot",
    "species": "Humanoid",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/81.jpeg"
  },
  {
    "name": "Jessica Rabbit",
    "species": "Human toon",
    "gender": "Female",
    "origin": "Toons City",
    "image": "https://banner2.kisspng.com/20180612/le/kisspng-jessica-rabbit-roger-rabbit-fan-art-clip-art-jessica-rabbit-5b2033dc0f8b46.6307732315288370840637.jpg"
  },
  {
    "name": "Cronenberg Rick",
    "species": "Cronenberg",
    "gender": "Male",
    "origin": "Cronenberg Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/82.jpeg"
  },
  {
    "name": "Cronenberg Morty",
    "species": "Cronenberg",
    "gender": "Male",
    "origin": "Cronenberg Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/83.jpeg"
  },
  {
    "name": "Barbara Gordon",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Barbara_Gordon_Batgirl_Vol_5_4.png/250px-Barbara_Gordon_Batgirl_Vol_5_4.png"
  },
  {
    "name": "Cult Leader Morty",
    "species": "Human",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/84.jpeg"
  },
  {
    "name": "Cyclops Morty",
    "species": "Humanoid",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/85.jpeg"
  },
  {
    "name": "Cyclops Rick",
    "species": "Humanoid",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/86.jpeg"
  },
  {
    "name": "Cynthia",
    "species": "Alien",
    "gender": "Female",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/87.jpeg"
  },
  {
    "name": "Cynthia",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/88.jpeg"
  },
  {
    "name": "Dana Scully",
    "species": "Human",
    "gender": "Female",
    "origin": "Earth",
    "image": "https://static.comicvine.com/uploads/scale_small/11126/111269625/6397592-star_wars_44_textless.jpg"
  },
  {
    "name": "Dale",
    "species": "Humanoid",
    "gender": "Male",
    "origin": "Giant's Town",
    "image": "https://rickandmortyapi.com/api/character/avatar/89.jpeg"
  },
  {
    "name": "Daron Jefferson",
    "species": "Alien",
    "gender": "Male",
    "origin": "Unity's Planet",
    "image": "https://rickandmortyapi.com/api/character/avatar/90.jpeg"
  },
  {
    "name": "David Letterman",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/91.jpeg"
  },
  {
    "name": "Davin",
    "species": "Human",
    "gender": "Male",
    "origin": "Earth",
    "image": "https://rickandmortyapi.com/api/character/avatar/92.jpeg"
  },
  {
    "name": "Diablo Verde",
    "species": "Humanoid",
    "gender": "Male",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/93.jpeg"
  },
  {
    "name": "Cersei Baratheon",
    "species": "Human",
    "gender": "Female",
    "origin": "Castral Roc",
    "image": "https://vignette.wikia.nocookie.net/game-of-thrones-le-trone-de-fer/images/b/b0/Cersei_Lannister.png/revision/latest/scale-to-width-down/350?cb=20170905153525&path-prefix=fr"
  },
  {
    "name": "Diane Sanchez",
    "species": "Human",
    "gender": "Female",
    "origin": {
      "id": "30",
      "name": "Earth (Unknown dimension)",
      "type": "Planet"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/94.jpeg"
  },
  {
    "name": "Dipper and Mabel Mortys",
    "species": "Human",
    "gender": "unknown",
    "origin": "Unknow",
    "image": "https://rickandmortyapi.com/api/character/avatar/95.jpeg"
  },
  {
    "name": "Tuberculosis",
    "species": "Disease",
    "gender": "unknown",
    "origin": "Anatomy Park",
    "image": "https://rickandmortyapi.com/api/character/avatar/96.jpeg"
  },
  {
    "name": "Princess Leia",
    "species": "Human",
    "gender": "Female",
    "origin": "Polis Massa",
    "image": "https://static.comicvine.com/uploads/scale_small/11126/111269625/6397592-star_wars_44_textless.jpg"
  },
  {
    "name": "Gonorrhea",
    "species": "Disease",
    "gender": "unknown",
    "origin": "Anatomy Park",
    "image": "https://rickandmortyapi.com/api/character/avatar/97.jpeg"
  },
  {
    "name": "Hepatitis A",
    "species": "Disease",
    "gender": "unknown",
    "origin": "Anatomy Park",
    "image": "https://rickandmortyapi.com/api/character/avatar/98.jpeg"
  },
  {
    "name": "Harley Quinn",
    "species": "Human",
    "gender": "Female",
    "origin": "Gotham City",
    "image": "https://www.derivstore.com/wp-content/uploads/2017/11/Figurine-Hot-Toys-Harley-Quinn-3.jpg"
  },
  {
    "name": "Hepatitis C",
    "species": "Disease",
    "gender": "unknown",
    "origin": "Anatomy Park",
    "image": "https://rickandmortyapi.com/api/character/avatar/99.jpeg"
  },
  {
    "name": "Bubonic Plague",
    "species": "Disease",
    "gender": "unknown",
    "origin": "Anatomy Park",
    "image": "https://rickandmortyapi.com/api/character/avatar/100.jpeg"
  },
  {
    "name": "Gandalf",
    "species": "Maia",
    "gender": "Male",
    "origin": "Valinor",
    "image": "https://static.comicvine.com/uploads/scale_small/13/132327/4262699-a86be31143ba35176665964cfa29516a-d5qg94n.jpg"
  },
  {
    "name": "Wonder Woman",
    "species": "Amazonian-Olympian",
    "gender": "Female",
    "origin": "Themyscira",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Wonder_Woman.jpg/250px-Wonder_Woman.jpg"
  },
  {
    "name": "Brian Cohen",
    "species": "Human",
    "gender": "Male",
    "origin": "Jerusalem (near Jesus stable)",
    "image": "https://klausming.files.wordpress.com/2011/09/brian.jpg"
  },
]

const skills = [
  "hight speed",
  "dexterity",
  "fly",
  "Xray vision",
  "invisibility",
  "magnetic control",
  "hight strength",
  "pass through walls",
  "resurrection",
  "mental control"
]

module.exports = () => {
  return {
    name: `Egg of ${random(animals)}`,
    color: faker.internet.color(),
    caliber: random(calibers),
    farming: random(farmings),
    country: faker.address.countryCode(),
    rarity: random(rarities),
    avatar: '',
    power: random(powers)
  }
}

const random = (data) => {
  const index = Math.floor(Math.random() * (data.length));
  return data[index];
}

const randomNumber = () => {
  return Math.floor(Math.random() * (+10 - +1)) + +1
}

module.exports = () => {
  return characters.map((character) => {
    character.skills = [];
    character.id = ObjectID();
    while (character.skills.length < 3) {
      const skill = random(skills);
      if (!character.skills.includes(skill)) {
        character.skills.push(`${skill}:${randomNumber()}`);
      }
    }

    return character;
  })
};