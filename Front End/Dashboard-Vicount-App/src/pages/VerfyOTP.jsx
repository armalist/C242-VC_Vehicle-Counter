import Logo from "../assets/logo.png";
const VerifyOTPPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <a
          href=""
          className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10"
        >
          <img src={Logo} alt="Creative Tim Logo" className="mr-4 h-10" />
          <span className="self-center text-2xl font-bold whitespace-nowrap">
            Vecount Dashboard
          </span>
        </a>
        {/* Card */}
        <div className="p-10 w-full max-w-lg bg-white rounded-xl shadow-xl shadow-gray-300">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Verify your OTP
            </h2>
            <form className="mt-8 space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email registered
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your OTP Code
                </label>
                <input
                  type="text"
                  name="OTP"
                  id="OTP"
                  minlength="6"
                  placeholder="Enter your OTP 6 digits"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-primary to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOTPPage;
