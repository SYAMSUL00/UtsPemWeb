import { Link } from "react-router-dom";

export default function SpeakerList() {
    return (
        <div className="p-6">
            <h1>List Speakers</h1>

            <Link
                to="/dashboard/speakers/create"
                className="p-4 bg-red-500 text-white inline-block mt-4"
            >
                Tambah Speaker
            </Link>
        </div>
    );
}