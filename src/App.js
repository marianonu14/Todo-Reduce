import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type){
    case 'increment':
      return { ...state, count: state.count + 1}
    case 'decrement':
      return { ...state, count: state.count - 1}
    case 'reset':
      return { ...state, count: 0}
    case 'setValue':
      return { ...state, value: action.payload}
    default:
      throw new Error()
  }
}

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  SET_VALUE: 'setValue'
}

const App = () => {
  const [state, dispatch] = useReducer( reducer, { count: 0, value:'' } );

  return (
    <main>
      <h1>TodoList App</h1>
      <div className="main-container">
        <p>{ state.count }</p>
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
      </div>
      <input
        type='text'
        value={state.value}
        onChange={(e) => dispatch( { type: ACTION.SET_VALUE, payload: e.target.value } )} />
    </main>
  );
}

export default App;
