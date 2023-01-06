import Hello from "./component/Hello/Hello";
import Timer from "./component/Timer/Timer";

function App() {
  const user = {
    name: "민지",
    age: 30,
  };
  return (
    <div className="App">
      <Hello user={user} />
      <Timer />
    </div>
  );
}

export default App;
