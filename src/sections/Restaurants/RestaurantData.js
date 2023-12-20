import SingaporeFlyer from "./images/SingaporeFlyer.jpg";
import indianaccent from "./images/indianaccent.jpg";
import BomrasGoa from "./images/BomrasGoa.jpg";
import Masque from "./images/Masque.jpg";
import opedro from "./images/opedro.jpg";
import Ledu from "./images/Ledu-Wine-Bar-and-Restaurant.jpg";
import bayroute from "./images/bayroute.jpg";
import RestaurantBougainville from "./images/RestaurantBougainville.jpg";
import iseSueyoshi from "./images/iseSueyoshi.jpg";
import theoldstamp from "./images/theoldstamp.jpg";
import mimosamoderne from "./images/mimosamoderne.jpg";
import villacrespi from "./images/villacrespi.jpg";
import GrottaPalazzese from "./images/GrottaPalazzese.jpg";

const RestaurantData = [
  {
    id: 1,
    name: "Singapore Flyer",
    continent: "Asia",
    country: "Singapore",
    state: "Bali",
    city: "Marina Bay",
    description:
      "The Singapore Flyer Sky dining offers a luxurious dining experience on Singapore's giant observation wheel.",
    rating: 4.7,
    price: "$$$",
    imageSrc: SingaporeFlyer,
    imageAlt: "Singapore Flyer,Singapore",
    category: "Most Popular",
    type: "veg & non-veg",
    // coordinates: {
    //   latitude: -8.409518,
    //   longitude: 115.188919,
    // },
  },
  {
    id: 2,
    name: "Indian Accent",
    continent: "Asia",
    country: "India",
    state: "",
    city: "New Dehli",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$$$",
    imageSrc: indianaccent,
    imageAlt: "Paris,France",
    category: "Highest Rated",
    type: "veg",
  },
  {
    id: 3,
    name: "Bomras",
    continent: "Asia",
    country: "India",
    state: "Goa",
    city: "Anjuna",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: BomrasGoa,
    imageAlt: "BomrasGoa,India",
    category: "Highest Rated",
    type: "non-veg",
  },
  {
    id: 4,
    name: "Masque",
    continent: "Asia",
    country: "India",
    state: "Maharashtra",
    city: "mumbai",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: Masque,
    imageAlt: "mumbai,India",
    category: "Most Popular",
    type: "veg & non-veg",
  },
  {
    id: 5,
    name: "O Pedro",
    continent: "Asia",
    country: "India",
    state: "Maharashtra",
    city: "mumbai",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 4,
    price: "$1000",
    imageSrc: opedro,
    imageAlt: "",
    category: "Bar & Restaurants",
    type: "veg",
  },
  {
    id: 6,
    name: "Le Du",
    continent: "Asia",
    country: "Thailand",
    state: "",
    city: "Bangkok",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 4,
    price: "$1000",
    imageSrc: Ledu,
    imageAlt: "",
    category: "Bar & Restaurants",
    type: "non-veg",
  },
  {
    id: 7,
    name: "Bayroute",
    continent: "Asia",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 3,
    price: "$1000",
    imageSrc: bayroute,
    imageAlt: "",
    category: "Trending Restaurant",
    type: "veg & non-veg",
  },
  {
    id: 8,
    name: "Restaurant Bougainville",
    continent: "North America",
    country: "United States",
    state: "",
    city: "California",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: RestaurantBougainville,
    imageAlt: "",
    category: "Trending Restaurant",
    type: "veg & non-veg",
  },
  {
    id: 9,
    name: "Ise Sueyoshi",
    continent: "Asia",
    country: "Japanese",
    state: "",
    city: "Tokyo",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 4.5,
    price: "$1000",
    imageSrc: iseSueyoshi,
    imageAlt: "",
    category: "Trending Restaurant",
    type: "veg & non-veg",
  },
  {
    id: 10,
    name: "The Old Stamp House",
    continent: "North America",
    country: " United States",
    state: "Wyoming",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: theoldstamp,
    imageAlt: "",
    category: "Old Type Restro",
    type: "veg & non-veg",
  },
  {
    id: 11,
    name: "Maison Medard",
    continent: "French",
    country: "Australia",
    state: "picturesque",
    city: "Centre-Val de Loire",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: mimosamoderne,
    imageAlt: "",
    category: "Best Value for Money",
    type: "veg & non-veg",
  },
  {
    id: 12,
    name: "Ristorante Villa Crespi",
    continent: "Europe",
    country: "Italy",
    state: "",
    city: "Orta San Giulio",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: villacrespi,
    imageAlt: "",
    category: "Best Value for Money",
    type: "veg & non-veg",
  },
  {
    id: 13,
    name: "Grotta Palazzese Cave Restaurant",
    continent: "Europe",
    country: "Italy",
    state: "",
    city: "Via Narciso",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: GrottaPalazzese,
    imageAlt: "",
    category: "Trending Restaurant",
    type: "veg & non-veg",
  },
];

export default RestaurantData;
