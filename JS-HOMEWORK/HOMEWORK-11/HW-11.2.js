

fetch('https://dummyjson.com/docs/recipes')
    .then(response => response.json())
    .then(data => {
        const recipes = data.recipes;

        recipes.forEach(recipe => {
            // Створення списку інгредієнтів
            const ingredientsList = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');

            document.getElementById('recipeList').innerHTML += `
                        <li>
                            <h2>${recipe.name}</h2>
                            <p><strong>Category:</strong> ${recipe.category}</p>
                            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                            <p><strong>Ingredients:</strong></p>
                            <ul>${ingredientsList}</ul>
                        </li>
                    `;
        });
    })
    .catch(error => console.error( error));