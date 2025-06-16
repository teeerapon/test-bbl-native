import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Todo } from '../../domain/models/Todo';

interface Props {
  item: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoItem: React.FC<Props> = ({ item, onToggle, onDelete }) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={[styles.card, item.completed && styles.completedCard]}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.status}>{item.completed ? '✅' : '⬜️'}</Text>
        </View>
        <Text style={styles.detail}>{item.detail}</Text>

        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completedCard: {
    backgroundColor: '#e0ffe0',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  status: {
    fontSize: 20,
  },
  deleteButton: {
    marginTop: 6,
    alignSelf: 'flex-end',
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
