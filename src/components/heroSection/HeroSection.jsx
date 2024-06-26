import { useContext } from "react";
import myContext from "../../context/data/myContext";
import imgIcon from "../../assets/logo.png";

function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section style={{ background: mode === "dark" ? "#464866" : "#d6536d" }}>
      {/* Hero Section  */}
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* Main Content  */}
        <main>
          <div className="text-center">
            <div className="mb-2">
              {/* Image  */}
              <div className="flex justify-center">
                <img className="imgLogo" src={imgIcon} alt="" />
              </div>

              {/* Text  */}
              <h1 className=" text-3xl text-white font-bold">
                Explore. Inspire. Transform.
              </h1>
            </div>

            {/* Paragraph  */}
            <p
              style={{ color: mode === "dark" ? "white" : "white" }}
              className="sm:text-3xl text-xl font-extralight sm:mx-auto "
            >
              Welcome to Dreamscape Diaries – your go-to blog for everything
              storytelling and imagination. Whether you &apos; re here to read,
              write, or find a spark of inspiration, we &apos; ve got a place
              just for you.
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default HeroSection;
