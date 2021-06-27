import React, { useState, useEffect } from 'react';

// Reducer Function
function reducer(state = initialState, action) {

  // action: { type: 'FOO', payload: 77 }

  const { type, payload } = action;

  switch (type) {
    case 'Food':
      return { ...catList, active: catList };
    case 'Electronics':
      return { ...state, count: state.count + 1 }
    default:
      return state;
  }

}


// Action Creator: A function that returns an action object

// initialize(10)
export const initialize = (number) => {
  return {
    type: 'INITIALIZE',
    payload: number
  }
}

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}


function Categories() {
  let categoryState = {
    active: '',
    categories: [
      { cat: 'Food', description: 'Food Description' },
      { cat: 'Electronics', description: 'Electronics Description' }
    ]
  };

  const [catList, setCatList] = useState(categoryState);

  useEffect(() => {
    setCatList(categoryState);
  }, []);

  console.log(catList);

  return (
    <>
      <div id="categoryLinks">
        Browse our Categories
        <ul>
          {catList.categories.map((item) => (
            <li className={`category-${item.cat.toString()}`} key={item.cat.toString()}>
            </li>
          ))}
        </ul>
      </div>
      <h2>
        {categoryState.active}
      </h2>
    </>
  );

}

export default Categories;
