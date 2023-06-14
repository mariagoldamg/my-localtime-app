import { Component } from "react";

export class Clock extends Component{
    constructor(props){
        super(props);

this.state = {
    time:new Date().toLocaleTimeString()
}

    }
// The componentDidMount() method allows us to execute the React code
// when the component is already placed in the DOM (Document Object Model).
//WE are telling the code to return updated in seconds state every second.
//We only call it once
componentDidMount(){
    this.timerID = setInterval(()=>
    this.tick(),1000)
}
//componentWillUnmount is used when there is a  timer
componentWillUnmount(){
    clearInterval(this.timerID)
}

//Tick() provides the time in seconds that has passed since 1st of January of 1970. 
//It actually provides quite a few uses.
//This method is called every second.
tick(){
   this.setState(
    {
        time:new Date().toLocaleTimeString()
       }
   )
}

    render(){
     return(
        <div>
<p>{this.state.time}</p>
        </div>
     )
    }
}




