import './index.css';
import Header from './Header';
import Start from './Start'
import Main from './Main';
import Loader from './Loader'
import Error from './Error'
import { useEffect, useReducer } from 'react';
import Questions from './Questions';
function App() {
  const initalState={
    questions:[],
    index:0,
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

      case"start":return{...state,
        status:"active"
      }
     default:
      throw new Error("ACTOION UNKOWN") 
    }
  }




 const [{status,questions,index},dispatch]=useReducer(reducer,initalState)

 const numqustions=questions.length;
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
        {status ==="loading" && <Loader />}
        {status ==="error" && <Error />}
        {status ==="ready" && <Start numqustions={numqustions} dispatch={dispatch}/>}
        {status ==="active" && <Questions  question={questions[index]}/>} 

      </Main>
    </div>
  );
}

export default App;
