import {Choice, Remove} from './helpers';
import fruits from './foods';
import './App.css';


const App = () => {
  return (
    <div>
      <h1>Fruit App</h1>
      <Choice items={fruits} />
      <Remove items={fruits} item= "🍋" />
    </div>
  )
  // const randomFruit = Choice(fruits);

  // return (
  //   <div>
  //     <h1>Fruit App</h1>
  //     <Choice items={fruits} />
  //     <Remove items={fruits} item={randomFruit} />
  //   </div>
  // )
}

export default App;
