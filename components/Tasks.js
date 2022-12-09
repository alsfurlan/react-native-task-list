import { useState } from "react";
import { View, StyleSheet } from "react-native";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Tasks = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (description) => {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      {
        id: Date.now(),
        description,
        done: false,
      },
    ]);
  };

  const finishTask = (id) => {
    setTaskList((currentTaskList) => {
      const index = currentTaskList.findIndex((task) => task.id === id);
      currentTaskList[index].done = !currentTaskList[index].done;
      return [...currentTaskList];
    });
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <TaskList taskList={taskList} onFinishTask={finishTask} />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
