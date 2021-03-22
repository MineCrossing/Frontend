import React from 'react';
import './chat.css';

export default class Chat extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			typed: "",
			data: []
		}

		this.updateText = this.updateText.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.sendMessageEnter = this.sendMessageEnter.bind(this);
	}

	updateText(msg) {
		this.setState({
			typed: msg
		});
	}

	sendMessageEnter(e) {
		if (e.key === "Enter") {
			this.sendMessage();
		}
	}

	sendMessage() {
		let inputBox = document.getElementById("chat-entry");
		let msg = inputBox.value;

		// Reset
		inputBox.value = "";

		console.log("Sending chat message: " + msg);

		// Send message to API
		let url = "https://api.minecrossing.xyz/chat/send";

		let cache = [];

		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message: msg })
		})
	}

	render() {
		let chat = this.state.data;

		// always scroll to bottom of chat box
		if (document.readyState === "complete") {
			let scrollBox = document.getElementById("chat-box");
			if (scrollBox)
				scrollBox.scrollTop = scrollBox.scrollHeight - scrollBox.clientHeight;
		}

		return (
            <div>
                <h1 className="text-header">Chat</h1>
                <p>
                    This is our in-game chat hook that interacts with our backend API endpoint to communicate directly with the game server!
                    <br />
                    <br />
                    You can communicate with the players in-game by typing into the message box and clicking send!
                </p>

                <div id="chat-container">
                    <div id="chat-box" className="pure-u-1-3">
                        {
                            chat.map((message, id) => (
                                <p key={id}>{message}</p>
                            ))
                        }
                    </div>

                    <input id="chat-entry" placeholder="> message" onChange={this.updateText} onKeyDown={this.sendMessageEnter}></input>
                    <button id="send-chat" onClick={this.sendMessage}>Send</button>
                </div>
            </div>
		)
	}

	componentDidMount() {
		let url = "https://api.minecrossing.xyz/chat";

		setInterval(() => {
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					this.setState({ data: data })
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
