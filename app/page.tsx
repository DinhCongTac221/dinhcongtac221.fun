import Link from "next/link";
import React from "react";
import Particles from "./components/particles";



const blockchains = [
  { name: "Polygon", stakeLink: "/polygon/stake", servicesLink: "/polygon/services", logo: "https://static.wixstatic.com/media/7191ae_5988ff0713cc4dac8673d7210f5ca6db~mv2.png/v1/fill/w_216,h_231,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Polygon.png" },
  { name: "Polkadot", stakeLink: "/polkadot/stake", servicesLink: "/polkadot/services", logo: "https://static.wixstatic.com/media/7191ae_5988ff0713cc4dac8673d7210f5ca6db~mv2.png/v1/fill/w_216,h_231,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Polygon.png" },
  { name: "Kusama", stakeLink: "/kusama/stake", servicesLink: "/kusama/services", logo: "https://static.wixstatic.com/media/7191ae_5988ff0713cc4dac8673d7210f5ca6db~mv2.png/v1/fill/w_216,h_231,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Polygon.png" },
  { name: "Near", stakeLink: "/near/stake", servicesLink: "/near/services", logo: "https://static.wixstatic.com/media/7191ae_5988ff0713cc4dac8673d7210f5ca6db~mv2.png/v1/fill/w_216,h_231,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Polygon.png" },
  { name: "Polygon", stakeLink: "/polygon/stake", servicesLink: "/polygon/services", logo: "https://static.wixstatic.com/media/7191ae_5988ff0713cc4dac8673d7210f5ca6db~mv2.png/v1/fill/w_216,h_231,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Polygon.png" },
  { name: "Polkadot", stakeLink: "/polkadot/stake", servicesLink: "/polkadot/services", logo: "https://static.wixstatic.com/media/7191ae_5988ff0713cc4dac8673d7210f5ca6db~mv2.png/v1/fill/w_216,h_231,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Polygon.png" },
  { name: "Kusama", stakeLink: "/kusama/stake", servicesLink: "/kusama/services", logo: "https://static.wixstatic.com/media/7191ae_5988ff0713cc4dac8673d7210f5ca6db~mv2.png/v1/fill/w_216,h_231,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Polygon.png" },
  { name: "Near", stakeLink: "/near/stake", servicesLink: "/near/services", logo: "https://static.wixstatic.com/media/7191ae_5988ff0713cc4dac8673d7210f5ca6db~mv2.png/v1/fill/w_216,h_231,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Polygon.png" },

];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          DinhcongTac221
        </h1>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I'm {" "}
          <Link
            target="_blank"
            href="https://github.com/dinhcongtac221"
            className="underline duration-500 hover:text-zinc-300"
          >DinhCongTac221
            
          </Link>a blockchain enthusiast, I have been involved in crypto for 7 years. I am passionate about contributing to projects and running nodes..
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {blockchains.map((blockchain) => (
          <div key={blockchain.name} className="flex flex-col items-center bg-black p-4 rounded-lg shadow-lg">
            <img src={blockchain.logo} alt={`${blockchain.name} logo`} className="w-16 h-16 mb-4" />
            <h3 className="mb-2 text-xl text-white">{blockchain.name}</h3>
            <Link href={blockchain.stakeLink}>
              <a className="mb-2 text-sm text-white bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-700">Stake</a>
            </Link>
            <Link href={blockchain.servicesLink}>
              <a className="text-sm text-white bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-700">Services</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
