
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  // Store tasks
  const [tasks, setTasks] = useState([]);

  // Store input text
  const [taskInput, setTaskInput] = useState('');

  // Track the task being edited
  const [editingId, setEditingId] = useState(null);

  // Track loading state
  const [loading, setLoading] = useState(true);

  // READ: Load saved tasks when app starts
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('myTasks');

        if (savedTasks !== null) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.error('Error loading tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  // Save tasks to AsyncStorage
  const saveTasks = async (updatedTasks) => {
    try {
      await AsyncStorage.setItem(
        'myTasks',
        JSON.stringify(updatedTasks)
      );

      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error saving tasks:', error);
      Alert.alert('Error', 'Unable to save tasks.');
    }
  };

  // CREATE: Add a new task
  const addTask = async () => {
    if (taskInput.trim() === '') {
      Alert.alert('Reminder', 'Please enter a task.');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: taskInput.trim(),
    };

    await saveTasks([...tasks, newTask]);
    setTaskInput('');
  };

  // UPDATE: Edit an existing task
  const updateTask = async () => {
    if (taskInput.trim() === '') {
      Alert.alert('Reminder', 'Please enter a task.');
      return;
    }

    const updatedTasks = tasks.map((task) =>
      task.id === editingId
        ? { ...task, title: taskInput.trim() }
        : task
    );

    await saveTasks(updatedTasks);

    setTaskInput('');
    setEditingId(null);
  };

  // DELETE: Remove a task
  const deleteTask = async (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    await saveTasks(updatedTasks);
  };

  // Select a task for editing
  const editTask = (task) => {
    setTaskInput(task.title);
    setEditingId(task.id);
  };

  // Display loading message
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading tasks...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My To-Do List</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a new task..."
        value={taskInput}
        onChangeText={setTaskInput}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={editingId ? updateTask : addTask}
      >
        <Text style={styles.buttonText}>
          {editingId ? 'Update Task' : 'Add Task'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.subheading}>
        My Tasks ({tasks.length})
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No tasks yet. Add your first task!
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskText}>
              {item.title}
            </Text>

            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => editTask(item)}
                style={styles.editButton}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => deleteTask(item.id)}
                style={styles.deleteButton}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12,
  },
  taskCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  taskText: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  editButton: {
    backgroundColor: '#16a34a',
    padding: 9,
    borderRadius: 6,
  },
  deleteButton: {
    backgroundColor: '#dc2626',
    padding: 9,
    borderRadius: 6,
  },
  emptyText: {
    color: '#64748b',
    textAlign: 'center',
    marginTop: 20,
  },
});

