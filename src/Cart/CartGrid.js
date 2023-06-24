export default function CartGrid({ dispatch, state }) {
  const sum = state.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    <>
      <div className="grid grid-cols-1  border-blue-700 border-2 rounded-md mx-2 my-2 gap-2">
        <div className="grid grid-cols-3 gap-2 mx-2 my-2">
          <p className="bg-blue-700 rounded-md px-2 ">Sr NO</p>
          <p className="bg-blue-700 rounded-md px-2 ">Name</p>
          <p className="bg-blue-700 rounded-md px-2 ">Price</p>
        </div>

        {state.map((el, idx) => {
          return (
            <div className="grid grid-cols-3 gap-2 mx-2 my-2">
              <p className="bg-blue-300 rounded-md px-2 ">{idx + 1}</p>
              <p className="bg-blue-300 rounded-md px-2 ">{el.name}</p>
              <p className="bg-blue-300 rounded-md px-2 ">{el.price}</p>
            </div>
          );
        })}
        <div className="grid grid-cols-3 gap-2 mx-2 my-2">
          <p className="  px-2 font-bold  border-blue-700 border-2 rounded-md ">
            Total
          </p>
          <button className=" rounded-md px-2 bg-blue-700 hover:bg-blue-500 transition">
            Make Payment
          </button>
          <p className="  px-2 font-bold  border-blue-700 border-2 rounded-md">
            {sum}
          </p>
        </div>
      </div>
    </>
  );
}
