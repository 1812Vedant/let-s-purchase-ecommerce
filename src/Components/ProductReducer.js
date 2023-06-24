const ProductReducer = function (items, action) {
  switch (action.type) {
    case "search": {
      return action.products;
    }
  }
};

export default ProductReducer;
