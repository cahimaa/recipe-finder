import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="p-6 bg-[#242424] mb-8 rounded-lg shadow-sm text-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-yellow-600">How to Use Recipe Finder</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Étape 1 */}
        <div className="bg-yellow-600 p-4 rounded shadow text-center">
          
          <h3 className="font-semibold mb-1 text-white ">Enter Ingredients</h3>
          <p className="text-white text-sm">
            Type the ingredients you have at home in the search bar to find matching recipes.
          </p>
        </div>

        {/* Étape 2 */}
        <div className="bg-yellow-600 p-4 rounded shadow text-center">
          
          <h3 className="font-semibold mb-1 text-white">Search Recipes</h3>
          <p className="text-white text-sm">
            Click search and view all recipes that use your ingredients.
          </p>
        </div>

        {/* Étape 3 */}
        <div className="bg-yellow-600 p-4 rounded shadow text-center">
          
          <h3 className="font-semibold mb-1 text-white">Cook & Enjoy</h3>
          <p className="text-white text-sm">
            Choose a recipe, follow the steps, and enjoy your meal!
          </p>
        </div>
      </div>
    </section>
  );
}
