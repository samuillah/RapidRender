import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Link from "next/link";
import AboutPage from "../app/About-us/page"

export default function HomePage() {
  return (
    <div>
      <Header/>
      <br />
      <Hero/>
      <br />
      <h1 className="bg-yellow-300 text-center font-black uppercase text-lg ">Create Your Own Path</h1>
      <p className="text-violet-600">You have the power to create your own path in life. Don't be afraid to step outside the conventional and pursue what truly inspires you. Listen to your heart, follow your passions, and carve out a journey that resonates with who you are. The opinions of others should not dictate your choices; only you know what makes you feel alive. Trust your instincts, take bold steps, and don’t hesitate to chase after what sets your soul on fire. The world needs your unique perspective and contributions!</p>
      {/* <button className="bg-lime-400 p-2 m-2 border-6 rounded-lg hover:bg-red-700 ">About</button> */}
      <Link href = "/About-us" className="bg-lime-400 p-2 m-4 border-6 rounded-lg hover:bg-red-700 button">About Us</Link>
      <br />
      <Footer/>
    </div>
  );
}
