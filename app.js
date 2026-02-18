
const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    time: 25,
    difficulty: "easy",
    description: "A quick and creamy garlic parmesan pasta perfect for busy weeknights.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Classic Caesar Salad",
    time: 15,
    difficulty: "easy",
    description: "Crisp romaine lettuce tossed with creamy Caesar dressing and croutons.",
    category: "salad"
  },
  {
    id: 3,
    title: "Chicken Stir Fry",
    time: 35,
    difficulty: "medium",
    description: "Flavorful chicken stir-fried with fresh vegetables and soy sauce.",
    category: "asian"
  },
  {
    id: 4,
    title: "Vegetable Curry",
    time: 45,
    difficulty: "medium",
    description: "A rich and aromatic vegetable curry simmered with coconut milk.",
    category: "curry"
  },
  {
    id: 5,
    title: "Beef Wellington",
    time: 90,
    difficulty: "hard",
    description: "Tender beef wrapped in puff pastry and baked to golden perfection.",
    category: "gourmet"
  },
  {
    id: 6,
    title: "Homemade Ramen",
    time: 75,
    difficulty: "hard",
    description: "Deeply flavorful ramen with slow-simmered broth and fresh toppings.",
    category: "soup"
  },
  {
    id: 7,
    title: "Grilled Salmon Bowl",
    time: 30,
    difficulty: "medium",
    description: "Healthy grilled salmon served with rice and fresh vegetables.",
    category: "seafood"
  },
  {
    id: 8,
    title: "Chocolate Soufflé",
    time: 70,
    difficulty: "hard",
    description: "Light and airy chocolate dessert with a rich molten center.",
    category: "dessert"
  }
];



const recipeContainer = document.querySelector("#recipe-container");



const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>
      
      <p>${recipe.description}</p>
    </div>
  `;
};



const renderRecipes = (recipesArray) => {
  // Convert each recipe object into an HTML string
  const recipesHTML = recipesArray
    .map(recipe => createRecipeCard(recipe))
    .join("");

  // Insert all recipe cards into the DOM
  recipeContainer.innerHTML = recipesHTML;
};


renderRecipes(recipes);
