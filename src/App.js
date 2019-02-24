import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";
import Radium,{StyleRoot} from 'radium';


class App extends Component {
	state={
		persons:[
			{id:"qlsjf",name:'Prashant',age:34},
			{id:"wie",name:'gauri',age:28},
			{id:"qihhf",name:'Aadritaa',age:3}
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
	nameChangeHandler=(event,id)=>{
		
		const personIndex= this.state.persons.findIndex(p=>{
			return p.id =id;
		})
const person= {...this.state.persons[personIndex]};
		person.name= event.target.value;
		const persons= [...this.state.persons];
		persons[personIndex]=person;
		this.setState({persons:persons})
	}
	togglePersonHandler=()=>{
				const doesShow= this.state.showPersons;
				this.setState({showPersons:!doesShow})
	}
	deletePersonHandler=(personIndex)=>{
		
//const persons= this.state.persons.slice();
const persons=[...this.state.persons] ;
persons.splice(personIndex,1);
this.setState({persons:persons})
	}
  render() {
			const style={
				backgroundColor:'green',
				color:'white',
				font:'inherit',
				border:" 1px solid blue",
				padding:'8px',
				cursor:'pointer',
				':hover':{
					backgroundColor:'blue',
					color:'black'
				}
			}
			let persons=null;
			if(this.state.showPersons){
				style.backgroundColor='red';
				style[':hover']={
					backgroundColor:'yellow',
					color:'black'
				}
    persons=(<div>
					{this.state.persons.map((person,index)=>{
						return <Person  key= {person.id}
						name={person.name} 
						age= {person.age}
						changed={(event)=>this.nameChangeHandler(event,person.id)}
						click={()=>this.deletePersonHandler(index)}/>
					})}
					
					
					</div>
					);
					
			}
			let classes=[]
			if(this.state.persons.length<=2){
				classes.push('red');
			}
			if(this.state.persons.length<=1){
				classes.push('bold');
			}
    return (
					<StyleRoot>
      <div className="App">
        <h1> Hi, I am a react app</h1>
								<p className={classes.join(' ')}> This is really working!!</p>
							<button  style={style} key= "key2" onClick={this.switchNameHandler.bind(this,'kuski')}>Switch Name</button>  
							<button onClick={()=>this.switchNameHandler('phanti')}>Switch Name1</button>  
							<button  style={style} key ="hey1" onClick={this.togglePersonHandler}>Toggle Persons</button>  
					{persons}
 {/*  The above are two alternative way  of passing parameters on button click use bind because methd 2 is a bit ineffecient  */}
								 
								
      </div>
						</StyleRoot>
    );
  }
}

export default Radium(App);
