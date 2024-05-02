import {Component} from "react";

class Header extends Component{
    constructor(props){
        super();
        this.state = {color: props.color};
    }
    render() {
        return (
        <>
            <h2>Hi, I am a {this.state.color} Car!</h2>
            <button onClick={()=>{
                this.state.color === 'red' ? this.setState({color: "blue"}) : this.setState({color: "red"});
            }}>Change Color</button>
        </>
        );
      }
}

export default Header;