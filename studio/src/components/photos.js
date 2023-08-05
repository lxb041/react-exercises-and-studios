import React from 'react';
import styles from './Description.module.css';

function RecipePhoto() {
  return (
    <img
      src="https://www.girlgonegourmet.com/wp-content/uploads/2020/02/Pasta-with-Olive-Oil-and-Garlic_Collage.jpg"
      alt="Recipe"
      className={styles.imageUpdates}
    />
  );
}

export default RecipePhoto;