import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSend= {
      name,
      email,
      age,
    };
    axios
      .post("http://localhost:3001/userauth/createUser", dataToSend)
      .then((res) => {
        console.log(res);
        navigate("/userauth/");0
        console.log("navigate")
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setEmail("");
    setAge("");
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
              onChange={(e) => {
                setName(e.target.value);
                console.log(e.target.value)
              }}
              value={name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="pl-3 py-1 block rounded-[4px] border w-full border-gray-200"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              placeholder="Enter Age"
              className="pl-3 py-1 block rounded-[4px] border w-full border-gray-200"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            <div className="flex justify-center mt-2">
              <button className="px-4 py-1 rounded-md text-white bg-green-600 min-w-3xl hover:bg-green-900">
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
