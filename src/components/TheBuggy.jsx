import { Component } from "react";

export default function TheBuggy() {
    throw new Error("error");
        return <> 
        <h1>Buggy code  </h1>
        </>
}


export class ErrorBoundary extends Component {
    state = {hasError:false}

    static getDerivedStateFromError() {
        return {hasError:true}
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}