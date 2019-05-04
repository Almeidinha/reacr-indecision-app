"use strict";

console.log("App is running!");

var app = {
    title: "Indecision App",
    subtitle: "This is some info",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderoptionApp();
    }
};

var clearOptions = function clearOptions(e) {
    e.preventDefault();
    app.options = [];
    renderoptionApp();
};

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
}

var appRoot = document.getElementById("app");

var onMakeDecision = function onMakeDecision() {
    var randomNumb = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNumb];
    alert(option);
};

var renderoptionApp = function renderoptionApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No options =("
        ),
        React.createElement(
            "button",
            { type: "text", onClick: clearOptions },
            "Remove All"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (opt) {
                return React.createElement(
                    "li",
                    { key: uuidv4() },
                    opt
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderoptionApp();
