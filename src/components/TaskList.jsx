import TaskItem from "./TaskItem";
import PropTypes from "prop-types";
const TaskList = ({ tasks, onTaskComplete, onDeleteTask, onModifyTask }) => {
	const handleComplete = (taskId) => {
		onTaskComplete(taskId);
	};

	const handleDelete = (taskId) => {
		onDeleteTask(taskId);
	};
	const handleModify = (taskId, modifiedTaskName) => {
		onModifyTask(taskId, modifiedTaskName);
	};

	return (
		<div className="task-list-container">
			<h2 className="title">Lista de Tareas</h2>
			<ul>
				{tasks.map((task) => (
					<TaskItem
						key={task.id}
						task={task}
						onTaskComplete={handleComplete}
						onModifyTask={handleModify}
						onDeleteTask={handleDelete}
					/>
				))}
			</ul>
		</div>
	);
};
TaskList.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		})
	).isRequired,
	onTaskComplete: PropTypes.func.isRequired,
	onDeleteTask: PropTypes.func.isRequired,
	onModifyTask: PropTypes.func.isRequired,
};
export default TaskList;
