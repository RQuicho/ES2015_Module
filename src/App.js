import {Choice, Remove} from './helpers';
import './App.css';


const App = () => {
  return (
    <div>
      <h1>Fruit App</h1>
      <Choice items={['eggs', 'milk', 'ceral', 'chicken', 'spinach']} />
      <Remove items={['paper', 'tissues', 'toothpaste', 'floss']} item='toothpaste' />
    </div>
  )
}

export default App;
