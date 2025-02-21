import Image from "next/image";
import carbon from "@/public/carbon.svg";
import githubLogoWhite from "@/public/github-mark-white.svg";
import curveLine from "@/public/curve_line.svg";
import { Skills } from "./Skills";
import { Projects } from "./Project";

export default function Home() {
  return (
    <div className="px-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-32 min-h-screen">
        <div>
          <p className="text-emerald-700 text-lg font-semibold">
            Hi, my name is
          </p>
          <h3 className="text-5xl md:text-8xl font-bold">Sami Nafis</h3>
          <p className="mt-4 text-lg">Software Engineer 👨‍💻 | Student 👨‍🎓</p>
          <button className="mt-4 bg-black text-white flex items-center gap-3 px-4 py-2 rounded-md">
            <Image src={githubLogoWhite} alt="Github logo" height={30} />
            <a href="https://www.github.com/saminafisdev/" target="_blank">
              View Profile
            </a>
          </button>
        </div>
        <Image src={carbon} alt="Carbon" height={350} />
        <Image
          src={curveLine}
          alt="Carbon"
          width={800}
          className="absolute top-0 right-0"
        />
      </section>
      <Skills />
      <Projects />
    </div>
  );
}
