import "./styles.css";

function Button() {
  const onLearnMore = () => {
    alert("Woosh!");
  };

  return <button onClick={onLearnMore}>Learn More</button>;
}

export default Button;
