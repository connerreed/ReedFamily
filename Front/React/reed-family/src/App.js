import './App.css';

const elementList = [
  {id: 1, name: "Pictures"}, // TODO: add picture list to object to display
  {id: 2, name: "Recipes"}, // TODO: add recipe list to object to display
];

function App() {
  return (
    <div className="App">
      <h1>Hello Reed Family!</h1>
      <div className="HomeElementList">
        {elementList.map(element => (
          <HomeElement key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
}

function HomeElement({element}) {
  return (
    <div className="HomeElement">
      <h2>{element.name}</h2>
    </div>
  );
}

export default App;
