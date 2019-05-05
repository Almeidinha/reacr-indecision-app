console.log("App is running!");

const app = {
    title: "Indecision App",
    subtitle: "This is some info",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderoptionApp();
    }
};

const clearOptions = (e) => {
    e.preventDefault();
    app.options = [];
    renderoptionApp();
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

const appRoot = document.getElementById("app");

const onMakeDecision = () => {
    const randomNumb = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumb]
    alert(option);
}

const renderoptionApp = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options =("}</p>
            <button type="text" onClick={clearOptions}>Remove All</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <ol>
            {
                app.options.map((opt) => <li key={uuidv4()}>{opt}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
} 

renderoptionApp();


