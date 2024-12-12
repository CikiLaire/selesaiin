import Link from "next/link";
import React from "react";
import { BackgroundLines } from "@/app/components/ui/background-lines";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* header */}
      <section className="w-full z-50 relative">
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-6 mx-20">
            <div>
              <Link href={"/"}>
                <img src="logo/logo.png" alt="logo" width={150} />
              </Link>
            </div>
            <div className="text-md flex gap-5 items-center">
              <Link
                href={"/masuk"}
                className="bg-[#333] text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* dashboard */}
      <BackgroundLines>
        <section className="container mx-auto mt-44 p-6 text-[#333]">
          <div className="text-center flex justify-center items-center">
            <div>
              <h1 className="text-6xl font-semibold leading-[55px]">
                Satu langkah menuju <br />
                <span
                  className="py-2"
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  produktivitas.
                </span>
              </h1>
              <p className="mt-10 text-2xl font-semibold text-slate-600">
                Dengan Selesaiin, rencanakan, lacak, dan <br /> selesaikan tugas
                dengan efisien tanpa ada yang terlewat.
              </p>
              <p className="text-lg font-semibold mt-3 text-slate-600">
                Aplikasi To-Do-List.
              </p>
            </div>
          </div>
        </section>
      </BackgroundLines>
      {/*  */}
    </div>
  );
};

export default Home;
