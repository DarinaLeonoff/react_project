import React from 'react';
import PropTypes from 'prop-types';

import MessageField from './messageField.jsx';
import Message from './message.jsx';
import Form from './form'


export default class App extends React.Component {

    constructor(props) {
        super(props); // вызов функции родительского элемента 

        this.state = {
            text: 'Some text from state', // сообщение по-умолчанию?
            timeout: null, // остановка 
            messages: [],
            interval: null
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        const timeout = setTimeout( // вызов функции через 500 млс
            () => {
                this.setState({ messages: [...this.state.messages, 'I do not answer you. I am robot'] });
            },
            500
        );
        const interval = setInterval( //вызов функции каждые 2000 млс
            () => {
                this.setState({ messages: [...this.state.messages, 'How are you?'] });
                setTimeout(
                    () => this.setState({ messages: [...this.state.messages, 'I do not answer you. I am robot'] }),
                    1000
                );
            },
            2000
        );
        this.setState({ timeout });
        this.setState({ interval });
        // fetch()....then(res => { ...... this.setState(...) }) //??
    }

    componentDidUpdate() {
        console.log('componentWillUpdate');
        console.log(this.state.messages.length, this.state.messages.length % 2);
        if (this.state.messages.length % 2 > 0) {
            // console.log();
            const timeout = setTimeout(
                () => {
                    this.setState({ messages: [...this.state.messages, { message: 'I do not answer you. I am robot', author: 'robot' }] });
                    this.setState({ timeout });
                },
                2000
            );
            // this.setState({timeout});
        }
    }

    componentWillUnmount() {
        clearTimeout(this.state.timeout);
        // clearInterval(this.state.interval);
        this.setState({ timeout: null });
        // this.setState({interval: null});
    }

    send = objMsg => {
        this.setState({ messages: [...this.state.messages, objMsg] });
        // const timeout = setTimeout(
        //     () => {
        //         this.setState({messages: [...this.state.messages, {message: 'I do not answer you. I am robot', author: 'robot'}]});
        //     },
        //     1000
        // );
        // this.setState({timeout});
    };

    render() {
        console.log('render');
        return <main>
            <MessageField messages={this.state.messages} />
            <Message text={this.state.text} />
            <Form />
            {/* <SendMessage send={this.send} /> */}
        </main>;
    }
}
