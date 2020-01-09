import React, { Component } from 'react';
import style from './index.css';

class Header extends Component {
    constructor(props) {
        super(props);
        console.log();
    }

    render() {
        return <div className={style['Header']}>
            Memo Panel.
        </div>
    }
}

export default Header;
