import React, {  useState } from "react";
import Font from 'react-font'

const Home = () => {

	const [tasks, setTask] = useState([])
	const [input, setInput] = useState("")

	const handleChange = (event) => {
		setInput(event.target.value)
	}

	const infoSubmited = (event) => {
		event.preventDefault()
		// FORMA 1: Agregarlo con la data del formulario
		const data = new FormData(event.target)
		setTask([...tasks, data.get("task")])	
		// FORMA 2: Agregarlo con el estado
		//setTask([...task,input])		
	}

	const removeTask = indexItem => {
		setTask(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	let allTasks = tasks.map((elements, index) => 
				<li key={index.toString()} className="list-group-item d-flex justify-content-between"> 
					{elements} 
					<button onClick={() => removeTask(index)}>
						Remove
					</button>
				</li>)

	return (
		<div className="text-center" style={{ marginTop: "1rem" }}>
			<Font family='Fredericka the Great'>
				<h3 style={{ color: "rgb(244, 209, 166)", fontSize: "5rem" }}>To do list</h3>
			</Font>
			<form onSubmit={infoSubmited}>
				<div className="form-group d-flex justify-content-center">	
					<Font family='Fredericka the Great'>				
						<input className="form-control" type="text" 
							name="task" style={{width: "50rem"}}
							id="task" placeholder="what do you want to do?"
							value={input} onChange={(handleChange)}/>
					</Font>
				</div>
				<div className="form-group" style={{ marginTop: "1rem" }}>					
					<Font family='Fredericka the Great'>
						<button type="submit" className="btn btn-light" 
						style={{background: "white"}} >Submit</button>
					</Font>
				</div>
			</form>
			<div className="d-flex justify-content-center" style={{ marginTop: "2rem" }}>
				<ul className="list-group list-group-flush" style={{width: "50rem"}}>
					{allTasks}						
				</ul>
			</div>
		</div>
	);
};

export default Home;
