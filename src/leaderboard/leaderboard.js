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

		let table = [];
		for (const data of players) {
			table.push(
				<tr>
					<td>{players.indexOf(data) + 1}</td>
					<td>{data.name}</td>
					<td>{data.level}</td>
					<td>{data.kills}</td>
					<td>{data.deaths}</td>
					<td>{data.wins}</td>
					<td>{data.losses}</td>
					<td>{data.quests}</td>
				</tr>
			);
		}

		return (
			<div id="homepage">
				<div id="content" className="pure-u-3-5">

					<h1 className="rules-leaderboard">Welcome to the Leaderboard!</h1>

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
							{table}
						</tbody>
					</table>
					<br />
				</div>
			</div>
		);
	}

	componentDidMount() {
		let url = "http://localhost:8081/players";

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
