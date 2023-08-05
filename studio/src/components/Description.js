import React from 'react'
import styles from './Description.module.css'


function RecipeAuthor() {
    const authorLink = "https://www.girlgonegourmet.com/dinner-for-one-easy-pasta-with-olive-oil-garlic/";
    const authorPhoto = "https://www.girlgonegourmet.com/wp-content/uploads/2019/08/AprilAnderson-1-Photo-Web-square-300x300.jpg";
    const authorName = "Jane Doe";
  
    return (
      <div className={styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt="Picture of Jane Doe" className={styles.imageUpdates} />
        <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Blog name</a>
        </div>
      </div>
    );
  }

  class RecipeDescription extends React.Component {
    render() {
      return (
        <div>
          <div>
            <h1>Dinner for One</h1>
            <p>This easy pasta recipe is my go-to dinner when there’s no time to cook. In Italy, it’s known as pasta aglio e olio, which means pasta with olive oil and garlic. A few simple ingredients like spaghetti, olive oil, garlic, and Parmesan are all you need!</p>
          </div>
          <RecipeAuthor />
        </div>
      );
    }
  }

  export default RecipeDescription