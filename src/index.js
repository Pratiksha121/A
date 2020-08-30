import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = (props) => {
  console.log(props);
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail 
      avatar={faker.image.avatar()}
      author="Sam" 
      timeAgo="Today at 04:35PM"
      content="Heyyaa!!" 
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail 
      avatar={faker.image.avatar()}
      author="Alex" 
      timeAgo="Today at 04:45PM"
      content="Nice blog!!" 
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail 
      avatar={faker.image.avatar()}
      author="Atlas" 
      timeAgo="Today at 04:55PM"
      content="Awesome work!!" 
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
