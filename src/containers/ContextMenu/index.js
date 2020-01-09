import React, { Component } from 'react';
import style from './index.css';

class ContextMenu extends Component {
    handleAdd = (e) => {
        console.log('handleAdd');
        e.stopPropagation();
        this.props.addText('Hello');
        this.props.onClose();
    }

    render() {
        let { position } = this.props;
        return <div className={style['Context-Menu']} style={{ left: position.x, top: position.y }}>
            <ul>
                <li onClick={this.handleAdd}>Add one</li>
                <li>Delete</li>
                <li>Modify</li>
            </ul>
        </div>
    }
}
export default ContextMenu;