import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
//import User from './components/User';
import Counter from './components/Counter';
import './App.css';

function App() {


  return (
    <div className="App">

      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <User name="Hello" /> */}
      {/* <User name={(isLoggedIn) => 'Hello'} /> */}
      {/* <User name={(isLoggedIn) => (isLoggedIn ? 'Hello' : 'Guest')} /> */}
      <Counter
        render={(Counter, incrementCount) => (
          <ClickCounter Counter={Counter} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(Counter, incrementCount) => (
          <HoverCounter Counter={Counter} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
