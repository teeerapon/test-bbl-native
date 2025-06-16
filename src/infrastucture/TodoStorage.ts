import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "../domain/models/Todo";

const STORAGE_KEY = 'todos';

export const TodoStorage = {
    async load(): Promise<Todo[]> {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        return json ? JSON.parse(json) : [];
    },
    async save(todos: Todo[]){
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
}