import Button from "@/components/Button/page";
import Input from "@/components/Input/page";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  return (
    <div className="bg-dark w-full flex items-center h-screen justify-center">
      <div className="flex  w-full  items-center justify-center  ">
        <div className="w-[65%] flex flex-col items-center justify-center">
          <div className="flex flex-col my-4 items-center justify-center">
            <h1 className="text-4xl font-bold text-center my-2 text-white ">
              Login to your account
            </h1>
            <h6 className="my-2">Login using social accounts</h6>
            <div className="flex gap-5 my-2">
              <FontAwesomeIcon
                icon={faFacebookF}
                className=" text-dark bg-white rounded-full py-3 px-4 text-xl"
              />
              <FontAwesomeIcon
                icon={faGoogle}
                className=" text-dark bg-white rounded-full p-3 text-xl"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className=" text-dark bg-white rounded-full py-3 px-3.5 text-xl"
              />
            </div>
            <div className="w-full flex items-center my-2">
              <div className="w-full  bg-white h-[0.5px] mx-2"></div>
              <p className="text-xs">OR</p>
              <div className="w-full bg-white h-[0.5px] mx-2"></div>
            </div>
            <div className="w-full my-2">
              <form action="" className="flex flex-col gap-5 w-full">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <div className="w-full flex items-center justify-center">
                  <Button
                    text="Login"
                    className="bg-primary text-dark rounded-full px-14 py-2 font-medium"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[35%] bg-primary text-dark min-h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mx-8">
            <h1 className="font-bold text-4xl">New Here?</h1>
            <p className="text-center my-2">
              Create an account to get started with our services. Enjoy a
              seamless experience with personalized features and exclusive
              content tailored just for you. Join us today and unlock the full
              potential of our platform!
            </p>
            <Button
              text="Register"
              className="bg-dark text-primary rounded-full px-14 py-2 font-medium mt-5"
              type="href"
              href="/auth/register"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
