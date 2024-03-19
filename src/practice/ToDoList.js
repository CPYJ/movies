import { useState } from "react";

function App() {
    const[todo, setTodo] = useState("");
    const[todos, setTodos] = useState([]);

    const onChange = (event) => setTodo(event.target.value);
    const onSubmit=(event)=> { // button을 누르면
        event.preventDefault(); //submit을 방지
        if(todo ==="") {
            return; // 함수 작동 x
        }
        setTodo("");
        setTodos(currentArray => [todo, ...currentArray]); // ...arr = arr의 요소를 더해줌
    }
    console.log(todos);

    return <div>
        <h1>My ToDos ({todos.length})</h1>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={todo} placeholder="Write your to do..."/>

            <button>Add To Do</button>

            <hr/>
            
            <ul>
                {todos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>

        </form>
    </div>
}
export default App; // 메소드 이름 적기