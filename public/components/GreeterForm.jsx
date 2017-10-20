var React = require('react');

var GreeterForm = React.createClass({

    onFormSubmit: function(e) {
        e.preventDefault();
        
        var nameRef = this.refs.name;        
        var msgRef = this.refs.message;        
        var name = nameRef.value;
        var message = msgRef.value;
        var updates = {};
        
        if (typeof name === 'string' && name.length > 0) {
        
            nameRef.value = '';
            updates.name = name;
            
        }
        if (typeof message === 'string' && message.length > 0) {
        
            msgRef.value = '';
            updates.message = message;
        }
        
        this.props.onSubmit(updates);
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="name" placeholder="Enter name"></input>
                    </div>
                    <div>
                        <textarea ref="message" placeholder="Enter message"></textarea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
})

module.exports = GreeterForm;