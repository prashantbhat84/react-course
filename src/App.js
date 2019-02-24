import React, { Component } from "react";
import Person from "./Person/Person";
import classes from"./App.module.css";
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
			
			let persons=null;
			let btnClass= '';
			if(this.state.showPersons){
				btnClass=classes.Red
				
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
			let assignedClasses=[]
			if(this.state.persons.length<=2){
				assignedClasses.push(classes.red);
			}
			if(this.state.persons.length<=1){
			assignedClasses.push(classes.bold);
			}
    return (
					<StyleRoot>
      <div className={classes.App}>
        <h1> Hi, I am a react app</h1>
								<p className={assignedClasses.join(' ')}> This is really working!!</p>
							<button className={btnClass}   key= "key2" onClick={this.switchNameHandler.bind(this,'kuski')}>Switch Name</button>  
							<button className={btnClass} onClick={()=>this.switchNameHandler('phanti')}>Switch Name1</button>  
							<button  className={btnClass}  key ="hey1" onClick={this.togglePersonHandler}>Toggle Persons</button>  
					{persons}
 {/*  The above are two alternative way  of passing parameters on button click use bind because methd 2 is a bit ineffecient  */}
								 
								
      </div>
						</StyleRoot>
    );
  }
}

export default Radium(App);
