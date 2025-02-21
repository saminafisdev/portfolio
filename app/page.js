import Image from "next/image";
import carbon from "@/public/carbon.svg";
import githubLogoWhite from "@/public/github-mark-white.svg";
import { Skills } from "./Skills";
import { Projects } from "./Project";

export default function Home() {
  return (
    <div className="p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="flex items-center justify-center gap-32 min-h-screen">
        <div>
          <p className="text-indigo-700 text-lg font-semibold">
            Hi, my name is
          </p>
          <h3 className="text-8xl font-bold">Sami Nafis</h3>
          <p className="mt-4 text-lg">Software Engineer 👨‍💻 | Student 👨‍🎓</p>
          <button className="mt-4 bg-black text-white flex items-center gap-3 px-4 py-2 rounded-md">
            <Image src={githubLogoWhite} alt="Github logo" height={30} />
            <a href="https://www.github.com/saminafisdev/" target="_blank">
              View Profile
            </a>
          </button>
        </div>
        <Image src={carbon} alt="Carbon" width={800} />
      </section>
      <Skills />
      <Projects />
    </div>
  );
}
