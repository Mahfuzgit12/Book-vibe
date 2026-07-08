import bookimg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-3xl container mx-auto px-6 m-3 mt-8 lg:px-16">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-between items-center gap-12 w-full">

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={bookimg}
            alt="Books"
            className="w-72 md:w-96 lg:w-[420px] object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Books to freshen
            <br />
            up your bookshelf
          </h1>

          <button className="btn btn-success px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View The List
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;