import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const Dishdetail = ({ dish }) => {
  if (dish === null) {
    return null;
  }

  const renderComments = (comments) => {
    const list = !comments
      ? "no comments yet"
      : comments.map((item) => {
          return (
            <li key={item.id}>
              <div>{item.comment}</div>
              <div>
                {item.author}, {item.date}
              </div>
            </li>
          );
        });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{list}</ul>
      </div>
    );
  };

  return (
    <div className="row">
      <div className="col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              <h4>{dish.name}</h4>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-md-5 m-1">{renderComments(dish.comments)}</div>
    </div>
  );
};

export default Dishdetail;
