import Button from "@/components/Button/page";
import Navbar from "@/components/Navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* opening site */}
      <div className="flex items-center justify-center min-h-screen w-full bg-dark">
        <div className="flex gap-7 items-center justify-center max-w-7xl w-full px-24 py-10">
          <div className="w-full">
            <h1 className="text-7xl font-bold my-5">
              Selamat <span className="bg-primary text-dark px-2">Datang</span>{" "}
              !!
            </h1>
            <p className="text-lg">
              Ayo mulai ngatur keuanganmu dengan aplikasi ini. Aplikasi ini
              dirancang untuk membantu kamu mengelola keuanganmu dengan lebih
              mudah dan efisien. Dengan fitur-fitur yang lengkap dan antarmuka
              yang sederhana, kamu dapat dengan mudah mencatat pengeluaran dan
              pemasukan kamu, serta melihat laporan keuanganmu secara real-time.
              Ayo mulai !!
            </p>

            <div>
              <Button text="Mulai Sekarang" type="href" href="/login" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
