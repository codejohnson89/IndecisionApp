// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();

// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//           <h1>Count: {count}</h1>
//           <button className="btn" onClick={addOne}>+1</button>
//           <button className="btn" onClick={minusOne}>-1</button>
//           <button className="btn" onClick={reset}>Reset</button>
//         </div> 
//       );

//       ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinueOne = this.handleMinueOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if(!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinueOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinueOne}>-1</button>
                <button onClick={this.handleReset}>RESET</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));