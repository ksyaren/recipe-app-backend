const axios = require('axios');

async function fetchRecipes() {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  return response.data.meals;
}

async function sendRecipesToStrapi(recipes) {
  for (const recipe of recipes) {
    await axios.post('http://localhost:1337/api/recipes', {
      data: {
        title: recipe.strMeal,
        description: recipe.strInstructions,
        image: recipe.strMealThumb,
        mealld: recipe.idMeal,
        instructions: recipe.strInstructions,
        ingredients: [
          recipe.strIngredient1,
          recipe.strIngredient2,
          recipe.strIngredient3,
          recipe.strIngredient4,
          recipe.strIngredient5,
          recipe.strIngredient6,
          recipe.strIngredient7,
          recipe.strIngredient8,
          recipe.strIngredient9,
          recipe.strIngredient10,
          recipe.strIngredient11,
          recipe.strIngredient12,
          recipe.strIngredient13,
          recipe.strIngredient14,
          recipe.strIngredient15,
          recipe.strIngredient16,
          recipe.strIngredient17,
          recipe.strIngredient18,
          recipe.strIngredient19,
          recipe.strIngredient20
        ]
      }
    });
  }
}

async function migrateRecipes() {
  const recipes = await fetchRecipes();
  await sendRecipesToStrapi(recipes);
}

migrateRecipes().then(() => {
  console.log('Veriler başarıyla Strapi\'ye aktarıldı!');
}).catch(err => {
  console.error('Hata:', err);
});
