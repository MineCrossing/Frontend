import React from 'react';
import './chat.css';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    render() {
        let chat = this.state.data;

        return (
            <div id="chat-container">
                <div id="chat-box" className="pure-u-1-3">
                    {
                        chat.map((message, id) => (
                            <p key={id}>{message}</p>
                        ))
                    }
                </div>
                
                <input id="chat-entry" placeholder="> message"></input>
                <button id="send-chat">Send</button>
            </div>
        )
    }

    componentDidMount() {
        let url = "https://api.minecrossing.xyz/chat";

        setInterval(() => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({data: data})
                })
                .catch((err) => {
                    console.log("something went wrong ", err)
                });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

}