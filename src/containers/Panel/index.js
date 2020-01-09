import React, { Component } from 'react';
import ContextMenu from '../ContextMenu';
import TextField from '../../components/TextField';

import style from './index.css';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContextMenu: false,
            position: {
                x: 0,
                y: 0
            },
            texts: []
        }
    }
    
    handleContextMenu = (e) => {
        e.preventDefault();
        let x = e.clientX;
        let y = e.clientY;
        console.log(x, y);
        this.setState((states, props) => ({
            showContextMenu: true,
            position: {
                x: x,
                y: y
            }
        }));
    }

    handleClick = (e) => {
        console.log('handleClick');
        this.onCloseContextMenu();
    }

    onCloseContextMenu = (e) => {
        this.setState({
            showContextMenu: false
        });
    }

    addText = (text) => {
        console.log('addText:', text);
        let { texts, position } = this.state;
        this.setState({
            texts: texts.concat([{
                x: position.x,
                y: position.y,
                text: text,
            }])
        });
        this.onCloseContextMenu();
    }

    render() {
        let { showContextMenu, position, texts } = this.state;
        console.log('textssss:', texts);
        return (
            <div className={style['Panel']} onContextMenu={this.handleContextMenu} onClick={this.handleClick}>
                This is main Panel.
                {
                    texts.map((v, i) => <TextField data={v} key={i}/>)
                }
                {
                    showContextMenu && <ContextMenu position={position} onClose={this.onCloseContextMenu} addText={this.addText}/>
                }
            </div>
        )
    }
}

export default Panel;
