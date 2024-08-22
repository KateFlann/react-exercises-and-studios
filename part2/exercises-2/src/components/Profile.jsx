import "./styles.css";
import ocean from "./oceans";
import Button from "./Button";

const listItem = ocean.map((ocean) => (
  <div
    key={ocean.id}
    className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}
  >
    <h1>{ocean.name}</h1>
    <h3>
      {" "}
      Fun Facts:
      <ol>
        <li>{ocean.fact1}</li>
        <li>{ocean.fact2}</li>
        <li>{ocean.fact3}</li>
      </ol>
    </h3>
    <img src={ocean.image} alt={ocean.name} className="img" />
    <Button />
  </div>
));

function Profile() {
  return <ul>{listItem}</ul>;
}
export default Profile;
