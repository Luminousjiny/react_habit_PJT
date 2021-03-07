import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    
    handleIncreasement = (h) => {
        this.props.onIncrement(h);
    };
    handleDecreasement = (h) => {
        this.props.onDecrement(h);
    };
    handleDelete = (h) => {
        this.props.onDelete(h);
    }; 
    handleAdd = name => {
        this.props.onAdd(name);
    }
    render() {
        return <div className = "habits"> 
            <HabitAddForm onAdd = {this.handleAdd} />
            <ul>
                {this.props.habits.map( h => (
                    <Habit 
                        key={h.id} 
                        habit={h} 
                        // count = {h.count} 
                        // ↑ PureComponent로 하면 같은 변수는 render 함수가 호출되지 않으므로 따로 인자 전달
                        onIncrement = {this.handleIncreasement} 
                        onDecrement = {this.handleDecreasement}
                        onDelete = {this.handleDelete}
                        /> // props 전달 : habit 이라는 prop 이름에 각각의 h를 전달 
                ))}
            </ul>
            <button className = "habits-reset" onClick = {this.props.onReset}>Reset All</button>
        </div>;
    }
}

export default Habits;