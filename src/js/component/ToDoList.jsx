import React, { useState } from "react";


const TodoList = () => {
	const [todoList, setTodoList] = useState([])
	const [newTask, setNewTask] = useState("")
	const handleDelete = (index) => {
		let aux = todoList
		aux.splice(index, 1)
		setTodoList([...aux])
	}
	const handleSubmit = e => {
		e.preventDefault();
		setTodoList([...todoList, { label: newTask, done: false }]);
		setNewTask("")
	}
	const handleChange = e => {
		setNewTask(e.target.value)
		if (e.key == "Enter") {
			handleSubmit()
		}
	}
	return (
		<div className="todo-list container-fluid mt-5 mb-5 text-center">

			<form className="todo-form mt-5" onSubmit={(e) => handleSubmit(e)}>
				<h1 className="list-title"> Your todo list <i className="fa-solid fa-arrows-turn-to-dots" style={{ color: "#e1e8f5" }}></i> </h1>
				<input className="text-input rounded" type="text" value={newTask} onChange={(e) => handleChange(e)} placeholder="What do you want to do?..." />
				<input className="button btn btn-secondary btn-sm rounded p-0.1 m-2" type="submit" value={"Add task"} />
			</form>

			{todoList.length > 0 ? (
				<div className="container-fluid">
					<div className="todo-items justify-content-around align-items-center bg-light shadow-sm bg-body-tertiary rounded m-auto” style={{ width: “30rem” }}">

						{todoList.map((task, index) => (
							<div className="icon-container" key={index}>

								<i className="task-check fa-regular fa-square-check" style={{ color: "#23C474" }}></i>
								<div className="task-label">
									{task.label}
								</div>
								<span onClick={(e) => handleDelete(index)}>
									<i className="task-erase fa-solid fa-delete-left" style={{ color: "#FF0000" }}></i>
								</span>

							</div>))
						}

					</div>

					<p className="counter"> {
						todoList.length === 0 ? null :
							todoList.length === 1 ? `${todoList.length} item` :
								`${todoList.length} items`
					}
					</p>


				</div>
			) : (
				<p className="intro">  add some tasks you wish to do
					<i className="fa-regular fa-pen-to-square fa-beat fa-xs ms-2"></i> </p>

			)
			}
		</div >
	);
};
export default TodoList;