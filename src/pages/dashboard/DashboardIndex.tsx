export default function DashboardIndex() {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Halaman Dashboard</h1>
                <p className="text-gray-500 mt-1">Selamat datang di halaman dashboard Invofest</p>
            </div>

            {/* kartu statistik */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-red-900">
                    <p className="text-sm text-gray-500">Total Category</p>
                    <h2 className="text-3xl font-bold text-gray-800 mt-1">0</h2>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-red-900">
                    <p className="text-sm text-gray-500">Total Speaker</p>
                    <h2 className="text-3xl font-bold text-gray-800 mt-1">0</h2>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-red-900">
                    <p className="text-sm text-gray-500">Total Event</p>
                    <h2 className="text-3xl font-bold text-gray-800 mt-1">0</h2>
                </div>
            </div>

            {/* info */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Informasi</h2>
                <p className="text-gray-500 text-sm">Gunakan menu di sidebar untuk mengelola data kategori, speaker, dan event.</p>
            </div>
        </div>
    );
}