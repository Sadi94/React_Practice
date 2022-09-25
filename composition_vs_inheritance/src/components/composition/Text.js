import { text } from "express";

export default function Text({ addEmoji }) {
    // eslint-disable-next-line no-unused-vars
    const Text = 'Javascrip';
    return <div>{addEmoji ? (text, '') : text} </div>;

}