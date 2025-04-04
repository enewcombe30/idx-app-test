import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import { increment, decrement, reset } from "../state/counter";


export default function Counter(){
    const count = useSelector((state: RootState) => state.counter);
    const counterDispatch = useDispatch<AppDispatch>()
    return (
    <>
        <div className='w-fit mx-auto text-4xl font-bold mt-4'>{count}</div>
        <div className='flex space-x-4 w-fit mx-auto mb-6'> 
            <button className="w-fit h-fit p-2 border-grey-300 border-2 cursor-pointer" onClick={() => counterDispatch(increment())}>Increment</button>
            <button className="w-fit h-fit p-2 border-grey-300 border-2 cursor-pointer" onClick={() => counterDispatch(decrement())}>Decrement</button>
            <button className="w-fit h-fit p-2 border-grey-300 border-2 cursor-pointer" onClick={() => counterDispatch(reset())}>Reset</button>
        </div>
    </>
    )
}

