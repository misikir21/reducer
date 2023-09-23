import './index.css';
import Header from './Header';
import Main from './Main';
import { useEffect } from 'react';
function App() {
  useEffect(function (){
    fetch("http://localhost:8000/questions")
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log9("Error"))
  },[])
  return (
    <div className='app'>
      <Header />
      <Main>
        <p>15</p>
        <p>Qestions</p>

      </Main>
    </div>
  );
}

export default App;
