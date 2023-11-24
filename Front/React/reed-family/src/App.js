import logo from './logo.svg';
import './App.css';

const boxList = [
  {id: 1, name: "Pictures"}, // TODO: add picture list to object to display
  {id: 2, name: "Recipes"}, // TODO: add recipe list to object to display
];

function App() {
  return (
    <div className="App">
      <h1>Hello Reed Family!</h1>
      <div className="HomeBoxList">
        {boxList.map(box => (
          <HomeBox key={box.id} box={box} />
        ))}
      </div>
    </div>
  );
}

function HomeBox({box}) {
  return (
    <div className="HomeBox">
      <h2>{box.name}</h2>
    </div>
  );
}

export default App;
