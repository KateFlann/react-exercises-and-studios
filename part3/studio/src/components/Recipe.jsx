import { useState } from "react";

const RecipeAuthor = () => {
  let authorLink = "https://www.imdb.com/name/nm3102998/";
  let authorPhoto =
    "https://pyxis.nymag.com/v1/imgs/756/f8e/a0bd70a8989c097abc10d8332ed650c0ad-bo-burnham-inside.rsquare.w700.jpg";
  let authorName = "Bo Burnham";

  return (
    <div>
      <img
        src={authorPhoto}
        alt=""
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = [
    "right bread butt",
    "left bread butt",
    "a paper plate",
    "a plastic fork",
    "your hopes and dreams",
  ];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>The Perfect Peanut Butter Sandwich</h1>
        <p>The results of a mad man spiraling into depression</p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return (
    <img
      src="https://i.ytimg.com/vi/buZMz0c-vm0/maxresdefault.jpg"
      alt="The perfect peanut butter sandwich"
      className="imageUpdates"
    />
  );
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
