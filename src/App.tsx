import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1 className="underline text-3xl font-bold mb-8 w-fit mx-auto">New React Query + Redux project</h1> 
        <hr />
         <Counter />
        <hr />
          <Todo />
    </div>
  );
}

export default App;
