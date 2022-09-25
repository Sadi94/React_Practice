import React from 'react';


export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;


    render(override) {
        return this.children({ addEmoji: this.addEmoji });

    }
}