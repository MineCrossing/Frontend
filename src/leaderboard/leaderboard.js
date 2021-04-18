import React from 'react';
import "../homepage/homepage.css";
import "./leaderboard.css";

export default class Leaderboard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			page: 1,
			pageSize: 10,
			data: [],
			selectedSort: ""
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
		this.setState({ page: Math.floor(this.state.data.length/this.state.pageSize) });
	}

	sortData = (sortBy) => {
		let data = this.state.data;
		sortBy = sortBy.toLowerCase();

		if (sortBy === this.state.selectedSort) {
			this.setState({data: this.state.data.reverse()});
			return;
		}

		switch (sortBy) {
			case "name":
				data = this.state.data.sort((a, b) => b.name - a.name);
				break;
			case "kills":
				data = this.state.data.sort((a, b) => b.kills - a.kills);
				break;
			case "deaths":
				data = this.state.data.sort((a, b) => b.deaths - a.deaths);
				break;
			case "wins":
				data = this.state.data.sort((a, b) => b.wins - a.wins);
				break;
			case "losses":
				data = this.state.data.sort((a, b) => b.losses - a.losses);
				break;
			case "quests":
				data = this.state.data.sort((a, b) => b.quests - a.quests);
				break;
			default:
				data = this.state.data.sort((a, b) => b.level - a.level);
		}

		this.setState({selectedSort: sortBy, data});
	};


	render() {
		const wholePlayers = this.state.data;

		let players = this.state.data;

		let noOfPages = Math.floor(players.length / this.state.pageSize)
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
								<th onClick={() => this.sortData("Name")}>Name </th>
								<th onClick={() => this.sortData("Level")}>Level <i class="fas fa-sort"></i></th>
								<th onClick={() => this.sortData("Kills")}>Kills <i class="fas fa-sort"></i></th>
								<th onClick={() => this.sortData("Deaths")}>Deaths <i class="fas fa-sort"></i></th>
								<th onClick={() => this.sortData("Wins")}>Wins <i class="fas fa-sort"></i></th>
								<th onClick={() => this.sortData("Losses")}>Losses <i class="fas fa-sort"></i></th>
								<th onClick={() => this.sortData("Quests")}>Quests <i class="fas fa-sort"></i></th>
							</tr>
						</thead>
						<tbody>
							{table}
						</tbody>
					</table>
					<br />

					<button className="pageBtn" onClick={this.handleFirstClick} disabled={disabledPrevious}><i class="fas fa-fast-backward"></i> First</button>
					<button className="pageBtn" onClick={this.handlePreviousClick} disabled={disabledPrevious}><i class="fas fa-step-backward"></i> Previous</button>
     					Page {this.state.page} of {noOfPages}
					<button className="pageBtn" onClick={this.handleNextClick} disabled={disabledNext}>Next <i class="fas fa-step-forward"></i></button>
					<button className="pageBtn" onClick={this.handleLastClick} disabled={disabledNext}>Last <i class="fas fa-fast-forward"></i></button>
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
				this.setState({ selectedSort: "level", data: data.sort((a, b) => b.level - a.level)})
			})
			.catch((err) => {
				console.log("something went wrong ", err)
			});
	}

}
