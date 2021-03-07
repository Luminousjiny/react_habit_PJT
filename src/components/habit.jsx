import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    // state = { // props에서 받는 데이터만 사용할 때에는 필요 없음 
    //     count: 0,
    // };
    handleIncreasement = () => {
        // state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트 
        // 부분적인 state 업데이트는 불가 -> this.setState를 이용하여 전체적으로 해주어야 함
        // this.setState({ count : this.state.count + 1 }); 
        this.props.onIncrement(this.props.habit);
    };
    handleDecreasement = () => {
        // const count = this.state.count -1;
        // this.setState({ count : count < 0 ? 0 : count });
        // 0이하의 숫자는 그냥  0으로 유지되도록 조건 주기 
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }; 
    render() {
        //console.log(this.props.habit);
        const {name, count} = this.props.habit;
        return (
            <li className= "habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className = "habit-button habit-increase" 
                        onClick={this.handleIncreasement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className = "habit-button habit-decrease"
                        onClick={this.handleDecreasement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className = "habit-button habit-delete"
                        onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;