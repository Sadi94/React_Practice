//import Text from './inheritance / Text';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/Text';
//import Text from './components/inheritance/Text';

function App() {
  //return <Emoji> <Text /> </Emoji>; //retun components
  return <Emoji>
    {
      ({ addEmoji }) => <Text addEmoji={addEmoji} /> //anonmous function return 
    }
  </Emoji>;
}

export default App;

