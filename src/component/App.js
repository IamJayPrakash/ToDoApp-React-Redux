import ToDoForm from './ToDoForm';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import ToDoList from './ToDoList';

function App() {
  return (
    <>
<h1 className='text-info text-center '>React-Redux-Todo app</h1>

      <Provider store={store}>
        <div className="container p-4 mt-3">
          <ToDoForm />
          <br />
          <ToDoList />
          <br></br>
        </div>
      </Provider>
    </>
  );
}

export default App;