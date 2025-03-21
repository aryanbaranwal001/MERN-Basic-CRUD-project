import { ClientPage } from "./clientPage/ClientPage";
import { BrowserRouter, Routes, Route } from "react-router";
import { Users, UpdateUser, CreateUser } from "./userauth"; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/clientpage" element={<ClientPage />} />

          <Route path="/userauth">   
            <Route index element={<Users />} />
            <Route path="create" element={<CreateUser />} />
            <Route path="update/:id" element={<UpdateUser />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
