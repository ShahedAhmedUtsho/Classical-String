import React from 'react';
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { House } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">About Classical String</h1>
        <Link to="/" ><House /></Link>
      </header>
      
      <Card className="mb-8">
        <CardHeader>
          
          <CardTitle>About Classical String</CardTitle>
          <CardDescription>Your go-to destination for the finest classical and acoustic guitars.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Classical String offers a curated collection of high-quality guitars from top brands like Alhambra, Jose Ramirez, and Manuel Rodriguez. Whether you're a seasoned musician or a beginner, we have something for everyone.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Browse, search, and filter through our extensive catalog of guitars. Sort products by price, rating, or date added, and filter by brand, category, or price range. Our user-friendly interface ensures a seamless shopping experience, helping you find the perfect guitar.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-4">
            <li>Download the project files from our GitHub repository: <a href="https://github.com/ShahedAhmedUtsho/Classical-String" target="_blank" rel="noopener noreferrer" className="text-blue-500">Classical String GitHub Repo</a>.</li>
            <li>Navigate to the project directory and install the dependencies:
              <pre className="bg-gray-100 dark:bg-gray-700 p-2 rounded"><code>npm install</code></pre>
            </li>
            <li>Start the development server:
              <pre className="bg-gray-100  dark:bg-gray-700 p-2 rounded"><code>npm start</code></pre>
            </li>
            <li>Access the website locally by opening <a href="http://localhost/5173" target="_blank" rel="noopener noreferrer" className="text-blue-500">http://localhost:5173</a> in your browser.</li>
          </ol>
        </CardContent>
      </Card>

      <Separator />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Live Links</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4">
            <li>Frontend: <a href="https://github.com/ShahedAhmedUtsho/Classical-String" target="_blank" rel="noopener noreferrer" className="text-blue-500">Classical String Frontend</a></li>
            <li>Backend: <a href="https://github.com/ShahedAhmedUtsho/Classical-String-server" target="_blank" rel="noopener noreferrer" className="text-blue-500">Classical String Backend</a></li>
          </ul>
        </CardContent>
      </Card>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Filtering and Sorting</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4">
            <li><strong>Search:</strong> Quickly find products by typing the product name in the search bar.</li>
            <li><strong>Filter:</strong> Narrow down your choices by brand, category, or price range.</li>
            <li><strong>Sort:</strong> Organize products by price (Low to High, High to Low) or by the latest added items.</li>
          </ul>
        </CardContent>
        <CardFooter>
          <p>&copy; 2024 Classical String. All rights reserved.</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default About;
