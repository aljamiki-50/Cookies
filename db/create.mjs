import pool from './db.mjs';

const createUsersTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS Recipes (
        recipe_id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        ingredients TEXT NOT NULL,
        instructions TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (recipe_id)
    );
  `;

  try {
    await pool.query(sql);
    console.log('Recipes table created successfully.');
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

// Call the function to create the table
createUsersTable();


// Call the function to create the table
createUsersTable();

// INSERT INTO Recipes (title, ingredients, instructions, created_at) VALUES
// ('Spaghetti Bolognese', 'Spaghetti, minced beef, tomato sauce, onions, garlic, olive oil, salt, pepper', '1. Cook spaghetti. 2. Sauté onions and garlic. 3. Add minced beef and cook until browned. 4. Add tomato sauce and simmer. 5. Serve over spaghetti.', NOW()),
// ('Chicken Curry', 'Chicken, curry powder, coconut milk, onions, garlic, ginger, salt, pepper', '1. Sauté onions, garlic, and ginger. 2. Add chicken and brown. 3. Add curry powder and cook briefly. 4. Add coconut milk and simmer. 5. Serve with rice.', NOW()),
// ('Beef Stew', 'Beef, potatoes, carrots, onions, beef broth, salt, pepper', '1. Brown beef. 2. Add onions and cook until soft. 3. Add beef broth and bring to a boil. 4. Add potatoes and carrots. 5. Simmer until vegetables are tender.', NOW()),
// ('Vegetable Stir-fry', 'Broccoli, bell peppers, carrots, soy sauce, garlic, ginger, olive oil, salt, pepper', '1. Heat oil in a pan. 2. Add garlic and ginger. 3. Add vegetables and stir-fry until tender. 4. Add soy sauce and cook for another minute.', NOW()),
// ('Tacos', 'Taco shells, ground beef, lettuce, tomatoes, cheese, salsa', '1. Cook ground beef. 2. Fill taco shells with beef, lettuce, tomatoes, and cheese. 3. Top with salsa.', NOW()),
// ('Pancakes', 'Flour, eggs, milk, sugar, baking powder, salt, butter', '1. Mix dry ingredients. 2. Add wet ingredients and mix. 3. Cook on a griddle until golden brown.', NOW()),
// ('Caesar Salad', 'Romaine lettuce, croutons, Caesar dressing, Parmesan cheese, chicken breast', '1. Grill chicken and slice. 2. Toss lettuce with dressing. 3. Add chicken, croutons, and Parmesan cheese.', NOW()),
// ('Chocolate Cake', 'Flour, sugar, cocoa powder, eggs, milk, butter, baking powder, salt', '1. Mix dry ingredients. 2. Add wet ingredients and mix. 3. Bake in a preheated oven at 350°F for 30 minutes.', NOW()),
// ('Grilled Cheese Sandwich', 'Bread, cheese, butter', '1. Butter the bread. 2. Place cheese between slices. 3. Grill until golden brown.', NOW()),
// ('Fruit Smoothie', 'Banana, strawberries, yogurt, milk, honey', '1. Blend all ingredients until smooth. 2. Serve chilled.', NOW());
