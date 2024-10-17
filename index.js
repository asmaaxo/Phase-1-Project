document.addEventListener("DOMContentLoaded", () => {
    const recipeList = document.getElementById("recipe-list");
    const searchInput = document.getElementById("search");
    const toggleModeBtn = document.getElementById("toggle-mode");

    function displayRecipes(recipes) {
        recipeList.innerHTML = ""; 
        recipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");

            recipeCard.innerHTML = `
                <img src="${recipe.imageUrl}" alt="${recipe.title}">
                <div class="recipe-card-content">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                    <button class="like-btn">♡ Like</button>
                </div>
            `;
            recipeList.appendChild(recipeCard);
        });
        addLikeListeners(); 
    }

    fetch('https://phase-1-project-recipe-app.onrender.com/recipes')
        .then((res) => res.json())
        .then((data) => {
            displayRecipes(data);

            searchInput.addEventListener("keyup", () => {
                const searchText = searchInput.value.toLowerCase();
                const filteredRecipes = data.filter(recipe => recipe.title.toLowerCase().includes(searchText));
                displayRecipes(filteredRecipes);
            });
        })
        .catch((error) => {
            console.error('Error fetching recipes:', error);
        });

    toggleModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    function addLikeListeners() {
        const likeButtons = document.querySelectorAll(".like-btn");
        likeButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.target.classList.toggle("liked");
                e.target.textContent = e.target.classList.contains("liked") ? "❤️ Liked" : "♡ Like";
            });
        });
    }
});
