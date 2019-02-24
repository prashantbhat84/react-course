import React, { Component } from 'react';

class ErrorBoundry extends Component{
	state={
		hasError:false,
		errorMessage:" "
	}
	componentDidCatch=(err,info)=>{
this.setState({hasError:true, errorMessage:err})
	}
	render(){
		if(this.state.hasError){
			return <h1>{this.state.errorMessage}</h1>
		}
		else{
			 return this.state.children
		}
		
	}
}
export default ErrorBoundry;