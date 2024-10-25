import "./style.css"
import foto from "./assets/foto.jpeg"
function App() {
  return (
    <div>
      <div className="bg-gray-900 text-gray-200 flex h-[70px] justify-center font-bold space-x-36">
        <h1 className="hover:underline cursor-pointer mt-5">AboutMe</h1>
        <h1 className="hover:underline cursor-pointer mt-5">skill</h1>
        <h1 className="hover:underline cursor-pointer mt-5">contact</h1>
      </div>
    <div className="bg-gray-50 h-[530px] flex">
      <div className="h-16 mt-6 ml-16 ">
        <p className="underline mt-[30px] text-7xl mb-14 italic">About me</p>
        <div className="ml-20"> 
        <p className="font-bold text-2xl"> hello!</p>
        <p>aku tiara suci clarissa. student fullstack web development</p>
        <p>di purwadhika digital school yang penuh semangat, berusaha</p>
        <p>mengasah keterampilan untuk menjadi developer profesional.</p>
        <p>dengan memutuskan untuk melanjutkan sekolah di</p>
        <p>purwadhika digital school aku yakin akan dapat lebih</p>
        <p>menguasai bidang yang aku inginkan.</p>
        <p className="font-bold mt-10 ml-5">"can't wait to be part of the succes"</p>
        </div>
      </div>
      <div className="mt-10 ml-[120px]">
      <img src={foto} alt="fotoku" className="rounded-t-full w-[450px] h-[400px]"></img>
      </div>
    </div>
    </div>
  );
}

export default App
