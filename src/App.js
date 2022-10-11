import { useState } from "react"

function App() {
	const [calc, setCalc] = useState("")
	const [result, setResult] = useState("")

	const ops = ["/", "*", "+", "-", "."]

	const updateCalc = (value) => {
    setCalc(calc + value)
    console.log(value);
	}

	// this function creates digits from 1-9 we are just pushing new numbers into the array named digits. We could of course use regular buttons in html structure but function can to it instead.
	const createDigits = () => {
		const digits = []
		for (let i = 1; i < 10; i++) {
			digits.push(<button key={i}>{i}</button>)
		}
		return digits
	}
	// this is regular html structur of course created with react syntax
	return (
		<div className='App'>
			<div className='calculator'>
				<div className='display'>
					{result ? <span>(0)</span> : ""} {calc || "0"}
				</div>
				<div className='operators'>
					<button onClick={() => updateCalc("/")}>/</button>
					<button onClick={()=> updateCalc('*')} >*</button>
					<button onClick={()=> updateCalc('+')}>+</button>
					<button onClick={()=> updateCalc('-')}>-</button>

					<button>DEL</button>
				</div>
				<div className='digits'>
					{createDigits()}
					<button onClick={()=> updateCalc('0')}>0</button>
					<button onClick={()=> updateCalc('.')}>.</button>
					<button>=</button>
				</div>
			</div>
		</div>
	)
}

export default App
