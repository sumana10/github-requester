import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-4" style={{width: 18+"rem", margin:"auto"}}>
    <CardBody className="text-center">
      <img src={user.avatar_url} className="img rounded-circle img-thumbnail" height="150" width="150"/>
       <CardTitle className="text-primary">
        <h3>{user.login}</h3>
        </CardTitle>
        <CardText className="text-primary">
        <p>{user.location}</p>
        <p>{user.bio}</p>
        <p>
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </p>
        <h5><a className="text-info"  href={user.html_url}>Visit Profile</a></h5>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default UserCard;
