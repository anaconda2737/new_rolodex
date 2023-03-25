import React, {Component} from 'react'
import CardList from './Component/Card-list/CardList';
import SearchBox from './Component/Card-list/SearchBox';
import './App.css'



class App extends Component{
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchField:''
      
    };
  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(users=> this.setState({monsters: users}))
  }
  render(){
    const{monsters,searchField} = this.state;
    const filterMonster = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return(
      <div className='App'>
        <h1>Monster Rolodex</h1>
         <SearchBox placeholder='search monster' handleChange={e=> this.setState({searchField: e.target.value})}/>
       <CardList monsters={filterMonster}>
       </CardList>
      
       
      </div>
    )
  }
}

export default App