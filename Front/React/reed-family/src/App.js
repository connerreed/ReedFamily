import './App.css';

const pictureList = [
  {id: 1, src: "./imgs/Pictures/FamilyPhoto1.png"},
  {id: 2, src: "./imgs/Pictures/FamilyPhoto2.png"},
  {id: 3, src: "./imgs/Pictures/FamilyPhoto3.png"}
];

const recipeList = [
  {id: 1, src: "./imgs/Recipes/Recipe1.png"},
  {id: 2, src: "./imgs/Recipes/Recipe2.png"},
  {id: 3, src: "./imgs/Recipes/Recipe3.png"}
];

const elementList = [
  {id: 1, name: "Pictures", link: "#", list: pictureList}, // TODO: add picture list to object to display, and add link to picture landing page
  {id: 2, name: "Recipes", link: "#", list: recipeList}, // TODO: add recipe list to object to display, and add link to recipe landing page
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
        <ul>
          {element.list.map(picture => (
            <li key={picture.id}><img src={require(`${picture.src}`)} alt="Preview Photo" style={{ width: '100px', height: '100px' }} /></li>
          ))}
        </ul>
        <h2>{element.name}</h2>
      </div>
    </a>
  );
}

export default App;
