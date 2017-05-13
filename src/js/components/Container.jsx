/*Import all necesary components*/

    /*First import node-mudels components*/
import React from 'react';

    /*Before import local components*/
import Publication from './Publication';
import Post from './Post';

    /*Import the data for Create and Read Posts and Users*/
import { Users, Posts } from '../class/data';

export default class Container extends React.Component {
    render() {
        return (
            <div id="container">
                <Publication />
                    {/*Map each post load in the data, and render a new Post Component*/}
                {Posts.map((post, index) => {
                    return <Post number={index+1} key={index} user={Users[index]} post={post} />
                })}
            </div>
        );
    }
}