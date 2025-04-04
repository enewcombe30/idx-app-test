import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./state/store";
import { increment, decrement, reset } from "./state/counter";

function App() {
  const count = useSelector((state: RootState) => state.counter);
  const counterDispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1 className="underline text-3xl font-bold mb-8 w-fit mx-auto">New React Query + Redux project</h1>
      <div className='w-fit mx-auto text-4xl font-bold'>{count}</div>
      <div className='flex space-x-4 w-fit mx-auto'> 
        <button className="w-fit h-fit p-2 border-grey-300 border-2 cursor-pointer" onClick={() => counterDispatch(increment())}>Increment</button>
        <button className="w-fit h-fit p-2 border-grey-300 border-2 cursor-pointer" onClick={() => counterDispatch(decrement())}>Decrement</button>
        <button className="w-fit h-fit p-2 border-grey-300 border-2 cursor-pointer" onClick={() => counterDispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default App;
