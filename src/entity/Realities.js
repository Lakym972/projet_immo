module.exports = class Realities {

    id;
    user_id;
    contact_id;
    address1;
    address2;
    town;
    zipcode;
    info_address;
    type;
    area;
    room;
    price;
    sold;
    online;
    info;
    created_data;

    getId() {
        return this.id;
    }

    getUser_id() {
        return this.user_id;
    }

    setUser_id(user_id) {
        this.user_id = user_id;
        return this;
    }

    getContact_id() {
        return this.contact_id;
    }

    setContact_id(contact_id) {
        this.contact_id = contact_id;
        return this;
    }

    getAddress1() {
        return this.address1;
    }

    setAddress1(address1) {
        this.address1 = address1;
        return this;
    }

    getAddress2() {
        return this.address2;
    }

    setAddress2(address2) {
        this.address2 = address2;
        return this;
    }

    getTown() {
        return this.town;
    }

    setTown(town) {
        this.town = town;
        return this;
    }

    getZipcode() {
        return this.zipcode;
    }

    setZipcode(zipcode) {
        this.zipcode = zipcode;
        return this;
    }

    getInfo_address() {
        return this.info_address;
    }

    setInfo_address(info_address) {
        this.info_address = info_address;
        return this;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
        return this;
    }

    getArea() {
        return this.area;
    }

    setArea(area) {
        this.area = area;
        return this;
    }

    getRoom() {
        return this.room;
    }

    setRoom(room) {
        this.room = room;
        return this;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    getSold() {
        return this.sold;
    }

    setSold(sold) {
        this.sold = sold;
        return this;
    }

    getOnline() {
        return this.online;
    }

    setOnline(online) {
        this.online = online;
        return this;
    }

    getInfo() {
        return this.info;
    }

    setInfo(info) {
        this.info = info;
        return this;
    }

    getCreated_data() {
        return this.created_data;
    }

    setCreated_data(created_data) {
        this.created_data = created_data;
        return this;
    }
    
}