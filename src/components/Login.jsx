import FormLogin from "./FormLogin";

function Login() {
  return (
    <section className="bg-transparent">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="min-w-[350px] p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <FormLogin />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
