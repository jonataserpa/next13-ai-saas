"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-18 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Jonata Serpa</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700">
          <TypewriterComponent
            options={{
              strings: [
                " - FullStack - ",
                "FronEnd - (React, Angular, Vue)",
                "BackEnd - (Nodejs, PHP, Java)",
                "DevOps - (Kubernetes, Observabilidade)"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Arquiteto de Software - Foco em desenvolvimento em soluções web
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Projeto criado usando IA
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Teste agora mesmo
      </div>
    </div>
  );
};
