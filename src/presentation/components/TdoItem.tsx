import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';
import { Todo } from '../../domain/models/Todo';

interface Props {
    item: Todo
    onToggle: () => void;
    onDelete: () => void;
}

export const TodoItem: React.FC<Props> = ({ item, onToggle, onDelete }) => {
    return (
        <TouchableOpacity onPress={(onToggle)} onLongPress={onDelete}>
            <View style={[styles.item]}>
                <Text style={styles.text}>
                    {item.completed? '✅': '❌'}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    text: {
        fontSize: 16
    },
    completed: {
        opacity: 0.5
    }
});