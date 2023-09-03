import LogoType from "../../assets/images/logotype.png";

function Navbar() {
  return (
    <>
      <div className="w-50 h-20 bg-custom-background">
        <div className="w-1/3 h-full flex flex-row items-center justify-evenly gap-5">
          <img src={LogoType} className="py-3" />
          <h1 className="text-2xl text-white">PodVerse</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
