import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue(prev => prev + 1);

  const[keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  }

  //console.log("I run all the time");
  useEffect(() => {
    console.log("I run only ONCE");
  }, []); // []면 딱 한번만 실행됨

  useEffect(() => {
    console.log("I run when COUNTER changes.");
  }, [counter]);

  useEffect(() => { // 무명함수 대신 함수 이름이 올 수도 있음
    console.log("I run when KEYWORD changes");
  },[keyword]); // [sth] = sth이 변할 때만 실행.

  useEffect(() => {
    console.log("I run when COUNTER && KEYWORD changes.");
  }, [counter, keyword]); // 배열로 여러개 설정 가능

  return (
    <div>   
      <Button text={"Continue"}/>
      <button onClick = {onClick}>Click me</button>

      <h1 className={styles.title}>{counter}</h1> 
      <input onChange={onChange} value={keyword} type="text" placeholder="Search here..."/>
    </div>
  );
}

export default App;
