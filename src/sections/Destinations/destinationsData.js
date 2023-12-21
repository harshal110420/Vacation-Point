import baliImage from "./images/bali.jpg";
import parisImage from "./images/paris.jpg";
import TajMahal from "./images/TajMahal.jpg";
import Jaisalmer from "./images/Jaisalmer.jpg";
import Italy from "./images/Italy.jpg";
import Patagonia from "./images/Patagonia.jpg";
import Cancun from "./images/Cancun.jpg";
import SanFrancisco from "./images/SanFrancisco.jpg";
import NiagaraFall from "./images/NiagaraFall.jpg";
import YellowStoneNationalPark from "./images/YellowStoneNationalPark.jpg";
import GreatBarrierReef from "./images/great-barrier-reef.jpg";
import Santorini from "./images/Santorini.jpg";
import Florence from "./images/Florence.jpg";
import Dubai from "./images/Dubai.jpg";
import MachuPicchu from "./images/MachuPicchu.jpg";
import Sydney from "./images/Sydney.jpg";
import Maui from "./images/Maui.jpg";
import London from "./images/London.jpg";
import Rome from "./images/Rome.jpg";
import Phuket from "./images/Phuket.jpg";
//------------------------------------------------------------------//
import waterride from "./images/waterride.jpg";
import SacredMonkey from "./images/SacredMonkey.jpg";
import uluwatutemple from "./images/uluwatutemple.jpg";
import PuraTirtaEmpul from "./images/PuraTirtaEmpul.jpg";
import thegarudawisnukencana from "./images/thegarudawisnukencana.jpg";
import UbudTropical from "./images/UbudTropical.jpg";
import parthipuriubud from "./images/parthipuriubud.jpg";
import BaliYogi from "./images/BaliYogi.jpg";
import gustihomestaykerobokan from "./images/gustihomestaykerobokan.jpg";
import AKAR from "./images/AKAR.jpg";
import KepituRestaurant from "./images/KepituRestaurant.jpg";
import ReefBeachClub from "./images/ReefBeachClub.jpg";
import MieGoreng from "./images/MieGoreng.jpg";
import Betutu from "./images/Betutu.jpg";

//--------------------------------------------------------------------//
import eiffeltower from "./images/eiffeltower.jpg";
import LouvreMuseum from "./images/LouvreMuseum.jpg";
import MuséedOrsay from "./images/MuséedOrsay.jpg";
import FondationLouisVuitton from "./images/FondationLouisVuitton.jpg";
import JardinduLuxembourg from "./images/JardinduLuxembourg.jpg";
import parischarlesdegaulle from "./images/parischarlesdegaulle.jpg";

