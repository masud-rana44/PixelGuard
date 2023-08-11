import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

function Form() {
  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <Input type="text" label="name" name="name" placeholder="John Doe" />
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

      <Button text="Sign up" />
      <p className="text-sm font-light text-gray-500">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="font-medium text-orange-600 hover:underline"
        >
          Log in
        </Link>
      </p>
    </form>
  );
}

export default Form;
