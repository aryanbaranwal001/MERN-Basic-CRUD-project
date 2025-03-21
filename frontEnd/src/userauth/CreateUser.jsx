function CreateUser() {

  const handleSubmit = (event) => {
    event.preventDefault(); 
  };



  return (
    <>
      <div className="bg-blue-500 justify-center items-center flex h-screen">
        <div className="w-3/12 bg-white p-6 rounded-xl flex gap-2 flex-col">
          
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <h2 className="text-3xl">Add User</h2>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="pl-3 py-1 block rounded-[4px] border w-full border-gray-200"
            />

            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="pl-3 py-1 block rounded-[4px] border w-full border-gray-200"
            />

            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="pl-3 py-1 block rounded-[4px] border w-full border-gray-200"
            />
            <div className="flex justify-center mt-2">
              <button className="px-4 py-1 rounded-md text-white bg-green-600 min-w-3xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export { CreateUser };
