import React, { useState } from 'react'

interface Props {
    onAdd: (text: string) => void;
}

const TodoForm = ({onAdd}: Props) => {

    const [text , setText] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(text.trim()){
            onAdd(text);
            setText("");
        }
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input  value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
  )
}

export default TodoForm;