import { activate } from "./nature.js";
// import { categoryBooks } from "./nature.js";

 const newBooks =[
  {
    "id": "H001",
    "title": "How Not to Die",
    "author": "Michael Greger, M.D.",
    "description": "Explores the science behind nutrition and how a plant-based diet can prevent and reverse diseases.",
    "category": "Nutrition & Wellness",
    "image": "https://m.media-amazon.com/images/I/81RvGjUWqlL._AC_UY218_.jpg"
  },
  {
    "id": "H002",
    "title": "The Obesity Code",
    "author": "Dr. Jason Fung",
    "description": "Examines the root causes of obesity and presents strategies for sustainable weight loss through intermittent fasting.",
    "category": "Weight Loss & Nutrition",
    "image": "https://m.media-amazon.com/images/I/91xUWBRgH7L._AC_UY218_.jpg"
  },
  {
    "id": "H003",
    "title": "Why We Sleep",
    "author": "Matthew Walker",
    "description": "A deep dive into the science of sleep and its critical role in health, productivity, and longevity.",
    "category": "Sleep Science",
    "image": "https://m.media-amazon.com/images/I/814sf-LvR0L._AC_UY218_.jpg"
  },
  {
    "id": "H004",
    "title": "The Blue Zones",
    "author": "Dan Buettner",
    "description": "Investigates regions where people live the longest and reveals their lifestyle secrets.",
    "category": "Longevity & Lifestyle",
    "image": "https://m.media-amazon.com/images/I/71S7ldYU8TL._AC_UY218_.jpg"
  },
  {
    "id": "H005",
    "title": "The Mind-Gut Connection",
    "author": "Emeran Mayer, M.D.",
    "description": "Explores the powerful link between the gut and the brain, and its impact on mental and physical health.",
    "category": "Gut Health",
    "image": "https://m.media-amazon.com/images/I/71aBnlgaJbL._AC_UY218_.jpg"
  },
  {
    "id": "H006",
    "title": "Lifespan: Why We Age—and Why We Don't Have To",
    "author": "David Sinclair, Ph.D.",
    "description": "Explores groundbreaking research on reversing aging and extending human lifespan.",
    "category": "Aging & Longevity",
    "image": "https://m.media-amazon.com/images/I/618Zq3z3LRL._AC_UY218_.jpg"
  },
  {
    "id": "H007",
    "title": "The Plant-Based Athlete",
    "author": "Matt Frazier & Robert Cheeke",
    "description": "Explains how athletes can achieve peak performance on a plant-based diet with real-life success stories.",
    "category": "Fitness & Nutrition",
    "image": "https://m.media-amazon.com/images/I/71McepM8xxL._SY425_.jpg"
  },
  {
    "id": "H008",
    "title": "Breath: The New Science of a Lost Art",
    "author": "James Nestor",
    "description": "Uncovers the forgotten science of proper breathing techniques to improve health and performance.",
    "category": "Wellness & Science",
    "image": "https://m.media-amazon.com/images/I/61eL6asNYuL._AC_UY218_.jpg"
  }
]


  activate(newBooks);
  