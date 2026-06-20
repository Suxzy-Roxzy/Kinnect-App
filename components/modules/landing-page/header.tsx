import Particles from "@/components/ui_animation/Particles";

const Header = () => {
  return (
    <div className="w-full overflow-x-hidden relative flex justify-center items-center bg-linear-to-l from-[#195583] to-[#0f172a]">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={200}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className=" absolute flex flex-col justify-center items-center w-full max-w-5xl h-100 bg-card border-border rounded-lg m-auto p-10 text-center ring-offset-blue-900 ring-2">
        <div className="flex flex-col items-center leading-32">
          <span className=" flex text-[140px] font-extrabold text-gray-900 dark:text-[#98DFEA]">
            KIN
            <span className="bg-linear-to-r from-[#195583] to-[#0f172a] text-transparent bg-clip-text dark:text-[#98DFEA]">
              NECT
            </span>
          </span>
          <span className="font-extrabold text-[120px] -mt-3 dark:text-[#98DFEA]">
            AP
            <span className="bg-linear-to-r from-[#7198b6] to-[#233965] text-transparent bg-clip-text dark:text-[#98DFEA]">
              P
            </span>
          </span>
        </div>
        <p className="text-wrap font-bold mt-4 text-lg">
          Kinnect is a secure space where relationships and information stay
          connected. It helps you organize and maintain trusted connections with
          family, friends, and organizations, keeping important personal and
          professional details accessible at all times. Even across distance or
          loss, Kinnect makes reconnecting simple, familiar, and reliable.
        </p>
      </div>
    </div>
  );
};

export default Header;
