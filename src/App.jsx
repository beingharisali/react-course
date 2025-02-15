import random from "./assets/coding-2.jpg";
function App() {
  let myname = "Admin";

  return (
    <div>
      <h1>{myname}</h1>
      <h1
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Hello App Component
      </h1>
      <h1></h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus
        quod rem adipisci corrupti placeat qui, eligendi non quae similique
        laborum praesentium totam aperiam ut, soluta inventore dolorem mollitia
        sequi.
      </p>
      <p>This is paragraph</p>
      <img src={random} alt="coding" />
    </div>
  );
}

export default App;
