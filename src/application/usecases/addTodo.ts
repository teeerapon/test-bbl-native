import { Todo } from '../../domain/models/Todo'
import { TodoStorage } from '../../infrastucture/TodoStorage'

export const addTodo = async (title: string, detail: string) => {
    const todos = await TodoStorage.load();
    const newTodo: Todo = { id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`, title, detail, completed: false };
    const updated = [...todos, newTodo];
    await TodoStorage.save(updated)
    return updated;
}