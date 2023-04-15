import React from "react";
import photos1 from './photos/1.jpg'
import photos2 from './photos/2.jpg'
export default class Town extends React.Component {

    name = "Kremenchug";
    country = "Ukraine";
    year = 1954;
    photos = [photos1, photos2];
    render() {
        return (
            <>
                <ul>
                    <li>Name: {this.name}</li>
                    <li>Country: {this.country}</li>
                    <li>Year: {this.year}</li>
                </ul>
                <img className="img" src={this.photos[0]} alt="First Photo" />
                <img className="img" src={this.photos[1]} alt="Second Photo" />
            </>
        );
    }
}