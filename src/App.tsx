<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Talkshow from "./pages/Talkshow";
import Seminar from "./pages/Seminar";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Workshop from "./pages/Workshop";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*Landing page*/}
                <Route element={<MainLayout />} >
                    < Route path="/" element={<Beranda/>} />
                    < Route path="/competition" element={<Competition/>}/>
                    < Route path="/seminar" element={<Seminar/>}/>
                    < Route path="/talkshow" element={<Talkshow/>}/>
                    < Route path="/workshop" element={<Workshop/>}/>
                </Route>

                {/*Auth */}
                <Route element={<AuthLayout />} >
                    < Route path="/login" element={<Login/>}/>
                    < Route path="/register" element={<Register/>}/>
                </Route>      

                {/*dashboard */}
            </Routes>
        </BrowserRouter>
=======
import Register from "./pages/Register";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center gap-40 p-8">
            <Register />
        </div>
>>>>>>> 8a0fa43db7d0eaafe28b2230f01a4d3f0dfad5b7
    );
}

export default App;