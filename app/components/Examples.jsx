var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are few example locations:</p>
            <ol>
                <li>
                    <Link to="/?location=Boston">Boston MA</Link>
                </li>
                <li>
                    <Link to="/?location=San Diego">San Diego CA</Link>
                </li>
            </ol>
        </div>
    )
}

module.exports = Examples;