import Carrousel from "../components/Carrousel";

const Index = () => {
  return (
    <div className="relative h-5/6 mx-auto flex justify-center items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#fca5a5,transparent,transparent)] flex justify-center items-center">
        <h1 className="text-white text-[22rem] font-custom font-black select-none">
          Nike
        </h1>
      </div>
      <div className="relative z-10 flex justify-center">
       <Carrousel />
      </div>

    </div>
  );
};

export default Index;
