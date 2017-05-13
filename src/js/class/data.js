/*Import the classes for create objects and preload posts/users*/

import { userClass, postClass, commentClass, reactionClass } from './home';


    /*POST # 1*/

let Comment1_1 = new commentClass();
Comment1_1.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
Comment1_1.date = new Date('May 8, 2017 11:00:00');
Comment1_1.user = { name: 'Juan', profilePicture: '../img/user.png' };

let Comment2_1 = new commentClass();
Comment2_1.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
Comment2_1.date = new Date('May 9, 2017 11:00:00');
Comment2_1.user = { name: 'Maria', profilePicture: '../img/user.png' };

let Comment3_1 = new commentClass();
Comment3_1.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
Comment3_1.date = new Date('May 11, 2017 09:00:00');
Comment3_1.user = { name: 'Fernando', profilePicture: '../img/user.png' };


let Reaction1_1 = new reactionClass();
Reaction1_1.type = 'yellow';

let Reaction2_1 = new reactionClass();
Reaction2_1.type = 'red';

let Reaction3_1 = new reactionClass();
Reaction3_1.type = 'blue';

let Post1 = new postClass();
Post1.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum sollicitudin ultrices. In in lorem eu dolor aliquam luctus. Nam consectetur odio sed turpis faucibus blandit. Donec vel tincidunt nulla. Integer et libero facilisis sem gravida molestie nec sed ipsum.';
Post1.date = new Date('May 12, 2017 01:00:00');
Post1.comments = [Comment1_1, Comment2_1, Comment3_1];
Post1.reactions = [Reaction1_1, Reaction2_1, Reaction3_1];

    /*USER # 1*/

let User1 = new userClass();
User1.name = 'Cristian';
User1.lastName = 'Barreto';
User1.profilePicture = '../img/user.png';

    /*POST # 2*/

let Reaction2_2 = new reactionClass();
Reaction2_2.type = 'blue';

let Reaction1_2 = new reactionClass();
Reaction1_2.type = 'blue';

let Post2 = new postClass();
Post2.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum sollicitudin ultrices. In in lorem eu dolor aliquam luctus. Nam consectetur odio sed turpis faucibus blandit. Donec vel tincidunt nulla. Integer et libero facilisis sem gravida molestie nec sed ipsum.';
Post2.date = new Date('May 12, 2017 19:00:00');
Post2.comments = [];
Post2.reactions = [Reaction1_2, Reaction2_2];

    /*USER # 2*/

let User2 = new userClass();
User2.name = 'Liliana';
User2.lastName = 'Jimenez';
User2.profilePicture = '../img/user.png';

export let Users = [User1, User2];
export let Posts = [Post1, Post2];