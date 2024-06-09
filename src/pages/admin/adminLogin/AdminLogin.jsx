import { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  CardFooter,
  Checkbox,
} from "@material-tailwind/react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import myContext from "../../../context/data/myContext";
import { auth } from "../../../firebase/FirebaseConfig";
import Layout from "../../../components/layout/Layout";

export default function AdminLogin() {
  const context = useContext(myContext);
  const { mode } = context;

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!email || !password) {
      return toast.error("Fill all required fields");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Success");
      localStorage.setItem("admin", JSON.stringify(result));
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <Card
          className="w-96"
          style={{
            background: mode === "dark" ? "rgb(226, 232, 240)" : "#ffe",
          }}
        >
          <CardHeader
            variant="gradient"
            color="gray"
            style={{
              background: mode === "dark" ? "rgb(30, 41, 59) " : "#d6536d",
            }}
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={login}
              variant="gradient"
              fullWidth
              style={{
                background: mode === "dark" ? "#25274d" : "#d6536d",
                color: mode === "dark" ? "white" : "rgb(226, 232, 240)",
              }}
            >
              Login
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                <Link to={"/register"} className="flex items-center">
                  Sign Up
                </Link>
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
}
