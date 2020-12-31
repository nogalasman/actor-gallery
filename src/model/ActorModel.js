class ActorModel {
    constructor(plainActorOrid, firstName, lastName, birthday, img, imdbLink) {
        if (typeof plainActorOrid === 'object') {
            this.id = plainActorOrid.id;
            this.firstName = plainActorOrid.firstName;
            this.lastName = plainActorOrid.lastName;
            this.birthday = new Date(plainActorOrid.birthday);
            this.img = plainActorOrid.img;
            this.imdbLink = plainActorOrid.imdbLink;
        } else {
            this.id = plainActorOrid;
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthday = new Date(birthday);
            this.img = img;
            this.imdbLink = imdbLink;
        }
    }

    age() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthday.getFullYear();
        return age;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

export default ActorModel;