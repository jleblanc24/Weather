var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (

        <div>
            <Nav></Nav>
            <br></br>
            {props.children}
        </div>

    );
}
    
module.exports = Main;