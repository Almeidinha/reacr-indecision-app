class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer =D';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props['title']}</h1>
                <h2>{this.props['subtitle']}</h2>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    
    handleRemoveAll() {
        alert('Removing Options!');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props['options'] && this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props['optionText']}</div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOptions(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert( 'handle Pick');
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handlePick} >What Should I do?</button>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

