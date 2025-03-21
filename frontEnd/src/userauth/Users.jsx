import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    axios.delete("http://127.0.0.1:3001/userauth/deleteUser/" + id)
      .then((result) => {
        console.log(result.data);
        setUsers(result.data);        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/userauth")
      .then((result) => {
        console.log(result.data);
        setUsers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="bg-blue-500 justify-center items-center flex h-screen">
        <div className="bg-white p-10 rounded-xl flex gap-2 flex-col">
          <NavLink
            to="create"
            className={
              "rounded-md max-w-20 px-4 py-2 font-bold bg-green-600 text-white"
            }
            end
          >
            Add +
          </NavLink>
          <table className="border border-gray-300 shadow-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2 text-center">{user.name}</td>
                  <td className="px-4 py-2 text-center">{user.email}</td>
                  <td className="px-4 py-2 text-center">{user.age}</td>
                  <td className="px-4 py-2 flex justify-center gap-2">
                    <NavLink
                      to={`update/${user._id}`}
                      className={
                        "px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      }
                      end
                    >
                      Edit
                    </NavLink>

                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      onClick={(e) => {
                        handleDelete(user._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export { Users };
