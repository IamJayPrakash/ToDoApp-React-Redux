import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../action/todoaction';


const ToDoList = ({ todos, removeTodo }) => {
    return (
        <>
            <ul>
                <div className='card bg-dark d-flex d-grid p-3 m-3'>
                    <h1 className='fa fa-regular text-center card-header bg-light'>Your Task</h1>

                    {todos.map((todo) => (

                        <li key={todo.id} className='text-info p-2 gap-5 m-2' style={{ fontFamily: 'cursive' }}>
                            {todo.text}{' '}
                            <button onClick={() => removeTodo(todo.id)} className='btn btn-outline-danger' style={{ marginLeft: '100px' }}><i className='fa fa-trash'></i></button>
                            <br />
                        </li>


                    ))
                    }
                </div>
            </ul>
            <p className='text-center text-light p-3 m-4'>Made with ❣ Jay Prakash </p>
        </>

    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

export default connect(mapStateToProps, { removeTodo })(ToDoList);