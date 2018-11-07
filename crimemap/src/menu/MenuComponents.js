import React from "react";
import ReactDOM from "react-dom";
import './MenuComponents.css'
import logo from './Logo.png';
import { Router, Route} from 'react-router'

class Logo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <image src={logo} className="menu__logo"/>
        );
    }

}

class Tab extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return(

            <a className="menu__link">{this.props.label} </a>

        );
    }
}

export  {Logo, Tab};