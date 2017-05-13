/*Import all necesary components*/

/*First import node-mudels components*/
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

/*Configure moment.js for work in spanish*/
moment.locale('es');

/*Before import local components*/
import Container from './Container';
import { userClass, postClass, commentClass, reactionClass } from '../class/home';

/*Create a React Component for a comment in a post*/
class Comment extends React.Component {
    render() {
        let comment = this.props.comment;
        return (
            <li className="comment">
                <div className="picture-content">
                    <img src={comment.user.profilePicture} alt="Profile picture" />
                </div>
                <div className="comment-content">
                    <h6>{comment.user.name}</h6> <p>{comment.content}</p>
                    <h5 className="date">{moment(comment.date).fromNow()}</h5>
                </div>
            </li>
        );
    }
}

/*Create a React component for map all comments in the post*/

class Comments extends React.Component {
    render() {
        return (
            <ul>{
                this.props.comments.map((_comment, index) => {
                    return <Comment key={index} comment={_comment} />
                })}</ul>
        );
    }
}

/*Create a React Component for the Post and exports for use in other module*/
export default class Post extends React.Component {

    /*Set states for show and hide the options of React and Comment the post*/
    constructor(props) {
        super(props);
        this.state = { viewReactOption: true, viewCommentOption: true };
    }
    /*Event for show the 'react to the post' option*/
    handleShowReactiOption() {
        this.setState({ viewReactOption: !this.state.viewReactOption });
    }
    /*Event for show the option for comment the post*/
    handleShowCommentOption() {
        this.setState({ viewCommentOption: !this.state.viewCommentOption });
    }

    /*Event for add a comment at the post*/
    handleComment(e) {
        let key = e.which || e.keyCode; /*Verify if the key pressed is 'Enter' */
        if (key === 13) {
            let textArea = document.getElementById(this.props.number + 'comment-text');

            if (textArea.value !== '') { /*Prevent null comment*/

                /*Create new comment object and add the their properties*/
                let newComment = new commentClass();
                newComment.content = textArea.value;
                newComment.date = Date.now();
                newComment.user = { name: 'Camilo', profilePicture: '../img/user.png' }

                this.props.post.comments.push(newComment); /*Add the comment at the post*/
                ReactDOM.render(<Container />, document.getElementById('container-div')); /*Re-render the Container Component*/
                e.preventDefault(); /*Prevent the jump line*/
                textArea.value = ''; /*Empty the textarea for input new commnet*/
            }
        }
    }

    /*Events for 'react to the post' based in the color of the reaction*/
    handleBlueReact() {
        let newReaction = new reactionClass();
        newReaction.type = 'blue';
        this.props.post.reactions.push(newReaction);
        this.setState({ viewReactOption: true });
        ReactDOM.render(<Container />, document.getElementById('container-div'));
    }

    handleRedReact() {
        let newReaction = new reactionClass();
        newReaction.type = 'red';
        this.props.post.reactions.push(newReaction);
        this.setState({ viewReactOption: true });
        ReactDOM.render(<Container />, document.getElementById('container-div'));
    }

    handleYellowReact() {
        let newReaction = new reactionClass();
        newReaction.type = 'yellow';
        this.props.post.reactions.push(newReaction);
        this.setState({ viewReactOption: true });
        ReactDOM.render(<Container />, document.getElementById('container-div'));
    }

    render() {

        let User = this.props.user;
        let Post = this.props.post;

        /*On render, check what type of reactions has the post for show or hide colors*/
        let Reactions = this.props.post.reactions;
        this.reactions = { blue: false, red: false, yellow: false };

        Reactions.forEach((reaction) => {
            switch (reaction.type) {
                case 'blue':
                    this.reactions.blue = true;
                    break;

                case 'red':
                    this.reactions.red = true;
                    break;

                case 'yellow':
                    this.reactions.yellow = true;
                    break;

                default:
                    break;
            }
        })

        return (
            <div id="post">
                <div style={{ float: 'left', padding: '4%', width: '100%' }}>

                    <div className="profile-picture">
                        <img src={User.profilePicture} alt="User" />
                    </div>

                    <div id="post-data">
                        <h4>{User.name} {User.lastName}</h4>
                        <h5 className="date">{moment(Post.date).fromNow()}</h5>
                        <br />

                        <p>{Post.content}</p>
                        <br />

                        <div id="actions">
                            <div id="reactions" hidden={this.state.viewReactOption} className="animated bounceInLeft">
                                <img src="../img/blue.png" alt="Blue reaction" onClick={this.handleBlueReact.bind(this)} />
                                <img src="../img/red.png" alt="Red reaction" onClick={this.handleRedReact.bind(this)} />
                                <img src="../img/yellow.png" alt="Yellow reaction" onClick={this.handleYellowReact.bind(this)} />
                            </div>

                            <p onClick={this.handleShowReactiOption.bind(this)}>Reaccionar</p>
                            <p onClick={this.handleShowCommentOption.bind(this)}>Comentar</p>
                        </div>
                    </div>
                </div>

                <div id="post-info">
                    <img src="../img/blue.png" alt="Blue reaction" hidden={!this.reactions.blue} />
                    <img src="../img/red.png" alt="Red reaction" hidden={!this.reactions.red} />
                    <img src="../img/yellow.png" alt="Yellow reaction" hidden={!this.reactions.yellow} />
                    <p id="reacts-counter">{Post.reactions.length > 0 ? Post.reactions.length : ''}</p>
                    <p>{Post.comments.length > 0 ? Post.comments.length + ' comentarios' : ''}</p>
                </div>

                <div id="actions-movile">
                    <div id="reactions" hidden={this.state.viewReactOption} className="animated bounceInLeft">
                        <img src="../img/blue.png" alt="Blue reaction" onClick={this.handleBlueReact.bind(this)} />
                        <img src="../img/red.png" alt="Red reaction" onClick={this.handleRedReact.bind(this)} />
                        <img src="../img/yellow.png" alt="Yellow reaction" onClick={this.handleYellowReact.bind(this)} />
                    </div>

                    <p onClick={this.handleShowReactiOption.bind(this)} style={{borderRight: '1px solid lightgrey'}}>Reaccionar</p>
                    <p onClick={this.handleShowCommentOption.bind(this)}>Comentar</p>
                </div>


                <div id="post-comments">
                    {Post.comments.length > 0 ? <Comments comments={Post.comments} /> : ''}
                    <textarea name="Comment" cols="30" rows="1" id={this.props.number + 'comment-text'} hidden={this.state.viewCommentOption}
                        className="textarea animated fadeInDown" placeholder="Escribe un comentario" onKeyPress={this.handleComment.bind(this)}></textarea>
                </div>
            </div>
        );
    }
}