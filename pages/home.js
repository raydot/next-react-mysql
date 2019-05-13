import React, { Component } from "react";
import Link from "next/link"

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Dave RULES!</h1>

				<Link href="/blog">
					<a>Blog</a>
				</Link>
				<br />
				<Link href="/contact">
					<a>Contact</a>
				</Link>

			</div>
		);
	}
}

export default Home;