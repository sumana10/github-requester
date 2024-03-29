import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import Footer from "../layout/Footer";

const Home = () => {
	const context = useContext(UserContext);
	const [query, setQuery] = useState("sumana10");
	const [user, setUser] = useState(null);

	const fetchDetails = async () => {
		try {
			const { data } = await Axios.get(`https://api.github.com/users/${query}`);
		
			setUser(data);

			console.log({ data });

		} catch (eror) {

			toast("Not able to locate user", { type: "error" });
			
		}
	};

	//if user not exist

	useEffect(() => {
		fetchDetails();
	}, []);

	if (!context.user?.uid) {
		return <Redirect to="/signin" />;
	}

	return (
		<>
			<Container className="min-vh-100">
				<Row className="mt-3">
					<Col md="5">
						<InputGroup>
							<Input
								type="text"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Please provide the username"
							/>
							<Button onClick={fetchDetails} color="primary">
								Fetch User
							</Button>
						</InputGroup>
						{user ? <UserCard user={user} /> : null}
					</Col>
					<Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
