import logo from './logo.svg';
import './App.css';
import ExercisesReactExerciseComponent from './components/exercises-react-exercise';
import Exercise from './components/exercise/exercise.component';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/*
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
    </a>*/}

                <div className="Exercise">
                    <ExercisesReactExerciseComponent />
                </div>

                <div className="twinkling"></div>
            </header>
        </div>
    );
}

export default App;
