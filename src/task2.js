import React from "react";
export default class Person extends React.Component {

    name = "Daniil Batiuk";
    age = 20;
    phone = "380689059693";
    email = "sportak50@gmail.com";
    render() {
        return <ul>
            <li>Name: {this.name}</li>
            <li>Age: {this.age}</li>
            <li>Phone: {this.phone}</li>
            <li>Email: {this.email}</li>
        </ul>
    }
}