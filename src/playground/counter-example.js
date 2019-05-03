
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const subtractOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}



const appRoot = document.getElementById("app");

const renderCounterApp = () => {

    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <br/><br/>
            <button className="button" onClick={addOne}>+ 1</button>
            <br/><br/>
            <button className="button" onClick={subtractOne}>- 1</button>
            <br/><br/>
            <button className="button" onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateThree,appRoot);
}

renderCounterApp();