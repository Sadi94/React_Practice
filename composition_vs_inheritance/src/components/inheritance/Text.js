import Emoji from './Emoji';
// import Emoji from './inheritance/Emoji';

export default class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        const decoratedText = this.addEmoji('Javascript', '');
        return super.render(decoratedText);
    }
}