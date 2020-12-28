class ActorModel {
    constructor(id, firstName, lastName, birthday, img, imdbLink) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
        this.img = img;
        this.imdbLink = imdbLink;
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