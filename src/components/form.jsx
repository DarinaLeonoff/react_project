import React from 'react';

import Message from './message';

export default class Form extends React.Component {
    state = {
        text: ''
    }

    change = (eve) => {
        this.setState({ text: eve.target.value }) // setStatus - проверка состояния 
    }

    render() {
        return <div>
            <Message text={this.state.text} />
            <input value={this.state.text} onChange={this.change} />
            <button>Send</button>
        </div>;
    }
}