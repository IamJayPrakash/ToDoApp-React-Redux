import { ADD_TODO, REMOVE_TODO } from '../action/todoaction';

const initialState = {
    todos: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.text,
                    },
                ],
            };
        case REMOVE_TODO:
            return {
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };
        default:
            return state;
    }
}

export default rootReducer;