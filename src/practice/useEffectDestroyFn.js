import { useEffect, useState } from "react";

function Hello() {

    // function HiFn() {
    //     console.log("Created :)");
    //     return ByeFn; //destroy 될때 할 행동을 return 해줌
    // }
    // function ByeFn() {
    //     console.log("Bye :(");
    // }

    useEffect(() => {
        console.log("HI");
        return () => console.log("BYE");
    },[]); //Fn이 return destroy fn 해줘야 컴포넌트가 없어질 때 뭔가를 실행 할 수 있음

    return <h1>Hello</h1>
}

function App() {
    const[showing, setShowing] = useState(false);
    const onClick = () => setShowing(prev => !prev);

    // return에 js코드를 쓸 때는 {}
    return <div>
        {showing? <Hello/> : null} 
        <button onClick={onClick}>{showing? "Hide" : "SHOW" }</button>
    </div>
}

export default App;