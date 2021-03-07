import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state ={
    habits:[
        { id: 1, name : 'Reading', count : 0 },
        { id: 2, name : 'Running', count : 0 },
        { id: 3, name : 'Coding', count : 0 },
    ]
  }
  handleIncreasement = (h) => {
    // state를 직접 수정하는 것은 좋지 않음
    // h.count++; 
    // this.setState(this.state);

    // const habits2 = [...this.state.habits]; // state의 habits를 새로운 곳에 복사해 오는 것 -> spread Operator(...) 이용
    // const index = habits2.indexOf(h); // 인덱스를 찾아서
    // habits2[index].count++; // 그 인덱스에 맞는 count 수정
    
    const habits2 = this.state.habits.map(item => {
      if(item.id === h.id){ // 아이디가 동일하면 새로운 것을 returen
        return { ...h, count : h.count+1 } // 데이터 복사, 업데이트 내용 따로 작성
      } 
      return item; // 아이디가 다르면 업데이트 불 필요
    })
    this.setState({ habits : habits2 }); // key와 value 값의 변수가 같으면 하나로 써도됨
  };
  handleDecreasement = (h) => {
    // const habits2 = [...this.state.habits]; 
    // const index = habits2.indexOf(h); 
    // const count = habits2[index].count-1;
    // habits2[index].count = count < 0 ? 0 : count; // 0이하의 숫자 방지 조건 

    const habits2 = this.state.habits.map(item => {
      if(item.id === h.id){ // 아이디가 동일하면 새로운 것을 returen
        const count = h.count -1;
        return { ...h, count : count < 0 ? 0 : count } // 데이터 복사, 업데이트 내용 따로 작성
      } 
      return item; // 아이디가 다르면 업데이트 불 필요
    })
    this.setState({ habits : habits2 }); 
  };
  handleDelete = (h) => {
    const habits2 = this.state.habits.filter(item => item.id !== h.id); // id가 일치하지 않는 나머지로 배열 만들기
    this.setState({ habits : habits2 });
  }; 
  handleAdd = name => {
    const habits2 = [...this.state.habits, {id:Date.now(), name : name, count : 0}]; 
    this.setState({ habits : habits2 });
  };
  handleReset = () => {
    const habits2 = this.state.habits.map(h => {
      if(h.count !== 0 ){
        return { ...h, count : 0 };
      }
      return h;
    })
    this.setState({ habits : habits2 });
  };
  render() {
    return(
      <> 
        <Navbar totalCount = {this.state.habits.filter(item => item.count > 0).length}/>
        <Habits habits={this.state.habits}
                onIncrement = {this.handleIncreasement} 
                onDecrement = {this.handleDecreasement}
                onDelete = {this.handleDelete}
                onAdd = {this.handleAdd} 
                onReset  = {this.handleReset} /> 
      </>
    )
  }
}

export default App;