const destinationsData = [
  {
    id: 1,
    name: "Bali",
    continent: "Asia",
    country: "Indonesia",
    state: "Bali",
    city: "Bali",
    description:
      "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 4.7,
    price: "$1000",
    imageSrc: baliImage,
    imageAlt: "Bali,Indonesia",
    category: "Most Popular",
    additionalDetails: {
      DestinationName: "Bali,Indonesia",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Indonesia",
        city: "Bali",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc: waterride,
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Sacred Monkey Forest",
          imageSrc: SacredMonkey,
          imageAlt: "Sacred Monkey Forest Sanctuary",
          distanceFromAirport: "6 miles",
          description: "Mandala Suci Wenara Wana, also known as Ubud Monkey.",
          address:
            "Jl. Monkey Forest, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia",
          hours: " 9 am to 5 pm",
        },
        {
          id: 3,
          name: "Uluwatu Temple",
          imageSrc: uluwatutemple,
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Uluwatu Temple is a Balinese Hindu sea temple located in Uluwatu. The temple is regarded as one of the sad kahyangan.",
          address: "Pecatu, South Kuta, Badung Regency, Bali, Indonesia",
          hours: "9 am to 7 pm",
        },
        {
          id: 4,
          name: "Pura Tirta Empul",
          imageSrc: PuraTirtaEmpul,
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2.9 miles",
          description:
            "Pura Tirta Empul is a Hindu temple complex and holy mountain spring in Bali, Indonesia. The temple is known for its sacred spring water, which is used by Balinese Hindus for ritual purification.",
          address: "Tampaksiring, Gianyar Regency, Bali 80552, Indonesia",
          hours: "9 am to 9 pm",
        },
        {
          id: 5,
          name: "Garuda Wisnu Kencana Cultural Park",
          imageSrc: thegarudawisnukencana,
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "It is devoted to the Hindu god Vishnu, and his mount, Garuda, the mythical bird who became his companion.",
          address:
            "Uluwatu St, Ungasan, South Kuta, Badung Regency, Bali 80364, Indonesia",
          hours: "9 am to 9 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "Ubud Tropical",
          imgSrc: UbudTropical,
          type: "Resort",
          description:
            "On a busy road surrounded by lush tropical gardens, this laid-back hostel is 3 km from both the Sacred Monkey Forest Sanctuary and the Yoga Barn",
          facilities: ["Pool", "Wi-Fi", "Parking", "AC"],
          rating: "4.8 / 5",
          priceRange: "974",
        },
        {
          id: 2,
          name: "Parthi Puri Ubud",
          imgSrc: parthipuriubud,
          type: "Resort",
          description:
            "Huge room with a huge bed, literally an amazing bed with 4 pillows and 2 cushions. Great staff, super green environment.",
          facilities: ["Parking", "WiFi", "AC"],
          rating: "4.8 / 5",
          priceRange: "977",
        },
        {
          id: 3,
          name: "GUSTI HOMESTAY BALI",
          imgSrc: gustihomestaykerobokan,
          type: "Resort",
          description:
            "Gusti Homestay Bali is located in Seminyak, famous for good restaurants such as Potato Head Beach Club, Motel Mexicola Restaurant and Ku De Ta Restaurant.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "Bali Yogi",
          imgSrc: BaliYogi,
          type: "Resort",
          description:
            "Situated in Amed, within a few steps of Amed Beach and 1.1 km of Jemeluk Beach, Bali Yogi offers accommodation with pool with a view and free WiFi as well as free private parking",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
      ],
      diningOptions: [
        {
          name: "AKAR by K Club Ubud",
          image: AKAR,
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kepitu Restaurant At The Kayon Resort",
          image: KepituRestaurant,
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Reef Beach Club",
          image: ReefBeachClub,
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
      ],
      localSpecialties: [
        {
          name: "Mie Goreng",
          imgSrc: MieGoreng,
          description:
            "A dish that translates to fried noodles and is similar to chow mein, but with an Indonesian twist.",
        },
        {
          name: "Betutu",
          imgSrc: Betutu,
          description:
            "A traditional Balinese dish made by baking chicken or duck in a fire husk.",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 2,
    name: "Paris",
    continent: "Europe",
    country: "France",
    state: "Île-de-France",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: parisImage,
    imageAlt: "Paris,France",
    category: "Highest Rated",
    additionalDetails: {
      DestinationName: "Paris, France",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "France",
        city: "Paris",
        description:
          "Paris is known for its gorgeous, imposing monuments. These iconic structures, often an exemplar of a particular era in architecture, are one of the city’s instantly recognizable elements.The preeminent of Paris’s landmarks is the Eiffel Tower. This skyscraping wrought-iron needle became the world’s tallest building when it was unveiled at the 1889 Paris World’s Fair. Today, its summit remains the City of Light’s highest point.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Eiffel Tower",
          imageSrc: eiffeltower,
          imageAlt: "Eiffel Tower",
          distanceFromAirport: "2 miles",
          description:
            "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889.",
          address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
          hours: "--",
        },
        {
          id: 2,
          name: "Louvre Museum",
          imageSrc: LouvreMuseum,
          imageAlt: "Louvre Museumn",
          distanceFromAirport: "2 miles",
          description:
            "The Louvre, or the Louvre Museum, is a national art museum in Paris, France.",
          address: "75001 Paris, France",
          hours: "9 am to 6 pm",
        },
        {
          id: 3,
          name: "Musée d'Orsay",
          imageSrc: MuséedOrsay,
          imageAlt: "Musée d'Orsay",
          distanceFromAirport: "2 miles",
          description:
            "The Musée d'Orsay is a museum in Paris, France, on the Left Bank of the Seine",
          address: "Esplanade Valéry Giscard d'Estaing, 75007 Paris, France",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Fondation Louis Vuitton",
          imageSrc: FondationLouisVuitton,
          imageAlt: "Fondation Louis Vuitton",
          distanceFromAirport: "2 miles",
          description:
            "The Louis Vuitton Foundation, previously Louis Vuitton Foundation for Creation, is a French art museum and cultura.",
          address: "8 Av. du Mahatma Gandhi, 75116 Paris, France",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Jardin du Luxembourg",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: JardinduLuxembourg,
          distanceFromAirport: "2 miles",
          description:
            "The Jardin du Luxembourg, known in English as the Luxembourg Garden.",
          address: "75006 Paris, France",
          hours: "9 am to 6 pm",
        },
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "citizenM Paris Champs-Elysees",
          imgSrc: parischarlesdegaulle,
          type: "Hotels",
          description:
            "CitizenM gives you affordable luxury in a prime location. When you arrive at our can't-miss hotel, there's no long queue at reception.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 3,
    name: "Taj Mahal",
    continent: "Asia",
    country: "India",
    state: "Uttar Pradesh",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: TajMahal,
    imageAlt: "Taj Mahal,India",
    category: "Highest Rated",
    additionalDetails: {
      DestinationName: "Taj Mahal,India",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "India",
        city: "Agra",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 4,
    name: "Jaisalmer",
    continent: "Asia",
    country: "India",
    state: "Rajasthan",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: Jaisalmer,
    imageAlt: "Jaisalmer,India",
    category: "Most Popular",
    additionalDetails: {
      DestinationName: "Jaisalmer, India",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "India",
        city: "Jaisalmer",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 5,
    name: "Amalfi Coast",
    continent: "Europe",
    country: "Italy",
    state: "Campania region",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 4,
    price: "$1000",
    imageSrc: Italy,
    imageAlt: "",
    category: "Most Visited",
    additionalDetails: {
      DestinationName: "Amalfi Coast,Italy",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Italy",
        city: "Amalfi",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 6,
    name: "Patagonia",
    continent: "South America",
    country: "Argentina",
    city: "Patagonia",
    state: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 4,
    price: "$1000",
    imageSrc: Patagonia,
    imageAlt: "",
    category: "Most Visited",
    additionalDetails: {
      DestinationName: "Patagonia, Argentina",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Argentina",
        city: "Patagonia",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 7,
    name: "Cancun",
    continent: "North America",
    country: "Mexico",
    state: "Quintana Roo",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 3,
    price: "$1000",
    imageSrc: Cancun,
    imageAlt: "Cancun, Mexico",
    category: "Trending Destinations",
    additionalDetails: {
      DestinationName: "Cancun, Mexico",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Mexico",
        city: "Cancun",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 8,
    name: "San Francisco",
    continent: "North America",
    country: "United States",
    state: "California",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: SanFrancisco,
    imageAlt: "San Francisco, United States",
    category: "Trending Destinations",
    additionalDetails: {
      DestinationName: "San Francisco, United States",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "United States",
        city: "San Francisco",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 9,
    name: "Niagara Falls",
    continent: "North America",
    country: "U.S. and Canada.",
    state: "",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 4.5,
    price: "$1000",
    imageSrc: NiagaraFall,
    imageAlt: "Niagara Falls,Canada",
    category: "Trending Destinations",
    additionalDetails: {
      DestinationName: "Niagara Falls,Canada",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Canada",
        city: "Niagara Falls",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 10,
    name: "Yellowstone National Park",
    continent: "North America",
    country: "United States",
    state: "Wyoming",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: YellowStoneNationalPark,
    imageAlt: "Yellowstone National Park, United States",
    category: "Trending Destinations",
    additionalDetails: {
      DestinationName: "Yellowstone National Park, United States",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "United States",
        city: "Wyoming",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 11,
    name: "Great Barrier Reef",
    continent: "Oceania",
    country: "Australia",
    state: "Queensland",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: GreatBarrierReef,
    imageAlt: "Great Barrier Reef,Australia",
    category: "Best Value for Money",
    additionalDetails: {
      DestinationName: "Great Barrier Reef,Australia",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Australia",
        city: "Queensland",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 12,
    name: "Santorini",
    continent: "Europe",
    country: "Greece",
    state: "South Aegean",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: Santorini,
    imageAlt: "Santorini,Greece",
    category: "Best Value for Money",
    additionalDetails: {
      DestinationName: "Santorini,Greece",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Greece",
        city: "Santorini",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 13,
    name: "Florence",
    continent: "Europe",
    country: "Italy",
    state: "Île-de-France",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: Florence,
    imageAlt: "Florence,Italy",
    category: "Best Value for Money",
    additionalDetails: {
      DestinationName: "Florence,Italy",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Italy",
        city: "Florence",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 14,
    name: "Dubai",
    continent: "Asia",
    country: "United Arab Emirates",
    state: "United Arab Emirates",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: Dubai,
    imageAlt: "Dubai,United Arab Emirates",
    category: "Most Popular",
    additionalDetails: {
      DestinationName: "Dubai,United Arab Emirates",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "United Arab Emirates",
        city: "Dubai",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 15,
    name: "Machu Picchu",
    continent: "South America",
    country: "Peru",
    state: "northwest of Cuzco",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 4,
    price: "$1000",
    imageSrc: MachuPicchu,
    imageAlt: "Machu Picchu,Peru",
    category: "Most Visited",
    additionalDetails: {
      DestinationName: "Machu Picchu,Peru",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Peru",
        city: "Cusco",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 16,
    name: "Sydney",
    continent: "Oceania",
    country: "Australia",
    state: "New South Wales",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 4,
    price: "$1000",
    imageSrc: Sydney,
    imageAlt: "Sydney,Australia",
    category: "Most Visited",
    additionalDetails: {
      DestinationName: "Sydney,Australia",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Australia",
        city: "Sydney",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 17,
    name: "Maui",
    continent: "North America",
    country: "United States",
    state: "Hawaii",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: Maui,
    imageAlt: "Maui,United States",
    category: "Highest Rated",
    additionalDetails: {
      DestinationName: "Maui, United States",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "United States",
        city: "Maui County",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 18,
    name: "London",
    continent: "Europe",
    country: "England",
    city: "",
    state: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: London,
    imageAlt: "London, England",
    category: "Highest Rated",
    additionalDetails: {
      DestinationName: "London, England",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "England",
        city: "London",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 19,
    name: "Rome",
    continent: "Europe",
    country: "Italy",
    state: "Lazio",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: Rome,
    imageAlt: "Rome, Italy",
    category: "Highest Rated",
    additionalDetails: {
      DestinationName: "Rome, Italy",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Italy",
        city: "Rome",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
  {
    id: 20,
    name: "Phuket",
    continent: "Asia",
    country: "Thailand",
    state: "southern Thailand",
    city: "",
    description:
      "Paris is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.",
    rating: 5,
    price: "$1000",
    imageSrc: Phuket,
    imageAlt: "Phuket, Thailand",
    category: "Highest Rated",
    additionalDetails: {
      DestinationName: "Phuket, Thailand",

      images: [
        "https://media2.thrillophilia.com/images/photos/000/163/349/original/1562917404_Group-of-hikers-walking-on-the-Caldera-of-Volcano-of-Batur-Bali.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/267/original/1530258837_shutterstock_725111986.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/419/original/1530258566_shutterstock_787793170.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/270/original/1484827419_Tegallalang-indonesia.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/984/original/1625578378_swing.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/272/original/1625743267_6.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/106/275/original/1563198831_6d5dc592173d84b705bac5f47e8ff9f4-goa-gajah.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/082/346/original/1625579264_pulau.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/163/985/original/1563192758_gettyimages-672299004-d72d.jpg?w=753&h=450&dpr=1.0",
        "https://media2.thrillophilia.com/images/photos/000/130/192/original/1625580664_Sekumpul_Waterfall.jpg?w=753&h=450&dpr=1.0",
        // ... add more image URLs here
      ],
      location: {
        country: "Thailand",
        city: "Phuket",
        description:
          "Home to thousand amazing animals representing more than 100 species, including some of rare and endangered species. Combining Balinese cultural ambience with African Savannah, Bali Safari and Marine Park features the following exhibits featuring Sumatran elephant, Sumatran tiger, white tiger, leopard, komodo dragon are just some of the fascinating creatures that can be seen at the Bali Safari and Marine Park. Fulfilling its mission of conservation, education and recreation through one of our attractive Elephant Show devoted to animals involved in conservation and education projects and so much more excitement by riding the elephant with our Elephant Back Safari around the African Savannah and get to see your favorite animal up close! and and there's a night into the wild names Night Safari where you can ride with amazing wild experiences ever. In Animal Encounter make the Bali Safari and Marine Park's leading family attraction and adventure in Bali.",
        coordinates: {
          latitude: 20.015123,
          longitude: 102.113419,
        },
      },
      nearbyPlaces: [
        {
          id: 1,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 2,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: " 9 am to 6 pm",
        },
        {
          id: 3,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 4,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 5,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },
        {
          id: 6,
          name: "Waterbom Bali",
          imageSrc:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/53/5e/42/photo0jpg.jpg?w=500&h=400&s=1",
          imageAlt: "Bali, Indonesian",
          distanceFromAirport: "2 miles",
          description:
            "Lively water park with a rides for all ages, plus restaurants, a food court & a swim-up bar.",
          address:
            " Jl. Kartika Plaza, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia",
          hours: "9 am to 6 pm",
        },

        // ... add more nearby places
      ],

      bestTimeToVisit: {
        drySeason: {
          months: "April to October",
          description:
            "The best time to visit Bali is between April and October, which is the island's dry season. The weather is ideal for travelers, with lower humidity and minimal rainfall.",
          details: [
            {
              month: "August",
              rainfall: "8 mm",
              sunnyDays: "30 days",
              note: "The driest month.",
            },
            {
              month: "December",
              rainfall: "122 mm",
              rainyDays: "7 days",
              note: "The wettest month.",
            },
          ],
        },
        reasonsToVisit: [
          "Crowds: There are fewer people around, so beaches, temples, and roads are less crowded.",
          "Hotels: Some of Bali's best hotels can be snapped up at reduced rates.",
          "Airfare: Airfares are much cheaper.",
          "Sales: Many shops offer sales and promotions.",
          "Restaurants: Restaurants are less crowded.",
        ],
        highSeason: {
          months: ["July", "August", "December"],
          description:
            "The high season (July–August and December) is the best time for festivals and partying.",
        },
      },

      activities: ["Hiking", "Swimming", "Picnicking"],
      facilities: [
        "Restrooms",
        "Changing rooms",
        "Food stalls",
        /* ... */
      ],
      recommendedFor: ["Nature lovers", "Adventure seekers"],
      accommodations: [
        {
          id: 1,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 2,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 3,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 4,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 5,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 6,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },
        {
          id: 7,
          name: "K Club Ubud",
          imgSrc:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470468308.jpg?k=2b09bd6361cb5324328af5617f10ebd5665b96e4b723d5a0010a0691702c26fd&o=&hp=1",
          type: "Resort",
          description:
            "K-Club Ubud is composed of 30 fully service villas completely integrated into the environment, with an organic restaurant, a new kind of spa, and an inviting pool club. The fitness and yoga facilities overlook the calm, green jungle.",
          facilities: ["Pool", "Spa"],
          rating: "4.8 / 5",
          priceRange: "26,596",
        },

        // ... add more accommodations
      ],
      diningOptions: [
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },
        {
          name: "Kayuputi",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipP6SGAJlut3zuiXhP50VTTWuMvQoQPOlpcmAaTe=s680-w680-h510",
          cuisine: "Local cuisine",
          rating: "4.7 / 5",
          priceRange: "₹₹₹₹",
        },

        // ... add more dining options
      ],
      localSpecialties: [
        {
          name: "Babi Guling",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Babi-Guling-via-Jack-the-Traveller.jpg",
          description:
            "Probably Bali’s most iconic local dish, babi guling (also known as suckling pig) is one nose-to-tail delicacy that you have to try. It’s usually served with rice, pork sausage, urapan (a vegetable salad in coconut chilli dressing), huge cuts of spice-rubbed, spit-roasted meat and the crispiest, crunchiest and most scrumptiously flavoured skin.",
        },
        {
          name: "Nasi Campur",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Nasi-Campur-Bohemian-Traveller.jpg",
          description:
            "Balinese nasi campur (literally meaning mixed rice) is a fave food with locals (and us!) who typically dine on this bit-of-everything dish for breakfast, brunch, lunch and dinner. ...",
        },
        {
          name: "Sate Lilit Ikan",
          imgSrc:
            "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2014/04/Sate-Lillit-Pencar-Seafood-Grill.jpg",
          description:
            "We’ve all tried satay (grilled skewered meat) before – it’s almost everywhere in Southeast Asia. But not everyone has had the pleasure of tasting traditional Balinese sate lilit ikan (fish satay).",
        },
        // ... add more local specialties
      ],
      // Add more fields as needed...
    },
  },
];

export default destinationsData;
