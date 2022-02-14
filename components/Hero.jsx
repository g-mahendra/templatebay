import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen max-w-4xl m-auto flex flex-col items-center justify-center">
      <h2 className="text-2xl my-2 bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
        TemplateBay
      </h2>
      <h3 className="md:text-7xl text-5xl font-extrabold text-center">
        Get the NextJS Template of your choice right here
      </h3>
      <Link href="/designs">
        <a className="w-fit my-8 bg-gradient-to-r from-red-700 to to-pink-700 p-3 rounded-md text-white hover:shadow-2xl hover:shadow-red-700">
          Find Templates
        </a>
      </Link>
    </div>
  );
};

export default Hero;
