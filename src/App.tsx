import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import CreateCategory from "./pages/dashboard/categories/CreateCategory";
import CategoryList from "./pages/dashboard/categories/CategoryList";
import EventList from "./pages/dashboard/events/EventList";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CreateSpeaker from "./pages/dashboard/speakers/CreateSpeaker";
import CreateEvent from "./pages/dashboard/events/CreateEvent";
import SpeakerList from "./pages/dashboard/speakers/SpeakerList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* landing page */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        {/* auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardIndex />} />
            <Route path="/dashboard/category" element={<CategoryList />} />
            <Route path="/dashboard/category/create" element={<CreateCategory />}/>
            <Route path="/dashboard/events" element={<EventList />} />
            <Route path="/dashboard/events/create" element={<CreateEvent />} />
            <Route path="/dashboard/speakers" element={<SpeakerList />} />
            <Route path="/dashboard/speakers/create" element={<CreateSpeaker />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;