function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'Learn react',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'Build todo app',
      isCompleted: false,
    }
  ])

  const addTodo = text => {
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    const newTodos = [...todos, { text: capitalizedText, isCompleted: false }];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) =>
          <Todo index={i} key={i} todo={todo} remove={removeTodo} />
        )}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
