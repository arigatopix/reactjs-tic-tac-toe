import { useState } from 'react';

const TodoList = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

const TodoApp = () => {
  const [text, setText] = useState('');

  const [state, setState] = useState({
    items: [],
    text: '',
  });

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (text.length === 0) {
      return;
    }

    const newItem = {
      text: text,
      id: Date.now(),
    };

    setState({
      items: state.items.concat(newItem),
      text: setText(''),
    });
  };

  return (
    <div>
      <h3>TODO</h3>
      <TodoList items={state.items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <input id="new-todo" onChange={handleChange} value={text} />
        <button>Add #{state.items.length + 1}</button>
      </form>
    </div>
  );
};

const App = () => {
  return <TodoApp />;
};

export default App;
