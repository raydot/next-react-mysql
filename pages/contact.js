import React, { Component } from "react"
import Link from "next/link"

class Contact extends Component {
	render() {
		return (
			<div>
				<h1>DAVE RULES THE CONTACT PAGE!</h1>
				<Link href="/">
					<a>Return to home page</a>
				</Link>
			</div>
		);
	}
}

export default Contact