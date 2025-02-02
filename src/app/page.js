
import Card from "@/Component/Card";
import Header from "@/Component/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
     <div  className="bg-gray-200 text-pink-800 font-extrabold h-96 w-96 flex justify-center items-center text-3xl rounded-lg shadow-lg shadow-pink-700 ">
     <Card></Card>
     </div>
    </div>
  );
}
