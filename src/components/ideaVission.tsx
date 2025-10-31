import { Link } from "react-router-dom";
import Button from "./button";

function IdeaVision() {
  return (
    <div className="grid grid-cols-12 gap-3 h-[839px] content-center items-center bg-white">
      <div className="col-span-7 font-poppins ps-15">
        <div className="flex flex-col gap-10">
          <p className="text-[16px] blue1">
            Smart solutions fair pricing. Real results
          </p>
          <h1 className="text-[40px] font-medium  max-w-[612px]">
            {" "}
            Focus on Your Vision - We'll Handle the Cost Smartly
          </h1>
          <div className="text-[18px] max-w-[652px]  text-[#000000B2]">
            <p>
              {" "}
              At Prognil, we believe great ideas shouldn't be stopped by high
              prices. We offer flexible, tailored software solutions that fit
              your business needs and your budget
            </p>
            <p>
              Get the service you deserve, and pay only for the actual work you
              need.
            </p>
          </div>

          <Link to={"/contactUs"} className="mt-6">
            <Button
              clssName="w-[233px] h-[44px] text-[23px] py-1  hover:border   hover:text-[var(--second)]  hover:![background-image:none] hover:!bg-transparent  hover:border-[var(--second)]"
              title="Contact Us Now"
            />
          </Link>
        </div>
      </div>

      <div className="col-span-5">
        <div className="w-full h-full ">
          <img
            className="w-[590px] max-h-[665px]"
            src="/images/all/video.png"
            alt="video"
          />
        </div>
      </div>
    </div>
  );
}
export default IdeaVision;
