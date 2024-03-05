import './App.css';
import  {useState} from 'react'
import axios from "axios";

const App = () => {
  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false); 
  console.log(isFormValid)

  function validateForm() {
    // Add validation checks for each field
    if (name.trim() === '' || idade.trim() === '' || email.trim() === '') {
      setIsFormValid(false);
      alert("Responda o formulario primeiro")
      return false; // Prevent form submission
    }

    return true; // Form is valid, return true
  }


  function btnFunction(e) {
    e.preventDefault(); // Prevent default form submission behavior

    if (!validateForm()) return; 

    axios.post('http://localhost:8008/forms', {
      name,
      idade,
      email,

    })
      .then(response => {
        alert("Obrigada por responder nosso questionário :)")
        window.location.reload(true);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    
    <div className='App'>
       <form className="form" onSubmit={btnFunction}>
      <h1>Questionario</h1>
      <label className="siv">Qual é o seu nome?</label>
      <input className='input'
        type="text"
        placeholder="Nome"
        onChange={e => setName(e.target.value)}
      />
      <label className="siv">Informe sua Idade:</label>
      <input className='input'
        type="idade"
        placeholder="idade"
        onChange={e => setIdade(e.target.value)}
      />
      <label className="siv">Informe seu Email:</label>
      <input className='input'
        type="email"
        placeholder="E-mail"
        onChange={e => setEmail(e.target.value)}
      />
        <div className="container-Finalizar-form-btn">
          <button className="Finalizar-form-btn" type="submit">
            Finalizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;









