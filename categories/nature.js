export let categoryBooks = [
  {
    id: 1,
    title: "The Hidden Life of Trees",
    author: "Peter Wohlleben",
    image: "img/nature-img/5.webp",
    category: "Nature",
    description:
      "A fascinating exploration of how trees communicate, care for each other, and form complex ecosystems.",
  },
  {
    id: 2,
    title: "Braiding Sweetgrass",
    author: "Robin Wall Kimmerer",
    image: "img/nature-img/6.webp",
    category: "Nature",
    description:
      "A beautiful blend of indigenous wisdom and scientific knowledge, celebrating the relationship between humans and the natural world.",
  },
  {
    id: 3,
    title: "The Overstory",
    author: "Richard Powers",
    image: "img/nature-img/8.webp",
    category: "Nature",
    description:
      "A Pulitzer Prize-winning novel that weaves together the lives of characters and their deep connections to trees and forests.",
  },
  {
    id: 4,
    title: "Silent Spring",
    author: "Rachel Carson",
    image: "img/nature-img/9.webp",
    category: "Nature",
    description:
      "A groundbreaking work that exposed the dangers of pesticides and sparked the modern environmental movement.",
  },
  {
    id: 5,
    title: "The Nature Fix",
    author: "Florence Williams",
    image: "img/nature-img/1.webp",
    category: "Nature",
    description:
      "An exploration of how spending time in nature can improve our mental and physical well-being.",
  },
  {
    id: 6,
    title: "Walden",
    author: "Henry David Thoreau",
    image: "img/nature-img/2.webp",
    category: "Nature",
    description:
      "A classic reflection on simple living in natural surroundings, written during Thoreau's time at Walden Pond.",
  },
  {
    id: 7,
    title: "The Invention of Nature",
    author: "Andrea Wulf",
    image: "img/nature-img/3.webp",
    category: "Nature",
    description:
      "A biography of Alexander von Humboldt, the visionary naturalist who reshaped our understanding of the natural world.",
  },
  {
    id: 8,
    title: "The Soul of an Octopus",
    author: "Sy Montgomery",
    image: "img/nature-img/7.webp",
    category: "Nature",
    description:
      "A captivating journey into the intelligence and emotional lives of octopuses, revealing their surprising complexity.",
  },
];

export function activate(categoryBooks) {
  const categoryContainer = document.querySelector("#category-books");

    const generateCategories = () => {
    categoryContainer.innerHTML = categoryBooks
      .map((categoryBook) => {
        // destructure items
        const { title, author, id, image, category, description } =
          categoryBook;

        return `
      <div class="category-pages-card">
        <img class="img-fluid" src=${image} />
          <figcaption>
            <h1 class="category-title">${title}</h1>
            <p class="author">${author}</p>
            <p>${category}</p>
            <p class="description">${description}</p>
          </figcaption>
    </div>
      `;
      })
      .join(" ");
  };
  generateCategories();
}

activate(categoryBooks); // The activate function is so we can call the code inside in different js files using modules