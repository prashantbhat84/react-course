import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";


class App extends Component {
	state={
		persons:[
			{name:'Prashant',age:34},
			{name:'gauri',age:28},
			{name:'Aadritaa',age:3}
		],
		otherstate:'some other value',
		showPersons:false
	
	}
	switchNameHandler=(newName)=>{
		//console.log('Button Pressed')
		//this.state.persons[0].name='Rohidas'
		this.setState({persons:[
			{name:'Rohidas',age:34},
			{name:newName,age:29},
			{name:'Aadritaa',age:3}
		]});

	}
	nameChangeHandler=(event)=>{
		this.setState({persons:[
			{name:'Prashant',age:34},
			{name:event.target.value,age:28},
			{name:'Aadritaa',age:3}
		]});
	}
	togglePersonHandler=()=>{
				const doesShow= this.state.showPersons;
				this.setState({showPersons:!doesShow})
	}
  render() {
			const style={
				backgroundColor:'White',
				font:'inherit',
				border:" 1px solid blue",
				padding:'8px',
				cursor:'pointer'
			}
			let persons=null;
			if(this.state.showPersons){
    persons=(<div>
					<Person  
					name= {this.state.persons[0].name} age={this.state.persons[0].age}/>
					<Person  click={this.switchNameHandler.bind(this,'kombu')}  changed={this.nameChangeHandler}
					name= {this.state.persons[1].name} age={this.state.persons[1].age}/>
					<Person  
					name= {this.state.persons[2].name} age={this.state.persons[2].age}/>
					
					</div>)
			}
    return (
      <div className="App">
        <h1> Hi, I am a react app</h1>
							<button  style={style} onClick={this.switchNameHandler.bind(this,'kuski')}>Switch Name</button>  
							<button onClick={()=>this.switchNameHandler('phanti')}>Switch Name1</button>  
							<button  style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>  
					{persons}
 {/*  The above are two alternative way  of passing parameters on button click use bind because methd 2 is a bit ineffecient  */}
								 
								
      </div>
    );
  }
}

export default App;
