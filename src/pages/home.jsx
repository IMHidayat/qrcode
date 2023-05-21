import qrImage from "../assets/image-qr-code.png";

import "../sass/home.scss";

export default function Home() {
  return (
    <>
      <main className="grid px-5">
        <div className="gridm-10 p-5">
          <img className="mb-5" src={qrImage} alt="QR Image" />
          <h1 className="mb-4 mx-4 ">Improve your front-end skills by building projects</h1>
          <p className="mx-4 mb-4 leading-tight text-[19px] tracking-tight text-gray-500">scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </main>
    </>
  );
}
