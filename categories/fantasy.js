import { activate } from "./nature.js";
// import { categoryBooks } from "./nature.js";

 const newBooks =[
    {
      "id": "F001",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "description": "A hobbit named Bilbo Baggins embarks on an adventure with a group of dwarves to reclaim a lost kingdom from a dragon.",
      "category": "High Fantasy",
      "image": "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
    },
    {
      "id": "F002",
      "title": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "description": "A young boy discovers he is a wizard and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
      "category": "Fantasy Adventure",
      "image": "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg"
    },
    {
      "id": "F003",
      "title": "A Game of Thrones",
      "author": "George R.R. Martin",
      "description": "Noble families vie for control of the Iron Throne in the land of Westeros, where political intrigue and dark magic abound.",
      "category": "Epic Fantasy",
      "image": "https://m.media-amazon.com/images/I/91v+2sd0roL._AC_UY218_.jpg"
    },
    {
      "id": "F004",
      "title": "The Name of the Wind",
      "author": "Patrick Rothfuss",
      "description": "A gifted young man grows into a legendary magician while recounting his life's journey full of adventure, love, and hardship.",
      "category": "Fantasy Fiction",
      "image": "https://images-na.ssl-images-amazon.com/images/I/81tEgsxpNZS.jpg"
    },
    {
      "id": "F005",
      "title": "Mistborn: The Final Empire",
      "author": "Brandon Sanderson",
      "description": "A group of rebels with magical abilities seeks to overthrow a tyrannical ruler in a world ruled by darkness.",
      "category": "Dark Fantasy",
      "image": "https://m.media-amazon.com/images/I/917NNRCArfL._AC_UY218_.jpg"
    },
    {
      "id": "F006",
      "title": "The Lies of Locke Lamora",
      "author": "Scott Lynch",
      "description": "A master thief and con artist navigates a city of deception and intrigue while seeking revenge on a mysterious enemy.",
      "category": "Fantasy Heist",
      "image": "https://m.media-amazon.com/images/I/91cRgSHxsbL._AC_UY218_.jpg"
    },
    {
      "id": "F007",
      "title": "The Priory of the Orange Tree",
      "author": "Samantha Shannon",
      "description": "An epic tale of dragons, political struggles, and warrior queens set in a richly detailed fantasy world.",
      "category": "Epic Fantasy",
      "image": "https://m.media-amazon.com/images/I/91AKD1sx-4L._AC_UY218_.jpg"
    },
    {
      "id": "F008",
      "title": "American Gods",
      "author": "Neil Gaiman",
      "description": "A man gets caught in a battle between old gods and new, as he journeys across a mystical and dangerous America.",
      "category": "Mythic Fantasy",
      "image": "https://m.media-amazon.com/images/I/81FphHJqqWL._AC_UY218_.jpg"
    }
  ]

  activate(newBooks);
  