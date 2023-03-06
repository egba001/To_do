import { useState } from 'react';
import './index.css';


function App() {

  
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
      isEditing: false
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
      isEditing: false
    },
  ]);

  const [todoInput, setTodoInput] = useState('');
  const [idForTodo, setIdForTodo] = useState(4);

  function addTodo(e) {
    e.preventDefault()

    if (todoInput.trim().length === 0){
      return;
    }
    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false
      }
    ])
  
    setTodoInput('');
    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  }

  function deleteTodo(id) {
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  return (
      <div className="bg-white w-4/5 md:w-2/5 m-auto shadow-md rounded-md p-6 top-.5 translate-y-1/2">
        
          <div>
            <h2 className='font-bold mb-3'>To Do App</h2>
            <form action="#" onSubmit={addTodo}>
              <input className='border-b-stone-400 border-b-2 bg-gray-200 w-full p-2 rounded-t-md mb-3 focus:outline-none' type="text" placeholder="What do you need to do?" value={todoInput} onChange={handleInput} />
            </form>
          </div>
          <div>
            <ul>
                {todos.map((todo) => (
                    <li className='font-light text-sm flex items-center justify-between p-2 bg-slate-50  mb-2 rounded-md' key={todo.id}>
                      <p>{todo.title}</p>

                      <button className='mr-2 rounded-sm bg-slate-200' onClick={deleteTodo(todo.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='h-4 w-4 '><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                    </button>
                    
                    </li>    
                ))}
            </ul>
            
          </div>
      </div>
  );
}

export default App;
