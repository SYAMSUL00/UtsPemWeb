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
                    <Route path="/" element={<Beranda/>} />
                    <Route path="/competition" element={<Competition/>}/>
                    <Route path="/seminar" element={<Seminar/>}/>
                    <Route path="/talkshow" element={<Talkshow/>}/>
                    <Route path="/workshop" element={<Workshop/>}/>
                </Route>

                {/*Auth */}
                <Route element={<AuthLayout />} >
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Route>      
            </Routes>
        </BrowserRouter>
    );
}

export default App;