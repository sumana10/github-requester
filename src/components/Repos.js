import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";



const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
    console.log(data);
  };
//trigger point
//called using useEffect
  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <>
    <ListGroup style={{overflow:"auto", height:"700" + "px"}}>
      {repos.map(repo => (
        repo.homepage ? (
        <ListGroupItem key={repo.id}>
          <h6 className="text-primary text-capitalize">{repo.name}</h6>
          <div className="text-secondary text-capitalize">{repo.language}</div>
          <div className="text-info text-capitalize">{repo.description}</div>
         <a className="text-success"  href={repo.homepage} target="_blank">Hosted Link</a> 
         
        </ListGroupItem>)
        : null
      ))}
    </ListGroup>
    
    </>
  );
};

export default Repos;
