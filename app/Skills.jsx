import {
  CpuChipIcon,
  DevicePhoneMobileIcon,
  ServerStackIcon,
  Square3Stack3DIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

export const Skills = () => {
  return (
    <section className="py-32 bg-neutral-100 px-12">
      <h3 className="uppercase text-center text-2xl font-semibold mb-10">
        My Skills 🧑‍💻
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
        <div className="text-center">
          <WindowIcon className="size-12 mx-auto mb-4" />
          <h4 className="mb-3 text-2xl font-semibold">
            Frontend Web Development
          </h4>
          <p className="text-gray-500">
            Passionate about crafting engaging user experiences with modern web
            technologies. Proficient in building responsive and dynamic
            interfaces using React, Next.js, and Tailwind CSS. Always eager to
            optimize performance and enhance UI/UX for seamless interactions.
          </p>
        </div>
        <div className="text-center">
          <ServerStackIcon className="size-8 mx-auto mb-4" />
          <h4 className="mb-3 text-2xl font-semibold">
            Backend Web Development
          </h4>
          <p className="text-gray-500">
            Experienced in building scalable and efficient server-side
            applications using JavaScript (Node.js), Python (Django, Flask), and
            .NET. Skilled in database management, API development, and
            optimizing backend performance for seamless integration with
            frontend systems.
          </p>
        </div>
        <div className="text-center">
          <DevicePhoneMobileIcon className="size-8 mx-auto mb-4" />
          <h4 className="mb-3 text-2xl font-semibold">
            Mobile App Development
          </h4>
          <p className="text-gray-500">
            Building cross-platform mobile applications with React Native and
            Flutter. Focused on creating smooth, high-performance apps with
            intuitive UI/UX. Passionate about delivering seamless user
            experiences across both Android and iOS.
          </p>
        </div>
        <div className="text-center">
          <CpuChipIcon className="size-8 mx-auto mb-4" />
          <h4 className="mb-3 text-2xl font-semibold">AI ML</h4>
          <p className="text-gray-500">
            Skilled in Python, TensorFlow, Scikit-learn, and Pandas for data
            preprocessing, model training, and evaluation. Passionate about
            building intelligent systems like recommendation engines and image
            classifiers.
          </p>
        </div>
        <div className="text-center">
          <Square3Stack3DIcon className="size-8 mx-auto mb-4" />
          <h4 className="mb-3 text-2xl font-semibold">Tech Stack</h4>
          <p className="text-gray-500">
            Proficient in JavaScript (React, Next.js, Node.js), Python (Django,
            Flask), .NET (C#), and Flutter for mobile development. Experienced
            in full-stack web and mobile app development, database management,
            and API integration to build scalable and efficient applications.
          </p>
        </div>
      </div>
    </section>
  );
};
