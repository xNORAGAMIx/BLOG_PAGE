import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  Input,
  Button,
  Card,
  Typography,
  CardHeader,
  CardFooter,
  CardBody,
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";

function Register() {
  const context = useContext(myContext);
  const { mode } = context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(error);
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User registered successfully!");
      navigate("/");
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
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
              Register
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="email"
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={handleSubmit}
              variant="gradient"
              fullWidth
              style={{
                background: mode === "dark" ? "#25274d" : "#d6536d",
                color: mode === "dark" ? "white" : "rgb(226, 232, 240)",
              }}
            >
              Register
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                <Link to={"/adminlogin"} className="flex items-center">
                  Sign In
                </Link>
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
}

export default Register;
