import React from 'react';
import { Text, View, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { Todo } from '../../domain/models/Todo';
import { toggleTodo } from '../../application/usecases/toggleTodo';
import { addTodo } from '../../application/usecases/addTodo';
import { TodoItem } from '../components/TdoItem';
import { loadTodos } from '../../application/usecases/loadTodos';
import { removeTodo } from '../../application/usecases/removeTodo';

const HomeScreen = () => {
    const [todos, setTodos] = React.useState<Todo[]>([])
    const [detail, setDetail] = React.useState<string>('')
    const [title, setTitle] = React.useState<string>('')

    const load = async () => {
        setTodos(await loadTodos());
    }

    React.useEffect(() => {
        load();
    }, [])

    const onAdd = async () => {
        if (!detail || !title) return;
        const updated = await addTodo(title, detail);
        setTodos(updated);
    }

    const onToggle = async (id: string) => {
        const updated = await toggleTodo(id);
        setTodos(updated)
    }

    const onDelete = async (id: string) => {
        const updated = await removeTodo(id);
        setTodos(updated)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>To-Do List</Text>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TodoItem item={item} onToggle={() => onToggle} onDelete={() => onDelete} />
                )}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add new Title..."
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Add new detail..."
                    value={detail}
                    onChangeText={setDetail}
                />
            </View>
            <Button title="Add" onPress={onAdd} />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, },
    header: { fontSize: 24, fontWeight: 'bold' },
    inputContainer: { flexDirection: 'row', alignItems: 'center' },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 8,
        marginRight: 8,
    }
});