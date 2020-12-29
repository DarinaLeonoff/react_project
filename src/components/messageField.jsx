import React from 'react';
import PropTypes from 'prop-types';

import Message from './message';

export default class MessageField extends React.Component {

    static propTypes = {
        messages: PropTypes.array // переменная содержит массив сообщений 
    }

    static defaultProps = {
        messages: []
    }
    render() {
        return <div>
            {this.props.messages.map(({ message, author }, id) => <><Message message={message} author={author} key={`message_${id}`} /><br /></>)}
        </div>;
    }
};