import './index.css';
import Header from './Header';
import Main from './Main';
import { useEffect, useReducer } from 'react';
function App() {
  const initalState={
    questions:[],

    status:'loading'
  }



  function reducer(state,action){
    switch(action.type){
      case"datarecived":
      return{
        ...state,
        questions:action.payload,
        status:"ready"
      }
      case"datafailed":
      return{
        ...state,
        status:"error"
      }
     default:
      throw new Error("ACTOION UNKOWN") 
    }
  }




 const [state,dispatch]=useReducer(reducer,initalState)


  useEffect(function (){
    fetch("http://localhost:8000/questions")
    .then((res)=>res.json())
    .then((data)=>dispatch({type:'datarecived',payload:data}))
    .catch((err)=>dispatch({type:'datafailed'}))
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
