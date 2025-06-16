import { Todo } from "../../domain/models/Todo";
import { TodoStorage } from "../../infrastucture/TodoStorage";

export const removeTodo = async (id:string) => {
    const todos = await TodoStorage.load();
    const updated = todos.filter(todo => todo.id !== id);
    await TodoStorage.save(updated);
    return updated;
}