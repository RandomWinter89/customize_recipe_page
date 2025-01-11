export type Nutrition = {
    Calories: number,
    Carb: number,
    Protein: number,
    Fat: number
}

export type RecipeForm = {
    id: number,
    thumbnail?: string,
    recipeName: string,
    description: string,
    prepTime: number,
    cookTime: number,
    ingredients: string[],
    instructions: string[],
    nutrition: Nutrition;
}

export const recipe01: RecipeForm[] = [
    {
        id: 1,
        thumbnail: 'https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg',
        recipeName: 'Simple Omelette Recipe',
        description: 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats',
        prepTime: 5,
        cookTime: 5,
        ingredients: [
            '2-3 large eggs',
            'Salt, to taste'
        ],
        instructions: [
            'Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
            'Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil',
        ],
        nutrition: {
            Calories: 277,
            Carb: 0,
            Protein: 20,
            Fat: 22
        }
    },{
        id: 2,
        thumbnail: 'https://norecipes.com/wp-content/uploads/2015/02/recipejapanese-curry-scratch.1024x1024-500x500.jpg',
        recipeName: 'Classic Chicken Curry',
        description: 'A warm and comforting curry dish featuring tender chicken cooked in a rich, flavorful sauce of aromatic spices and creamy coconut milk.',
        prepTime: 15,
        cookTime: 25,
        ingredients: [
            '1 lb chicken breast, diced',
            '1 onion, finely chopped',
            '2 cloves garlic, minced',
            '1 tbsp ginger, grated',
            '2 tbsp curry powder',
            '1 can coconut milk',
            '1 cup chicken broth',
            '2 tbsp oil',
            'Salt, to taste',
        ],
        instructions: [
            'Prepare the aromatics: Heat oil in a large pan over medium heat. Add onion, garlic, and ginger, sautéing until fragrant.',
            'Cook the chicken: Add diced chicken to the pan and cook until browned on all sides.',
            'Add spices and liquid: Stir in curry powder, coconut milk, and chicken broth. Simmer for 15-20 minutes until the chicken is cooked through and the sauce has thickened.',
            'Season to taste: Add salt to taste and serve with steamed rice or naan.',
        ],
        nutrition: {
            Calories: 345,
            Carb: 5,
            Protein: 28,
            Fat: 24
        }
    },
    {
        id: 3,
        recipeName: 'Beef Udon Soup',
        description: 'A hearty and flavorful Japanese dish featuring thick udon noodles, tender beef slices, and a savory broth.',
        prepTime: 10,
        cookTime: 15,
        ingredients: [
            '1 pack udon noodles',
            '1/2 lb beef sirloin, thinly sliced',
            '4 cups dashi or beef broth',
            '2 tbsp soy sauce',
            '1 tbsp mirin',
            '1 tbsp sugar',
            '2 green onions, chopped',
            '1 tbsp sesame oil',
        ],
        instructions: [
            'Prepare the broth: In a pot, combine dashi or beef broth with soy sauce, mirin, and sugar. Bring to a boil, then reduce heat to a simmer.',
            'Cook the beef: Heat sesame oil in a pan over medium heat. Add the beef slices and cook until just browned.',
            'Combine and heat noodles: Add udon noodles to the simmering broth and cook for a few minutes until tender.',
            'Assemble and garnish: Transfer noodles and broth to a bowl, top with cooked beef slices and chopped green onions.',
        ],
        nutrition: {
            Calories: 430,
            Carb: 45,
            Protein: 22,
            Fat: 16
        }
    },
    {
        id: 4,
        recipeName: 'Crispy Fried Chicken',
        description: 'A classic comfort food featuring juicy chicken coated in a seasoned, crispy crust, perfect for any occasion.',
        prepTime: 15,
        cookTime: 20,
        ingredients: [
            '1 lb chicken drumsticks or thighs',
            '1 cup all-purpose flour',
            '1/2 cup buttermilk',
            '1 tsp paprika',
            '1/2 tsp garlic powder',
            '1/2 tsp onion powder',
            '1/2 tsp black pepper',
            '1/2 tsp salt',
            'Oil for frying',
        ],
        instructions: [
            'Marinate the chicken: Soak chicken in buttermilk and let sit for at least 30 minutes or overnight.',
            'Prepare the coating: Mix flour, paprika, garlic powder, onion powder, black pepper, and salt in a shallow dish.',
            'Coat the chicken: Remove chicken from buttermilk and coat evenly in the flour mixture.',
            'Fry until golden: Heat oil in a deep pan or fryer to 350°F (175°C). Fry chicken until golden brown and cooked through, about 15-20 minutes.',
        ],
        nutrition: {
            Calories: 440,
            Carb: 15,
            Protein: 30,
            Fat: 25
        }
    },
    {
        id: 5,
        recipeName: 'French Toast',
        description: 'A sweet breakfast treat made with bread soaked in a custard mixture, cooked to golden perfection, and topped with syrup or fresh fruit.',
        prepTime: 5,
        cookTime: 10,
        ingredients: [
            '4 slices of bread',
            '2 large eggs',
            '1/2 cup milk',
            '1 tsp vanilla extract',
            '1/2 tsp cinnamon',
            '1 tbsp butter',
            'Maple syrup, for serving',
        ],
        instructions: [
            'Make the custard: In a shallow dish, whisk together eggs, milk, vanilla extract, and cinnamon.',
            'Soak the bread: Dip each slice of bread into the custard mixture, ensuring both sides are coated.',
            'Cook until golden: Heat butter in a pan over medium heat. Cook bread slices for 2-3 minutes per side until golden brown.',
            'Serve warm: Plate the French toast and drizzle with maple syrup or top with fresh fruit.',
        ],
        nutrition: {
            Calories: 310,
            Carb: 35,
            Protein: 10,
            Fat: 12
        }
    }
]