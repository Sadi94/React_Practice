import * as ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
function tick() {
  const element = (
    <div align="center">
      {/* <h1>Hello, world!</h1> */}
      <h2> {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

export default tick;
