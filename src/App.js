import { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState('hidden')
  const [checkNombre, setCheck] = useState('hidden')

  return (
    <div className="App">
      <Input
        name = { (e) => {
          setNombre(e.target.value);
          e.target.value === '' ? setCheck('') : setCheck('hidden')
          /* if(nombre === ''){
            setCheck('')
          }else{
            setCheck('hidden')
          } */
        }
      }
        pass = {(e) => {
          setPassword(e.target.value);
          if(e.target.value=='252525'){
            setVisible('')
          }else{
            setVisible('hidden')
          }
        }
      }
        error = {(e) => {
          e.preventDefault();
          if(nombre === ''){
            setError(true)
            setCheck('')
          }else{
            setError(false)
            setCheck('hidden')
          }
        }
      }
        oculto = { visible }
        alertaNombre = { checkNombre }
      />
      
    </div>
  );
}

export default App;
