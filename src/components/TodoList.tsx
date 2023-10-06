import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList = () => {
    const {page, error, loading, limit, todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page])

    if (loading) {
        return <h1>Is loading todos...</h1>
    }

    if (error) {
        return <h1>Error fetch todos: {error}</h1>
    }

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>#{todo.id}: {todo.title}</div>)}
            <div style={{display: 'flex'}}>
                {pages.map(pg => <div
                    key={pg}
                    style={{border: pg === page ? '2px solid green' : '1px solid lightgrey', padding: '5px'}}
                    onClick={() => setTodoPage(pg)}>
                    {pg}
                </div>)}
            </div>
        </div>
    );
};

export default TodoList;
