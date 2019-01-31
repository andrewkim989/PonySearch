import React, { Component } from 'react';
import './App.css';
import "react-router";
import {NavLink} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            data: [{name: "Ocellus", species: "Changeling", likes: "Books, reading, " + 
            "hanging out with friends"}, {name: "Sandbar", species: "Pony (Earth)", 
            likes: "Hanging out with others, exploring the school"}, {name: "Yona", 
            species: "Yak", likes: "Smashing stuff, meeting new people"}, {name: "Silverstream",
            species: "Hippogriff", likes: "Stairs, making friends, cheering up others"},
            {name: "Gallus", species: "Griffon", likes: "Hanging out with others"},
            {name: "Smolder", species: "Dragon", likes: "Being awesome"}, {name: "Princess Luna",
            species: "Pony (Alicorn)", likes: "The night, the stars, and raising the moon"},
            {name: "Rainbow Dash", species: "Pony (Pegasus)", likes: "Flying, sleeping"},
            {name: "Rarity", species: "Pony (Unicorn)", likes: "Fashion, making dresses, mining " +
            "for gems"}, {name: "Discord", species: "Draconequus", likes: "Chaos, Fluttershy, " +
            "doing whatever he wants for fun"}]
        };
        this.handleName = this.handleName.bind(this);
    }

    handleName(event) {
        var name = event.target.value;
        this.setState({name: name});
    }

    render() {
        var name = this.state.name.toLowerCase();
        var links = this.state.data.map((d, i) => {
            if ((d.name).toLowerCase().includes(name) ) {
                return (
                    <NavLink to = {{pathname: "/profile", name: d.name,
                    species: d.species, likes: d.likes}} key = {i}>
                    <p>{d.name}</p></NavLink>
                )
            }
            else {
                return null;
            }
        });
        
        return (
            <div id = "home">
                <h3>Type in the text box below to filter out the list of names based on the input.
                    Click on the names to see their profile.</h3><br></br>
                <div id = "nameform">
                    <input type = "text" name = "name" value = {this.state.name} size = "25"
                    onChange = {this.handleName} placeholder = "Type name here"></input>
                </div>
                <div id = "list">
                    {links}
                </div>
            </div>
        )
    }
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.name = props.location.name;
        this.species = props.location.species;
        this.likes = props.location.likes;

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div id = "info">
                <p>Name: {this.name}</p>
                <p>Species: {this.species}</p>
                <p>Likes: {this.likes}</p><br></br>
                <button onClick = {this.goBack} className = "btn btn-link">Go Back</button>
            </div>
        )
    }
}

export {Home, Profile}