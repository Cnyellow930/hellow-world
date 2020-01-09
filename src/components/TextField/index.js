import React, { Component } from 'react';
import style from './index.css';

class TextField extends Component {
    render() {
        let { data } = this.props;
    return <div className={style['TextField']} style={{ left: data.x, top: data.y }}>{data.text}</div>
    }
}
export default TextField;