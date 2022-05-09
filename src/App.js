import {useState} from 'react'
import { FiSearch } from 'react-icons/fi'
import './style.css'
import API from './services/api'

function App() {

const [input,setInput] = useState('')
const [cep ,setCep] = useState({})
const handleSearch = async ()=>{

  if(input === ""){
    alert('preencha o campo')
    return
  }
  try{
    const response = await API.get(`${input}/json`)
    setCep(response.data)
    setInput("")

  }catch{
    alert('Ocorreu algum Error!!')
    setInput("")
  }
}
  return (
    <div className="container">

     <h1 className="title">Buscador CEP</h1>
     <div className="containerInput">
       <input type="text"
        placeholder="Digite seu cep..."
         value={input}
         onChange={(e) => setInput(e.target.value)}/>

       <button className="btnSearch" onClick={handleSearch}>
      <FiSearch size={22} color="black"/>
       </button>
     </div>

    {Object.keys(cep).length > 0 && (
    <main className="main">
    <span>CEP: {cep.cep}</span>
    <span>Lougradouro: {cep.logradouro}</span>
    <span>Bairro: {cep.bairro}</span>
    <span>Localidade: {cep.localidade}</span>
    <span>UF: {cep.uf}</span>
    </main>
    )}

    </div>
    
  );
}

export default App;
