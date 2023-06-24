export default function Profile() {
  return (
    <>
      <div className=" mx-4 my-4 flex  items-center">
        <div className="flex items-center bg-blue-100 pr-3 rounded-md">
          <p className="px-4">Name</p>
          <div className="rounded-full w-10 py-2">
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              className=" w-full rounded-full"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
