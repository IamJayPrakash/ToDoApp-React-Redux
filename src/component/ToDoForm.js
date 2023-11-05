import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action/todoaction';
import '../component/todo.css'

const ToDoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <div className='card d-flex bg-secondary p-3 m-3 d-grid mx-auto gap-3 mx-auto justify-content-flex' >
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a new Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='form-control p-3'
                />
                <div className='text-center'> <button type="submit" className='btn btn-info fa p-3 m-3 text-center '>Add Task</button></div>
            </form>
        </div>
    );
};

export default connect(null, { addTodo })(ToDoForm);