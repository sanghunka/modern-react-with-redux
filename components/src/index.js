import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from "@faker-js/faker";
import CommentDetail from './CommentDetail'; // You don't have to put the actual file extension on there so long

const App = () => {
  return (
    <div className="ui container comments">
        <CommentDetail author="sam" />
        <CommentDetail author="Alex" />
        <CommentDetail author="Jane" />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'))