import Counter from "./components/Counter";
import Rating from "./components/Rating";

function App() {
  const name = "Brad";
  return (
    <div>
      <h1>Hello {name}</h1>
      <Rating
        heading="How do you feel about react"
        color="blue"
        feedbackMessages={[
          "Hate it",
          "Dislike it ",
          "Meh",
          "Like it ",
          "Love it ",
        ]}
      />
      {/* <Counter />*/}
    </div>
  );
}
export default App;
