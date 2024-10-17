document.addEventListener("DOMContentLoaded", () => {
    const recipeList = document.getElementById("recipe-list");
    const searchInput = document.getElementById("search");
    const toggleModeBtn = document.getElementById("toggle-mode");

    const recipes = [  
        {
            "id": 1,
            "title": "Pancakes",
            "description": "Fluffy pancakes served with maple syrup and butter. A classic breakfast favorite.",
            "imageUrl": "/images/pancakes.jpg",
            "category": "Breakfast"
        },
        {
            "id": 2,
            "title": "Grilled Chicken Sandwich",
            "description": "A healthy grilled chicken sandwich with fresh veggies and a hint of mayo. A light and delicious lunch option.",
            "imageUrl": "/images/grilled-chicken-sandwich.jpg",
            "category": "Lunch"
        },
        {
            "id": 3,
            "title": "Spaghetti Bolognese",
            "description": "Classic spaghetti Bolognese with a rich tomato and meat sauce. A hearty meal for lunch or dinner.",
            "imageUrl": "/images/spaghetti-bolognese.jpg",
            "category": "Lunch"
        },
        {
            "id": 4,
            "title": "Roast Beef Dinner",
            "description": "Juicy roast beef served with mashed potatoes and gravy. A perfect meal for dinner.",
            "imageUrl": "/images/roast-beef.jpg",
            "category": "Dinner"
        },
        {
            "id": 5,
            "title": "Vanilla Cake",
            "description": "A soft, buttery vanilla cake topped with creamy frosting. Perfect as a dessert or snack.",
            "imageUrl": "/images/vanilla-cake.jpg",
            "category": "Dessert"
        }
    ];

    // Function to display the recipes
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
                    <button class="like-btn">♡ Like</button> <!-- Like button -->
                </div>
            `;

            
            recipeList.appendChild(recipeCard);
        });
        addLikeListeners(); 
    }

    
    displayRecipes(recipes);

    
    searchInput.addEventListener("keyup", () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchText));
        displayRecipes(filteredRecipes);
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


