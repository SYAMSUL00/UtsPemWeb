import { Link } from "react-router-dom";

export default function EventList() {
    return (
        <div className="p-6">
            <h1>List Events</h1>

            <Link
                to="/dashboard/events/create"
                className="p-4 bg-red-500 text-white inline-block mt-4"
            >
                Tambah Events
            </Link>
        </div>
    );
}