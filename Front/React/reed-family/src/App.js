import './App.css';

const elementList = [
  {id: 1, name: "Pictures", link: "#"}, // TODO: add picture list to object to display, and add link to picture landing page
  {id: 2, name: "Recipes", link: "#"}, // TODO: add recipe list to object to display, and add link to recipe landing page
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
    <a href={element.link}>
      <div className="HomeElement">
        <h2>{element.name}</h2>
      </div>
    </a>
  );
}

export default App;
