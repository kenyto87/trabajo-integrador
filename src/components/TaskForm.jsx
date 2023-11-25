import { useState } from "react";
import PropTypes from "prop-types";
const TaskForm = ({ onAddTask }) => {
	const [taskName, setTaskName] = useState("");

	const handleInputChange = (e) => {
		setTaskName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (taskName.trim() !== "") {
			onAddTask(taskName);
			setTaskName("");
		}
	};

	return (
		<div className="task-form-container">
			<h2>Agregar Tarea</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={taskName}
					onChange={handleInputChange}
					placeholder="Ingresar una tarea"
				/>
				<button type="submit">Agregar</button>
			</form>
		</div>
	);
};
TaskForm.propTypes = {
	onAddTask: PropTypes.func.isRequired,
};
export default TaskForm;
