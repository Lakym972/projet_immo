module.exports = class Contacts {

    id;
    firstname;
    lastname;
    email;
    phone;
    mobile;
    gender;
    info_contact;

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

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }

    getMobile() {
        return this.mobile;
    }

    setMobile(mobile) {
        this.mobile = mobile;
        return this;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
        return this;
    }

    getInfo_contact() {
        return this.info_contact;
    }

    setInfo_contact(info_contact) {
        this.info_contact = info_contact;
        return this;
    }
}