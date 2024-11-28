"use strict";
const users = {
    name: "Vedant",
    age: 19,
    greet() {
        console.log("hi there!!");
        return this.name;
    }
};
function print(users) {
    users.greet();
}
print(users);
