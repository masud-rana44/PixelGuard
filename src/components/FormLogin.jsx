import { Link } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";

function Form() {
  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <Input
        type="email"
        label="email"
        name="email"
        placeholder="name@example.com"
      />
      <Input
        type="password"
        label="password"
        name="password"
        placeholder="••••••••"
      />

      <div className="flex items-center justify-between">
        <Checkbox />
        <a
          href="#"
          className="text-sm font-medium text-orange-600 hover:underline"
        >
          Forgot password?
        </a>
      </div>
      <Button text="Sign in" />
      <p className="text-sm font-light text-gray-500">
        Don’t have an account yet?{" "}
        <Link
          to="/signup"
          className="font-medium text-orange-600 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default Form;
