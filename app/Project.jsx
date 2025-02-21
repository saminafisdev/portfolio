import Image from "next/image";

import sorce from "@/public/sorce.png";
import neonid from "@/public/neonid.png";

export const Projects = () => {
  return (
    <section className="py-32">
      <div className="mb-8">
        <h3 className="text-4xl font-semibold mb-4 text-center">My Projects</h3>
        <p className="text-gray-500 text-center text-xl">
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I'm here to turn your digital dreams
          into reality.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <Image src={sorce} alt="sorce.io" height={450} />
          <p className="text-xl font-semibold">sorce.io</p>
        </div>
        <div>
          <Image src={neonid} alt="sorce.io" height={450} />
          <p className="text-xl font-semibold">Neon-ID</p>
        </div>
      </div>
    </section>
  );
};
