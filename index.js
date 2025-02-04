// ////  HAMBURGER MENU ///////////

let hamMenu = document.querySelector(".hamburger-icon");
let spanOne = document.querySelector(".span-1");
let spanTwo = document.querySelector(".span-2");
let spanThree = document.querySelector(".span-3");
let nav = document.querySelector("nav");

hamMenu.addEventListener("click", () => {
  if (spanOne.classList.contains("first-span")) {
    spanOne.classList.remove("first-span");
    spanTwo.classList.remove("sec-span");
    spanThree.classList.remove("third-span");
    nav.style.display = "none";
  } else {
    spanOne.classList.add("first-span");
    spanTwo.classList.add("sec-span");
    spanThree.classList.add("third-span");
    nav.style.display = "block";
  }
});
// //////////////////

/* Book Items */
const books = [
  {
    title: "Book title 1",
    author: "Author 1",
    image: "img/book11.jpg",
    category: "Action and Adventure",
    description:"sit amet ",
     page: "action.html"
  },
  {
    title: "Book title 2",
    author: "Author 2",
    image: "img/book2.jpg",
    category: "Fiction",
    description:"sit amet ",
     page: "fiction.html"
  },
  {
    title: "Book Title 3",
    author: "Author 3",
    image: "images/book2.jpg",
    category: "Non Fiction",
    description: " Title 2.",
     page: "non-fiction.html"
  },
  {
    title: "Book Title 4",
    author: "Author 4",
    image: "images/book4.jpg",
    category: "Health",
    description: " Title 4.",
     page: "health.html"
  },
  {
    title: "Book Title 5",
    author: "Author 5",
    image: "img/book5.jpg",
    category: "Biography",
    description: " Title 5.",
    page: "biography.html"
  },
  {
    title: "Book Title 6",
    author: "Author 6",
    image: "",
    category: "Fantasy",
    description: " Title 6.",
     page: "fantasy.html"
  },
  {
    title: "Book Title 7",
    author: "Author 7",
    image: "img/book7.jpg",
    category: "Science",
    description: "Wanna know more about science?",
     page: "science.html"
  },
  {
    title: "Book Title 8",
    author: "Author 8",
    image: "img/book7.jpg",
    category: "Technology",
    description: "Advance your knowledge in tech.",
     page: "technology.html"
  },
//   // Add more books here
];

function displayBooks(filter = "") {
  const bookCategories = document.getElementById("book-categories");
  bookCategories.innerHTML = ""; // Clear existing books

  const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(filter.toLowerCase()) ||
      book.author.toLowerCase().includes(filter.toLowerCase()) ||
      book.category.toLowerCase().includes(filter.toLowerCase())
  );

  filteredBooks.forEach(book => {
      const bookItem = document.createElement("div");
      bookItem.classList.add("book-item");
      bookItem.innerHTML = `
        <div class= "book-content-container">
          <h3>${book.category}.</h3>
          <a href=${book.page}><button class="view-collection-button">📚View collection</button></a>
          <div>
          <img src="alt="${book.title}">
          </div>
        </div>
      `;
    
      if(book.category === "Action and Adventure") {
        bookItem.style.background = "url(img/book1.jpg)";

      } else if (book.category === "Fiction") {
        bookItem.style.background = "url(img/book2.jpg)";

      } else if (book.category === "Non Fiction") {
        bookItem.style.background = "url(img/book3.jpg)";

      } else if (book.category === "Health") {
        bookItem.style.background = "url(img/book4.jpg)";

      } else if (book.category === "Biography") {
        bookItem.style.background = "url(img/book5.jpg)";

      } else if (book.category === "Fantasy") {
        bookItem.style.background = "url(img/book6.jpg)";

      }  else if (book.category === "Science") {
        bookItem.style.background = "url(img/book7.jpg)";

      } else if (book.category === "Technology") {
        bookItem.style.background = "url(img/book8.jpg)";
      }
      bookItem.style.backgroundPosition = "center";

    /* Add book-item into book-categories div in HTML file */
      bookCategories.appendChild(bookItem);
  });
}

//Input Search Action...
const searchAction = document.getElementById("search");
  searchAction.addEventListener('keyup', (event) => {
    displayBooks(event.target.value);
})
// Initial display
displayBooks();