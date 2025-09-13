import { motion } from "framer-motion";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
function Details() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const [loadingDone, setLoadingDone] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const shouldAnimate = searchParams.get("animate") === "true";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true);
      if (shouldAnimate) {
        navigate(`/oroginalProducts/${id}`, { replace: true });
      }
    });
    return () => clearTimeout(timer);
  }, [shouldAnimate, navigate, id]);

  const productDetail = [
    {
      id: "fe",
      title: "Flexara",
      overView: "Project Overview",
      overViewIcon: "/images/all/lump.png",
      featuresAndImplementation: "Features and Implementation",
      featureIcon: "/images/all/SSS.png",
      content1:
        "Flexara is e mobile application designed to revolutionize physical therapy by providing users with tools to track their progress, communicate seamlessly with their doctors, and achieve optimal therapy results. With UI/UX design with robust functionality to enhance the overall patient experience.",
      content2:
        "In this  step we begin with user journey from sign-up and login to progress tracking ,schedules and communicate with doctorand every thing user need during his journey.",
      phoTotop: "/images/all/Top (1).png",
      photoBotom: "/images/all/Bottom.svg",
      bolit1: "/images/all/Ellipse 113.svg",
      bolit2: "/images/all/Ellipse 114.svg",
      demoLogo: "/images/all/flexara.jpg",
    },
    {
      id: "sup",
      title: "SUPPORTIFY",
      overView: "Project Overview",
      overViewIcon: "/images/all/SSS.png",
      featuresAndImplementation: "Features and Implementation",
      featureIcon: "/images/all/SSS.png",
      content1:
        "Supportify is an innovative platform that empowers individuals to make a real impact through donations and volunteering. Every action—whether it’s contributing to a cause, joining a community initiative, or giving your time—earns users reward points, creating a cycle of engagement and encouragement.",
      content2:
        "With built-in features for tracking contributions, redeeming rewards, and connecting with organizations, Supportify makes giving back simple, motivating, and rewarding. Designed for seamless implementation, it can be easily integrated into community programs, NGOs, and CSR initiatives to drive meaningful participation at scale.",
      phoTotop: "/images/all/Top.png",
      photoBotom: "/images/all/Bottom.svg",
      bolit1: "/images/all/Ellipse 113.svg",
      bolit2: "/images/all/Ellipse 114.svg",
      demoLogo: "/images/all/supportify.jpg",
    },
  ];

  const product = productDetail.find((item) => item.id === id);

  if (!loadingDone) return null;

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500">Service not found!</div>
    );
  }

  return (
    <div className="h-[823px] overflow-hidden font-poppins bg-white text-black">
      <div className="w-full h-full relative">
        <div className="absolute z-[0] top-[-365px] left-[962px] w-[732px] h-[763px] bg-[#0C74BC0F] rounded-full "></div>

        <div className="absolute top-[386px] bg-[#0C74BC0F] left-[-327px] w-[732px] h-[763px] rounded-full">
          <div className="absolute inset-0  rounded-full z-[-10]"></div>

          <div className="w-full h-full flex justify-end">
            <div className="relative top-[280px] right-[82px] w-[324px] h-[128px] group cursor-pointer z-10">
              <Link to="/ourProducts?from=details">
                <div className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  <img
                    alt="go back1"
                    src="/images/all/Group 9010.png"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full h-full"
                  />

                  <h1 className="absolute font-light bg-[#F2F8FD] blue1 top-[50%] right-[20px]">
                    Back To Products
                  </h1>
                </div>

                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <img
                    alt="go back2"
                    src="/images/all/Group 9010 (1).png"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full h-full"
                  />

                  <h1 className="absolute text-[20px] bg-[#F2F8FD] blue1 top-[40%] right-[0px]">
                    Back To Products
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full ps-20 pt-10">
          <div className="grid  grid-cols-12">
            <div className="col-span-6">
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="font-semibold text-[30px] mb-14 blue1">
                    {product.title}
                  </h1>
                  <div className="flex flex-row gap-9">
                    <div className="w-[63px] h-[63px] relative hover:rotate-45 transition-transform duration-500 shrink-0">
                      <img
                        alt="lump"
                        className="object-contain"
                        src="/images/all/lump.png"
                      />
                    </div>
                    <div className="flex flex-col gap-3 pt-5">
                      <h1 className="font-bold text-[25px]">
                        {product.overView}
                      </h1>
                      <p className="text-[16px] w-[378px]">
                        {product.content1}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-9">
                  <div className="w-[63px] h-[63px] relative hover:rotate-45 transition-transform duration-500 shrink-0">
                    <img
                      alt="set"
                      className="object-contain"
                      src="/images/all/sss.png"
                    />
                  </div>
                  <div className="flex flex-col  pt-5 gap-3">
                    <h1 className="font-bold text-[25px]">
                      {product.featuresAndImplementation}
                    </h1>
                    <p className="text-[16px] w-[400px]">{product.content2}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6 justify-items-center  content-center  me-20  ">
              <div className="flex flex-col w-fit justify-center items-center relative  ">
                <motion.div
                  className="relative w-[545px] h-[361px] group cursor-pointer"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  onClick={() => setIsOpen(true)}
                >
                  <motion.div
                    className="absolute left-[500px] top-[-47px] w-[100px] h-[100px] rounded-[50%] gradient-ball z-[10]"
                    variants={{
                      rest: { y: 0, zIndex: 1 },
                      hover: { y: 350, zIndex: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />

                  <motion.div
                    className="absolute left-[-65px] top-[317px] w-[100px] h-[100px] rounded-[50%] gradient-ball2 "
                    variants={{
                      rest: { y: 0, zIndex: 0 },
                      hover: { y: -350, zIndex: 1 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />

                  <img
                    alt="top"
                    src={product.phoTotop}
                    className="rounded-xl object-contain transition duration-300 group-hover:blur-[3px] brightness-75"
                  />

                  <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <span className="text-white text-[25px] font-medium w-[264px] h-[65px] flex justify-center items-center border-4">
                      See demo
                    </span>
                  </div>
                </motion.div>

                <div className="relative w-[674] -h-[12px]">
                  <img
                    width={0}
                    height={0}
                    alt="bottom"
                    src={product.photoBotom}
                    className="z-[1] w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000]">
          <div className="relative w-[1000px] h-[600px] rounded-lg overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute z-20 top-3 right-3 text-white text-xl font-bold"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow cursor-pointer hover:bg-gray-100">
                <X size={18} className="text-gray-800" />
              </span>
            </button>

            <div className="absolute w-full h-full inset-0">
              <img alt="popup" src={product.demoLogo} className=" blur-[5px]" />
              <div className="absolute flex flex-col text-white justify-center items-center  inset-0 bg-black/40 font-outfit ">
                <h1 className=" w-fit flex justify-center items-center text-[70px]">
                  COMING S
                  <div className="flex ">
                    <span className="w-[33px] h-[33px]">
                      {" "}
                      <img
                        className="w-full h-full "
                        alt="eyes"
                        sizes="100vh"
                        width={0}
                        height={0}
                        src="/images/all/leftEye.png"
                      ></img>
                    </span>
                    <span className="w-[33px] h-[33px]">
                      {" "}
                      <img
                        className="w-full h-full"
                        alt="eyes"
                        sizes="100vh"
                        width={0}
                        height={0}
                        src="/images/all/rightEye.png"
                      ></img>
                    </span>
                  </div>
                  N
                </h1>
                <p className="text-[20px]">
                  We are going to launch Supportify very soon, Stay tune.
                </p>
              </div>
            </div>

            <div className="absolute inset-0 border-[10px] border-white rounded-lg "></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
