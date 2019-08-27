import React from 'react';
import propType from 'prop-types';

function Food({ name }) {
  return <h3>I like {name}</h3>
}

const foodILike = [
  {
    id: 1,
    name: "test1",
    url: "111"
  },
  {
    id: 2,
    name: "test2",
    url: "111"
  },
  {
    id: 3,
    name: "test3",
    url: "111"
  },
]

Food.prototype = {
  name: propType.string.isRequired,
  picture: propType.string.isRequired,
  rating: propType.number.isRequired,
}

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} />)}
    </div>
  );
}

export default App;
