import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Contact", href: "/contact" },
];

const blockchains = [
  { name: "Polygon", stakeLink: "/polygon/stake", servicesLink: "/polygon/services", logo: "/images/polygon.png" },
  { name: "Polkadot", stakeLink: "/polkadot/stake", servicesLink: "/polkadot/services", logo: "/images/polkadot.png" },
  { name: "Kusama", stakeLink: "/kusama/stake", servicesLink: "/kusama/services", logo: "/images/kusama.png" },
  { name: "Near", stakeLink: "/near/stake", servicesLink: "/near/services", logo: "/images/near.png" },
  { name: "Harmony", stakeLink: "/harmony/stake", servicesLink: "/harmony/services", logo: "/images/harmony.png" },
  { name: "Celestia", stakeLink: "/celestia/stake", servicesLink: "/celestia/services", logo: "/images/celestia.png" },
  { name: "Dymension", stakeLink: "/dymension/stake", servicesLink: "/dymension/services", logo: "/images/dymension.png" },
  { name: "MultiversX", stakeLink: "/multiversx/stake", servicesLink: "/multiversx/services", logo: "/images/multiversx.png" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          DinhCongTac221
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
          > DinhCongTac221
            
          </Link> - a blockchain enthusiast, I have been involved in crypto for 7 years. I am passionate about contributing to projects and running nodes..
<br />
          <div className="flex justify-center items-center mt-4 space-x-4">
            <Link href="https://discord.com/your-discord-link" target="_blank">
              <img src="/images/discord.png" alt="Discord: Dinhcongtac221" className="w-8 h-8" />
            </Link>
            <Link href="https://twitter.com/your-twitter-link" target="_blank">
              <img src="/images/twitter.png" alt="Twitter" className="w-8 h-8" />
            </Link>
          </div>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {blockchains.map((blockchain) => (
          <div key={blockchain.name} className="flex flex-col items-center bg-black p-4 rounded-lg shadow-lg w-48 h-64">
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
