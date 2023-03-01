import { useState } from 'react';
import './index.css';

function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
    },
  ]);

  return (
    <div className="bg-white w-4/5 md:w-2/5 m-auto shadow-md rounded-md p-6 top-.5 translate-y-1/2">
      <div>
        <h2 className='font-bold mb-3 '>To Do App</h2>
        <form action="#">
          <input className='border-b-stone-400 border-b-2 bg-gray-200 w-full p-2 rounded-t-md mb-3' type="text" placeholder="What do you need to do?" />
        </form>
      </div>
      <div>
        <ul>
            {todos.map((todo) => (
            <li className='rounded-md p-2 font-light text-sm bg-slate-50  mb-2' key={todo.id}>{todo.title}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
