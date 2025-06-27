import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Section13 = () => {
  return (
    <div className="relative overflow-visible my-[100px]">
      <section className="py-8 bg-gray-100 relative overflow-visible">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start relative">
         
          <div className="md:w-1/2 w-full mb-2 md:mb-0 z-10">
            
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
            </h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
              blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
              tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis
              porta nisl felis. Massa in facilisis semper libero eget eu quisque
              bibendum platea. Tortor fames.
            </p>
            <Link href="/lorem-ipsum">
              <span className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 cursor-pointer">
                Loerum Ipsum <span className="ml-2">→</span>
              </span>
            </Link>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end relative ">
            <div className="md:absolute md:-top-16 border-4 border-blue-500  ">
              <Image
                src="/sect13.png"
                alt="Customer with Scooter"
                width={500}
                height={600}
                unoptimized //overflow-hidden
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom Card Overlapping at Left */}
        <div className="max-w-7xl mx-auto px-2 relative">
          <div className="bg-white p-6 rounded-lg shadow-md md:w-1/3 w-full relative md:-bottom-30 -bottom-10 z-20">
            <h3 className="text-lg font-semibold mb-4">
              Lorem ipsum dolor sit
            </h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
              amet habitasse semper.
            </p>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
              placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc
              id tristique sit.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
              quisque scelerisque facilisi. Ultrices lectus viverra pharetra
              commodo.
            </p>
          </div>
        </div>

        {/* Gradient Bar Positioned at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 z-10"></div>
      </section>
    </div>
  );
};

export default Section13;
