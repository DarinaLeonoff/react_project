import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {

    static PropTypes = {
        message: PropTypes.string.isRequired, //переменная содержания сообщения?
        author: PropTypes.string.isRequired //переменная содержащая автора?
    }

    render() {
        return <div>
            <div>{this.props.message}</div>
            <div>{this.props.author}</div>
        </div>; // 1. ... - расширение 
        // 2. this.props.message - this потому что классовый компонент; props.message - передаваемое содержание сообщения 
    }
};