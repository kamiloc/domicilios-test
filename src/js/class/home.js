export class userClass {

    constructor(_name = new String(), _lastName = new String(), _profilePicture = new String()) {
        this.name = _name;
        this.lastName = _lastName;
        this.profilePicture = _profilePicture;
    }

}

export class commentClass {

    constructor(_content = new String(), _date = new Date(), _user = new userClass()) {
        this.content = _content;
        this.date = _date;
        this.user = _user;
    }

}

export class reactionClass {

    constructor(_type = new String()) {
        this.type = _type;
    }

}

export class postClass {

    constructor(_content = new String(), _date = new Date(), _comments = new Array(commentClass), _reactions = new Array(reactionClass)) {
        this.content = _content;
        this.date = _date;
        this.comments = _comments;
        this.reactions = _reactions;
    }

}