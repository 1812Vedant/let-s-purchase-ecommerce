export default function CartReducer(state, action) {
  switch (action.type) {
    case "delete": {
      return state.filter((el) => el.name != action.product);
    }
    case "add": {
      return [...state, action.product];
    }
  }
}
