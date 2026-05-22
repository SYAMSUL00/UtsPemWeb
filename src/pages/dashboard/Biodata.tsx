export default function Biodata() {
    return (
        <div className="max-w-4xl mx-auto p-4 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-950 tracking-tight">
                    Biodata Mahasiswa
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Informasi akademik dan data diri resmi mahasiswa.
                </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/80">
                <div className="h-32 bg-blue-600 relative" />

                <div className="px-8 pb-8 relative">
                    
                    <div className="absolute -top-14 left-8">
                        <div className="w-28 h-28 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-white">
                            SH
                        </div>
                    </div>

                    <div className="pt-16 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Syamsul Hidayatulloh
                            </h2>
                            <p className="text-blue-600 font-medium text-sm mt-0.5">
                                NIM: 24090117
                            </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                            Mahasiswa Aktif
                        </span>
                    </div>

                    <hr className="my-6 border-gray-100" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-gray-50/60 border border-gray-100 hover:bg-gray-50 transition-colors">
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Kelas
                            </p>
                            <p className="font-semibold text-gray-800 text-lg mt-1">
                                4D
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50/60 border border-gray-100 hover:bg-gray-50 transition-colors">
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Program Studi
                            </p>
                            <p className="font-semibold text-gray-800 text-lg mt-1">
                                D4 Teknik Informatika
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50/60 border border-gray-100 hover:bg-gray-50 transition-colors md:col-span-2">
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Mata Kuliah
                            </p>
                            <p className="font-semibold text-gray-800 text-lg mt-1 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block" />
                                Pemrograman Web 2
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}