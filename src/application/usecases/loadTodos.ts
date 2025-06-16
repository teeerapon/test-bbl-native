import { Todo } from "../../domain/models/Todo";
import { TodoStorage } from "../../infrastucture/TodoStorage";

export const loadTodos = async () => {
    return await TodoStorage.load();
}