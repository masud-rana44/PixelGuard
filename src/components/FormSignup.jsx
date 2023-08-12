import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";

function Form() {
  const { signup } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !username) return;

    try {
      setIsSubmitting(true);

      await signup(email, password, username);
      toast.success("Successfully create new account");
    } catch (err) {
      toast.error(err.message || "Failed to create an account");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <Input
        type="text"
        label="name"
        name="name"
        placeholder="John Doe"
        required
        value={username}
        onChange={setUsername}
      />
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

      <Button text="Sign up" disabled={isSubmitting} />
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
