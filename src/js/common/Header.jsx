import React from 'react';

export default class Header extends React.Component{
    render(){
        return (
            <header>
                <h1 style={{color:'black'}}>{this.props.title}</h1>
                <p>Hola, {this.props.userName}</p>
                <button>Salir</button>
            </header>
        );  
    }
}