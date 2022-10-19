import { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  /* const [error, setError] = useState(false); */
  const [visible, setVisible] = useState('hidden')
  const [checkNombre, setCheck] = useState('hidden')

  return (
    <div className="App">
      <Input
        name = { (e) => {
          setNombre(e.target.value);
          e.target.value === '' ? setCheck('') : setCheck('hidden');
        }
      }
        pass = {(e) => {
          setPassword(e.target.value);
          e.target.value === '252525' ? setVisible('') : setVisible('hidden')
        }
      }
        error = {(e) => {
          e.preventDefault();
          nombre === '' ? setCheck('') : setCheck('hidden')
        }
      }
        oculto = { visible }
        alertaNombre = { checkNombre }
      />
      
    </div>
  );
}

export default App;
