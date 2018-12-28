console.log('app.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Here the subtitle!',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const removeAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');


const renderApp = () => {
    const template =(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options!' : 'No options here!'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} className="btn" onClick={onMakeDecision}>What should I do?</button>
            <button className="btn" onClick={removeAll}>Remove All</button>
           
           
            <ol>
               {app.options.map((i) => {
                 return  <li key={i}>{i}</li>
               })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}
renderApp();