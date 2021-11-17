import React, {useState, useEffect, useRef} from 'react';

//fungsi untuk menampilkan list data yang telah di masukan
function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };
  
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() *10000),
            text:input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ?(
                <>
                <input
                 placeholder='Update your data'
                 value={input}
                 onChange={handleChange}
                 name='text'
                 ref={inputRef}
                 className='todo-input edit'
               />
               <buton onClick={handleSubmit} className='todo-button edit'>
                   Update
                </buton>
                </>
            ):(
                <>
                <input
            placeholder='Add todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
          </>
            )}
        </form>
    );
}

export default TodoForm;
