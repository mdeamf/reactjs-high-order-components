import './App.css';
import { MessageComponent } from './components/MessageComponent';

const withHeader = (Component) => (props) =>
  (
    <div>
      <h1>Wrapping With Header!</h1>
      <Component {...props} />
    </div>
  );

const Message = () => (
  <div>
    <MessageComponent workHard={() => alert('Working Harder!')} />
  </div>
);

const MessageComponentWithHeader = withHeader(Message);

function App() {
  return (
    <div className="App">
      <Message />

      <div
        style={{
          width: '100%',
          height: '2px',
          backgroundColor: '#DDDDDD',
          margin: '32px',
        }}
      ></div>

      <MessageComponentWithHeader />
    </div>
  );
}

export default App;
