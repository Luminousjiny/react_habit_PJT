import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    const formRef = React.createRef(); 
    const inputRef = React.createRef(); // 멤버변수 정의 

    const onSubmit = event => {
        event.preventDefault(); //새로고침 방지
        const name = inputRef.current.value;
        name && props.onAdd(name); // 이름 전달 
        formRef.current.reset(); 
    };
    return (
        <form ref={formRef} className = "add-form" onSubmit = {onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit"></input> 
            <button className = "add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;