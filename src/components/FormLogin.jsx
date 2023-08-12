import { Link } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";

function Form() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    try {
      setIsSubmitting(true);

      await login(email, password);
      toast.success("Successfully login");
    } catch (err) {
      toast.error(err.message || "Failed to login! Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <Input
        type="email"
        label="email"
        name="email"
        placeholder="name@example.com"
        value={email}
        onChange={setEmail}
      />
      <Input
        type="password"
        label="password"
        name="password"
        placeholder="••••••••"
        value={password}
        onChange={setPassword}
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
      <Button text="Sign in" disabled={isSubmitting} />
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
