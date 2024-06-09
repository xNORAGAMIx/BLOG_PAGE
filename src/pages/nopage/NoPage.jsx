import { Button, Typography, Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom"; // or react-router if you use it

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="p-8 text-center">
        <Typography variant="h1" color="red" className="font-bold mb-4">
          404
        </Typography>
        <Typography variant="h5" className="mb-4">
          Oops! You are at an invalid address.
        </Typography>
        <Button
          onClick={handleGoHome}
          className="mt-4 bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Home
        </Button>
      </Card>
    </div>
  );
};

export default NotFoundPage;
