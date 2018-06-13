var initialItems = [
  {
    key: 1528702302062,
    text: "learn react",
    done: false
  }, {
    key: 1528702302089,
    text: "learn Go",
    done: true
  }, {
    key: 1528702302348,
    text: "blablabla",
    done: true
  }
];

const items = (state = initialItems, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state, {
          key: Date.now(),
          text: action.item.text,
          done: false
        }
      ]
    case 'DONE_ITEM':
      return state.map(
        item => (item.key === action.key)
        ? {
          ...item,
          done: !item.done
        }
        : item)
    case 'REMOVE_ITEM':
      return state.filter(item => item.key !== action.key);
    default:
      return state
  }
}

export default items;
