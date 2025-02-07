import { activate } from "./nature.js";
// import { categoryBooks } from "./nature.js";

const newBooks=  [
    {
      "id": "FIC001",
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "description": "A coming-of-age story set in the American South, tackling themes of racial injustice and moral growth.",
      "category": "Classic Fiction",
      "image": "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY218_.jpg"
    },
    {
      "id": "FIC002",
      "title": "1984",
      "author": "George Orwell",
      "description": "A dystopian novel about a totalitarian society under constant surveillance, where truth is manipulated.",
      "category": "Dystopian Fiction",
      "image": "https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UY218_.jpg"
    },
    {
      "id": "FIC003",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "description": "A tragic love story set in the Jazz Age, exploring wealth, class, and the pursuit of the American Dream.",
      "category": "Classic Fiction",
      "image": "https://m.media-amazon.com/images/I/61dRoDRubtL._AC_UY218_.jpg"
    },
    {
      "id": "FIC004",
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "description": "A rebellious teenager's journey through New York City as he struggles with identity and alienation.",
      "category": "Literary Fiction",
      "image": "https://m.media-amazon.com/images/I/71nXPGovoTL._AC_UY218_.jpg"
    },
    {
      "id": "FIC005",
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "description": "A romantic novel that follows Elizabeth Bennet as she navigates love, class, and family expectations.",
      "category": "Romantic Fiction",
      "image": "https://m.media-amazon.com/images/I/81a3sr-RgdL._AC_UY218_.jpg"
    },
    {
      "id": "FIC006",
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "description": "A philosophical novel about a young shepherd’s journey to discover his personal legend.",
      "category": "Adventure Fiction",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
      "id": "FIC007",
      "title": "The Road",
      "author": "Cormac McCarthy",
      "description": "A post-apocalyptic tale of a father and son struggling to survive in a bleak, barren world.",
      "category": "Post-Apocalyptic Fiction",
      "image": "https://m.media-amazon.com/images/I/51M7XGLQTBL._AC_UY218_.jpg"
    },
    {
      "id": "FIC008",
      "title": "The Night Circus",
      "author": "Erin Morgenstern",
      "description": "A magical tale of two young illusionists competing in a mysterious circus that only opens at night.",
      "category": "Fantasy Fiction",
      "image": "https://m.media-amazon.com/images/I/71+whvJjE3L._AC_UY218_.jpg"
    }
  ]
  
  activate(newBooks);