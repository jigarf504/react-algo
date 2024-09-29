import { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.startingCount ?? 0
        }
    }


    componentDidMount() {
        console.log("class component mounted");
    }
    componentDidUpdate(prevProps,nextState) {
        console.log("class component updated",prevProps,nextState);
    }
    
    componentWillUnmount() {
        console.log("class component unmounted");
    }

    render() {
        return <>
         <button onClick={() => this.setState({
            count: this.state.count + 1
         })}>
            Increatement counter {this.state.count}
         </button>  
        </>
    }

}