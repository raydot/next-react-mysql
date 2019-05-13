
import "../scss/style.scss";
import React, { Component } from "react";
import Link from "next/link";


class Blog extends Component {
	render() {
		return (
			<div className="container">
				<h1 className="title">DAVE RULES THIS BLOG!</h1>

				<Link href="/">
					<a>Return to home page</a>
				</Link>
			</div>
		);
	}
}

export default Blog;