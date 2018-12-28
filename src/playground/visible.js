// console.log('app is starting up');
// const appRoot = document.getElementById('app');

// let visibility = false;

// const visibleButton = () => {
//     if (visibility === false) {
//         visibility = true;
//         renderApp();
//     } else {
//         visibility = false;
//         renderApp();
//     }
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Toggle Visiblity App</h1>
//             <button className="btn" onClick={visibleButton}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && <p>Here is the detail text</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// renderApp();

class Visiblity extends React.Component {
    constructor(props) {
        super(props);
        this.visibileBtn = this.visibileBtn.bind(this);
        this.state = {
            visible: false
        };
    }
    visibileBtn() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Vissibility App</h1>
                <button className="btn" onClick={this.visibileBtn}>
                {this.state.visible ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visible && (
                    <div>
                        <p>Hey. These are some details you can see!</p>
                    </div>
                )}
            </div>
        )
    }
}
ReactDOM.render(<Visiblity/>, document.getElementById('app'))