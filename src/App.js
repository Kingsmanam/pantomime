import "./App.css";

function Item() {
  return <div className="divsub">{data1[0]}</div>;
}

const data1 = ["salam", "bye"];
function App() {
  return (
    <div className="div">
      <button
        onClick={() => {
          <Item />;
        }}
        className="div1"
      >
        <p className="p1">-1</p>
      </button>
      <button className="div1">
        <p className="p1">-2</p>
      </button>
      <button className="div1">
        <p className="p1">-2</p>
      </button>
      <button className="div1">
        <p className="p1">-2</p>
      </button>
      <button className="div1">
        <p className="p1">-2</p>
      </button>
      <button className="div1">
        <p className="p1">-2</p>
      </button>
    </div>
  );
}

export default App;
