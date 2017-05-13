/*Import all necesary components*/

    /*First import node-mudels components*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/Header';
import Container from '../components/Container';

    /*And import the style for this view*/
import '../../sass/home.scss';

export default class Home extends React.Component {
        /*First render of Container Component*/
    componentDidMount() {
        ReactDOM.render(<Container />, document.getElementById('container-div'));
    }

    render() {
        return (
            <div id="home">
                <Header title="Domicilios Test" userName="Camilo B." />
                <div id="container-div"></div>
            </div>
        );
    }
}
