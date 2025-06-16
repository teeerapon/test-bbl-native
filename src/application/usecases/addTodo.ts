import { Todo } from '../../domain/models/Todo'
import { TodoStorage } from '../../infrastucture/TodoStorage'
import { v4 as uuidv4 } from 'uuid';

export const addTodo = async (title: string, detail: string) => {
    const todos = await TodoStorage.load();
    const newTodo: Todo = { id: uuidv4(), title, detail, completed: false };
    const updated = [...todos, newTodo];
    await TodoStorage.save(updated)
    return updated;
}