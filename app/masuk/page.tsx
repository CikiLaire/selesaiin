import React from "react";

const MasukPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-[#333]">
        <h1 className="text-4xl font-semibold text-[#333] text-center mb-8">
          Masuk dan mulai produktif!
        </h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-[#333] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-black rounded-md focus:outline-none border border-[#333] focus:ring-2 focus:ring-[#333]"
              placeholder="Masukkan email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-[#333] mb-2"
            >
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-black rounded-md focus:outline-none border border-[#333] focus:ring-2 focus:ring-[#333]"
              placeholder="Masukkan kata sandi"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#333] text-white font-semibold rounded-md hover:bg-gray-800 transition"
          >
            Masuk
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-[#333]">
            Belum punya akun?{" "}
            <a
              href="/daftar"
              className="text-[#333] underline hover:text-gray-800"
            >
              Daftar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasukPage;
