import qrImage from "../assets/image-qr-code.png";

export default function Home() {
  return (
    <>
      <main className="grid place-content-center h-screen bg-main ">
        <div className="rounded-2xl overflow-hidden m-10 p-5 bg-white">
          <img className="mb-5 img rounded-2xl bg-red-500" src={qrImage} alt="QR Image" />
          <h1 className="text-center text-xl font-bold">Improve your front-end skills by building projects</h1>
        </div>
      </main>
    </>
  );
}
