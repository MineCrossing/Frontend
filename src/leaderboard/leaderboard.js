import React from 'react';
import "../homepage/homepage.css";
import "./leaderboard.css";

export default class Leaderboard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: []
		}
	}

	render() {

		let players = this.state.data;

		return (
			<div id="homepage">
				<div id="content" className="pure-u-3-5">

					<h1>Welcome to the Leaderboard!</h1>

					<table className="table" cellSpacing="0">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Level</th>
								<th>Kills</th>
								<th>Deaths</th>
								<th>Wins</th>
								<th>Losses</th>
								<th>Quests</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
					<br />
				</div>
			</div>
		);
	}

	componentDidMount() {
		let url = "https://api.minecrossing.xyz/players";

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({ data: data })
			})
			.catch((err) => {
				console.log("something went wrong ", err)
			});
	}

}
