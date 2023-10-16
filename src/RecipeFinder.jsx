import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import foodmania from './img/foodmania1.png';




const RecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);


  const apiKey = '35491ca99cmshbffb4bbafbabeefp1a990cjsn49d9b0424ed5';

  useEffect(() => {
    if (searchTerm) {
      const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=Breakfast&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=Biscuits%20and%20cookies&q=${searchTerm}`;

      const options = {
        method: 'GET',
        headers: {
          'Accept-Language': 'en',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
        },
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.hits) {
            setRecipes(data.hits);
          }
        })
        .catch((error) => {
          console.error('Error fetching recipes:', error);
        });
    }
  }, [searchTerm, apiKey]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.elements.searchInput.value);
  };

  const toggleIngredients = (recipeId) => {
    setSelectedRecipeId(selectedRecipeId === recipeId ? null : recipeId);
  };

  return (
    <div>
      <nav>
        <div class="navbar">
          <div class="logo">
            <a href="/">
             K ~ Food Finder</a>
          </div>
          {/* <ul class="menu">
            <li>
              <a href="/">Home</a>
              <a href="/">Home</a>
              <a href="/">Home</a>
            </li>
          </ul> */}
        </div>
      </nav>
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSearch}>
        <input type="text" className="Searchb" name="searchInput" placeholder="   Search for recipes" />
        <button className='searchbtn' type="submit">Search</button>
      </form>
      <div className="recipes container">
        <div className="row">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe col-sm">
              <div className='dabba'>
                <h3 className="tit">
                  {recipe.recipe.label.length > 10
                    ? `${recipe.recipe.label.slice(0, 20)}...`
                    : recipe.recipe.label}
                </h3>
                <img style={{ width: '276px', height: '200px' }} src={recipe.recipe.image} alt={recipe.recipe.label} />
                {selectedRecipeId === index && (
                  <ul>
                    {recipe.recipe.ingredientLines.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                )}
                <button className='sbt' onClick={() => toggleIngredients(index)}>
                  {selectedRecipeId === index ? 'Hide Ingredients' : 'Show Ingredients'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default RecipeFinder;
