import { useCallback, useState } from "react";
import Input from "../components/Input";
import axios from "axios";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  const register = useCallback(async () => {
    try {
      console.log(name, email, password);

      await axios.post("/api/register", {
        name,
        email,
        password,
      });
      console.log(name, email, password);
    } catch (error) {
      console.log("error : ", error);
    }
  }, [name, email, password]);
  return (
    <div className="relative h-full w-full  bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed ">
      <div className="bg-black h-full w-full  lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:h-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl text-semibold mb-8">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => {
                    setName(ev.target.value);
                  }}
                  id="username"
                  type="text"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: any) => {
                  setEmail(ev.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev: any) => {
                  setPassword(ev.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={register}
              className="w-full bg-red-600 py-3 rounded-md mt-10 hover:bg-red-700 transition text-white"
            >
              {variant === "login" ? "Log in" : "Sign up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time use Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? " Create new account?" : " Log in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
