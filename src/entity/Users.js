module.exports = class Users {
    
    id;
    firstname;
    lastname;
    email;
    password;
    phone;
    gender;

    getId() {
        return this.id;
    }
    
    getFirstname() {
        return this.firstname;
    }

    setFirstname(firstname) {
        this.firstname = firstname;
        return this;
    }

    getLastname() {
        return this.lastname;
    }

    setLastname(lastname) {
        this.lastname = lastname;
        return this;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
        return this;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
        return this;
    }
}