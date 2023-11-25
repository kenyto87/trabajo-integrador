import { useState } from "react";
import PropTypes from "prop-types";

const TaskItem = ({ task, onTaskComplete, onDeleteTask, onModifyTask }) => {
	const [completed, setCompleted] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [modifiedTaskName, setModifiedTaskName] = useState(task.name);

	const handleComplete = () => {
		setCompleted(!completed);
		onTaskComplete(task.id);
	};

	const handleDelete = () => {
		onDeleteTask(task.id);
	};
	const handleModify = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		setIsEditing(false);
		onModifyTask(task.id, modifiedTaskName);
	};
	const handleCancel = () => {
		setIsEditing(false);
		setModifiedTaskName(task.name);
	};

	const handleInputChange = (e) => {
		setModifiedTaskName(e.target.value);
	};

	return (
		<li className={completed ? "task-item completed" : "task-item "}>
			{isEditing ? (
				<>
					<input
						type="text"
						value={modifiedTaskName}
						onChange={handleInputChange}
					/>
					<button onClick={handleSave}>Guardar</button>
					<button onClick={handleCancel}>Cancelar</button>
				</>
			) : (
				<>
					{task.name}
					<div>
						<button onClick={handleComplete}>
							{completed ? "Desmarcar" : "Completar"}
						</button>
						<button onClick={handleModify}>Modificar</button>
						<button onClick={handleDelete}>Eliminar</button>
					</div>
				</>
			)}
		</li>
	);
};
TaskItem.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}).isRequired,
	onTaskComplete: PropTypes.func.isRequired,
	onDeleteTask: PropTypes.func.isRequired,
	onModifyTask: PropTypes.func.isRequired,
};
export default TaskItem;
