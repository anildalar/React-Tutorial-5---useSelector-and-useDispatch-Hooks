import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { changeToAbhishek, changeToKiran, changeToRitik } from './redux/actionCreators/actionCreators';
import AnotherComponent from './AnotherComponent';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {props.state.reducer1.name}
        {console.log('Here it is ',props)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={props.changeName1}>Change Name1</button>
        <button onClick={props.changeName2}>Change Name2</button>
        <button onClick={props.changeName3}>Change Name3</button>
      </header>

      <AnotherComponent />
    </div>
  );
}

let mapStateToProps = (store) =>{
  return {
    state:store
  };
}

let mapDispatchToProps = (dispatch) =>{
  return {
    changeName1:()=>{ dispatch(changeToRitik()) },
    changeName2:()=>{ dispatch(changeToAbhishek())},
    changeName3:()=>{ dispatch(changeToKiran()) }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
