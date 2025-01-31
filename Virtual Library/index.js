// ////  HAMBURGER MENU ///////////

let hamMenu = document.querySelector('.hamburger-icon');
let spanOne = document.querySelector('.span-1');
let spanTwo = document.querySelector('.span-2');
let spanThree = document.querySelector('.span-3');
let nav = document.querySelector('nav');

hamMenu.addEventListener('click', () => {
  if(spanOne.classList.contains('first-span')) {
    spanOne.classList.remove('first-span')
    spanTwo.classList.remove('sec-span')
    spanThree.classList.remove('third-span')
    nav.style.display = "none";
  } else {
    spanOne.classList.add('first-span')  
    spanTwo.classList.add('sec-span')  
    spanThree.classList.add('third-span')  
    nav.style.display = "block";
  }
}); 
// //////////////////

/* Books */
// const books = [
//   {
//       title: "Book Title 1",
//       author: "Author 1",
//       image: "images/book1.jpg",
//       category: "Fiction",
//       description: "  sit amet consectetur, adipisicing elit. Animi, dolorum quam placeat vero."
//   },
//   {
//     title: "Book Title 2",
//     author: "Author 2",
//     image: "images/book2.jpg",
//     category: "Non Fiction",
//     description: " Title 2."
// },
// {
//     title: "Book Title 3",
//     author: "Author 3",
//     image: "images/book3.jpg",
//     category: "Educational",
//     description: " Title 3."
// },
// {
//     title: "Book Title 4",
//     author: "Author 4",
//     image: "images/book4.jpg",
//     category: "Health",
//     description: " Title 4."
// },
// {
//     title: "Book Title 5",
//     author: "Author 5",
//     image: "images/book5.jpg",
//     category: "Biography",
//     description: " Title 5."
// },
// {
//     title: "Book Title 6",
//     author: "Author 6",
//     image: "images/book6.jpg",
//     category: "Fantasy",
//     description: " Title 6."
// },
// {
//     title: "Book Title 7",
//     author: "Author 7",
//     image: "images/book7.jpg",
//     category: "Food",
//     description: "Title 7."
// },
// {
//     title: "Book Title 8",
//     author: "Author 8",
//     image: "images/book8.jpg",
//     category: "Technology",
//     description: "Title 8."
// }

//   // Add more books here
// ];

// function displayBooks(filter = "") {
//   const bookList = document.getElementById("book-list");
//   bookList.innerHTML = ""; // Clear existing books

//   const filteredBooks = books.filter(book => 
//       book.title.toLowerCase().includes(filter.toLowerCase()) || 
//       book.author.toLowerCase().includes(filter.toLowerCase()) || 
//       book.category.toLowerCase().includes(filter.toLowerCase())
//   );

//   filteredBooks.forEach(book => {
//       const bookItem = document.createElement("div");
//       bookItem.classList.add("book-item");
//       bookItem.innerHTML = `
//           <img src="${book.image}" alt="${book.title}">
//           <h3>${book.title}</h3>
//           <p>${book.author}</p>
//           <p>${book.description}</p>
//       `;
//       bookList.appendChild(bookItem);
//   });
// }
// //Input Search Action...
// const searchAction = document.getElementById("search");
//   searchAction.addEventListener('keyup', (event) => {
//     displayBooks(event.target.value);
// })

// // Initial display
// displayBooks();


