import { activate } from "./nature.js";
// import { categoryBooks } from "./nature.js";

const newBooks = [
  {
    "id": "S001",
    "title": "A Brief History of Time",
    "author": "Stephen Hawking",
    "description": "Explores fundamental questions about the universe, black holes, and time itself in an accessible way.",
    "category": "Physics & Cosmology",
    "image": "https://m.media-amazon.com/images/I/A1WTURKqwyL._AC_UY218_.jpg"
  },
  {
    "id": "S002",
    "title": "Astrophysics for People in a Hurry",
    "author": "Neil deGrasse Tyson",
    "description": "A short and engaging introduction to astrophysics, perfect for those curious about the universe but short on time.",
    "category": "Astrophysics",
    "image": "https://m.media-amazon.com/images/I/71c46ivy5xL._AC_UY218_.jpg"
  },
  {
    "id": "S003",
    "title": "The Selfish Gene",
    "author": "Richard Dawkins",
    "description": "Introduces the gene-centered view of evolution and explains how natural selection shapes life.",
    "category": "Evolutionary Biology",
    "image": "https://m.media-amazon.com/images/I/81qBibbrPGL._AC_UY218_.jpg"
  },
  {
    "id": "S004",
    "title": "The Gene: An Intimate History",
    "author": "Siddhartha Mukherjee",
    "description": "A fascinating exploration of genetics, its history, and its impact on humanity.",
    "category": "Genetics & Medicine",
    "image": "https://m.media-amazon.com/images/I/71ZGYmVZKXL._AC_UY218_.jpg"
  },
  {
    "id": "S005",
    "title": "The Elegant Universe",
    "author": "Brian Greene",
    "description": "Explains string theory and its potential to unify all forces of nature.",
    "category": "Theoretical Physics",
    "image": "https://m.media-amazon.com/images/I/41K0DR5Y0VL._AC_UY218_.jpg"
  },
  {
    "id": "S006",
    "title": "Sapiens: A Brief History of Humankind",
    "author": "Yuval Noah Harari",
    "description": "A deep look into the history and evolution of Homo sapiens and how culture has shaped our species.",
    "category": "Anthropology & History",
    "image": "https://m.media-amazon.com/images/I/713jIoMO3UL._SL1500_.jpg"
  },
  {
    "id": "S007",
    "title": "The Sixth Extinction",
    "author": "Elizabeth Kolbert",
    "description": "Explores how human activity is driving mass extinctions and altering Earth's biodiversity.",
    "category": "Environmental Science",
    "image": "https://m.media-amazon.com/images/I/81h90TRHDnL._AC_UY218_.jpg"
  },
  {
    "id": "S008",
    "title": "Cosmos",
    "author": "Carl Sagan",
    "description": "A journey through space and time, exploring the universe and humanity’s place in it.",
    "category": "Space & Astronomy",
    "image": "https://m.media-amazon.com/images/I/710C5x4MzwL._AC_UY218_.jpg"
  }
]


// Calling the function imported
activate(newBooks);
