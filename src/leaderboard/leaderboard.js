import React from 'react';
import "../homepage/homepage.css";
import "./leaderboard.css";

export default class Leaderboard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			page: 1,
			pageSize: 10,
			data: []
		}
	}

	handlePreviousClick = () => {
		this.setState({ page: this.state.page - 1 });
	}

	handleNextClick = () => {
		this.setState({ page: this.state.page + 1 });
	}

	handleFirstClick = () => {
		this.setState({ page: this.state.page = 1 });
	}

	handleLastClick = () => {
		this.setState({ page: this.state.page = 41 });
	}

	handleSelect = (e) => {
		this.setState({ page: 1, rating: e.target.value });
	}

	render() {
		const wholePlayers = this.state.data;
		wholePlayers.sort((a, b) => {
			if (a.level > b.level) {
			  return -1;
			}
			if (a.level < b.level) {
			  return 1;
			}
			return 0;
		});
		
		let players = this.state.data;

		let noOfPages = Math.ceil(players.length / this.state.pageSize)
		if (noOfPages === 0) { noOfPages = 1 }
		let disabledPrevious = (this.state.page <= 1)
		let disabledNext = (this.state.page >= noOfPages)

		players = players.slice(((this.state.pageSize*this.state.page)-this.state.pageSize),(this.state.pageSize*this.state.page));

		let table = [];
		for (const data of players) {
			table.push(
				<tr>
					<td>{wholePlayers.indexOf(data) + 1}</td>
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

					<h1 className="leaderboard-header">Welcome to the Leaderboard!</h1>

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

					<button className="pageBtn" onClick={this.handleFirstClick} disabled={disabledPrevious}>First</button>
					<button className="pageBtn" onClick={this.handlePreviousClick} disabled={disabledPrevious}>Previous</button>
     					Page {this.state.page} of {noOfPages}
					<button className="pageBtn" onClick={this.handleNextClick} disabled={disabledNext}>Next</button>
					<button className="pageBtn" onClick={this.handleLastClick} disabled={disabledNext}>Last</button>
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
