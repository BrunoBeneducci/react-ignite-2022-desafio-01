import { useState } from 'react';
import './style.css';

interface InputProps {
  placeholder: string;
  type?: string;
}

const Input = ({ placeholder, type }: InputProps) => {
    const [input, setInput] = useState('');

    return (
        <input type={type ? type : 'text'} value={input} onChange={e => setInput(e.target.value)} placeholder={placeholder} />
    )
}

export default Input;