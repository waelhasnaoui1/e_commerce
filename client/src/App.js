
import './App.css';
import FormSignup from './register/FormSignup';
import Form from './register/Form';
import FormSuccess from './register/FormSuccess';
import { Provider } from 'react-redux';
import {store} from './store'
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     
     <Form/>
    </div>
    </Provider>
  );
}

export default App;
