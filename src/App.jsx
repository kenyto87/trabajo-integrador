import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App = () => {
	const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
	const [tasks, setTasks] = useState(initialTasks);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const handleTaskComplete = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const handleDeleteTask = (taskId) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
	};

	const handleAddTask = (taskName) => {
		const newTask = { id: tasks.length + 1, name: taskName, completed: false };
		setTasks((prevTasks) => [...prevTasks, newTask]);
	};
	const handleModifyTask = (taskId, modifiedTaskName) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, name: modifiedTaskName } : task
			)
		);
	};

	return (
		<div className="container">
			<TaskForm onAddTask={handleAddTask} />
			<TaskList
				tasks={tasks}
				onTaskComplete={handleTaskComplete}
				onModifyTask={handleModifyTask}
				onDeleteTask={handleDeleteTask}
			/>
		</div>
	);
};

export default App;
