import { Todo } from "../../domain/models/Todo";
import { TodoStorage } from "../../infrastucture/TodoStorage";

export const toggleTodo = async (id:string) => {
    const todos = await TodoStorage.load();
    const updated = todos.map(todos =>
        todos.id === id ? {...todos, completed: !todos.completed} : todos
    );
    await TodoStorage.save(updated);
    return updated;
}