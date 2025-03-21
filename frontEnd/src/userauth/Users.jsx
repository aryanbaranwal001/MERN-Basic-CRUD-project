import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      age: 20,
    },
    {
      name: "John Doe",
      email: "johdddddddddddddddddddndoe@gmail.com",
      age: 20,
    },    
  ]);

  return (
    <>
      <div className="bg-blue-500 justify-center items-center flex h-screen">
        <div className="bg-white p-4 rounded-xl ">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              
              {
                users.map((user) => {
                  return(
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>
                        <button>Edit</button>
                        <button>Delete</button>
                      </td>
                    </tr>

                  );
                })
              }



            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export { Users };
