import { Button, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

function HomePage() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Header Section */}
      <header className="w-full p-6 bg-blue-500 text-white text-center">
        <Typography variant="h1" className="text-4xl font-bold">
          Welcome to Our Store!
        </Typography>
        <Typography variant="paragraph" className="mt-2 text-lg">
          Discover amazing products at great prices
        </Typography>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 px-6 text-center">
        <Typography variant="h2" className="text-3xl font-semibold">
          {theme === "dark" ? "Dark Mode Active 🌙" : "Light Mode Active ☀️"}
        </Typography>
        <Typography variant="paragraph" className="mt-4 text-lg">
          Explore a wide range of products customized for your preferences.
        </Typography>
        <Button
          size="lg"
          className="mt-6 bg-blue-500 text-white hover:bg-blue-700 transition"
        >
       
          Shop Now
        </Button>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-4 bg-gray-800 text-center text-white">
        <Typography variant="small">© 2025 YourStore. All Rights Reserved.</Typography>
      </footer>
    </div>
  );
}

export default HomePage;
