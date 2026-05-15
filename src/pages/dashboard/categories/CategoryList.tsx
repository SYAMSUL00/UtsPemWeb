import { Link } from "react-router-dom";

export default function CategoryList() {
    return (
        <div className="p-6">
            <h1>List Category</h1>

            <Link
                to="/dashboard/category/create"
                className="p-4 bg-red-500 text-white inline-block mt-4"
            >
                Tambah Category
            </Link>
        </div>
    );
}