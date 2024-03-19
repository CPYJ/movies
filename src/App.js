import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"; // 컴포넌트 모음
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";


function App() { // url -> component 이동
    return <Router>
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/movie/:id`}>
                <Detail/>
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/`}>
                <Home />
            </Route>
        </Switch>
    </Router>;
}

export default App;