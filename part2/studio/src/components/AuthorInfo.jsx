import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const recipeAuthorName = <div> {recipedata[0].author} </div>;
  const recipeAuthorImage = (
    <img
      className="authorImage"
      src={recipedata[0].authorImage}
      alt={recipedata[0].recipeAuthorName}
    />
  );

  let url = recipedata[0].website;
  const recipeWebsite = (
    <a href={url} target="_blank">
      {" "}
      {url}{" "}
    </a>
  );
  // target="_blank" opens in new browser tab

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthorName}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;
