/*Import all necesary components*/

/*First import node-mudels components*/
import React from 'react';
import ReactDOM from 'react-dom';

/*Before import local components*/
import { Users, Posts } from '../class/data';
import { userClass, postClass } from '../class/home';
import Container from './Container';

export default class Publication extends React.Component {
    /* Event for pusblish new post when key press is equal to 'Enter' */
    handleKeyPress(e) {
        let key = e.which || e.keyCode;
        if (key === 13) {
            this.handleNewPost();
            e.preventDefault();
        }
    }
    /*Event for publish a new post*/
    handleNewPost() {
        let textArea = document.getElementById('publication-text');

        if (textArea.value !== '') {  /*Prevent null post*/

            /*Create new Post object with their properties*/
            let Post = new postClass();
            Post.content = textArea.value;
            Post.date = Date.now();
            Post.comments = [];
            Post.reactions = [];

            /*Create a default user for the post*/
            let User = new userClass();
            User.name = 'Camilo';
            User.lastName = 'Cortes';
            User.profilePicture = '../img/user.png';

            /*Add the new User and new Post for the data*/
            Users.push(User);
            Posts.push(Post);

            /*Re-render the Container*/
            ReactDOM.render(<Container />, document.getElementById('container-div'));
            textArea.value = '';
        }

    }

    render() {
        return (
            <div id="publication">
                <textarea name="Publication" cols="30" rows="1" id="publication-text"
                    className="textarea" placeholder="Escribe aquí tu estado" onKeyPress={this.handleKeyPress.bind(this)}></textarea>
                <div>
                    <button onClick={this.handleNewPost}>Publicar</button>
                </div>
            </div>
        );
    }
}