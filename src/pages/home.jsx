import qrImage from "../assets/image-qr-code.png";

export default function Home() {
  return (
    <>
      <main className="grid place-content-center h-screen bg-main ">
        <div className="grid w-[380px] place-items-center rounded-2xl text-center overflow-hidden m-10 p-5 bg-white">
          <img className="mb-5 img rounded-2xl" src={qrImage} alt="QR Image" />
          <h1 className="mb-4 mx-4 leading-tight text-[25px] font-bold tracking-tighter text-black">Improve your front-end skills by building projects</h1>
          <p className="mx-4 mb-4 leading-tight text-[19px] tracking-tight text-gray-500">scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </main>
    </>
  );
}
