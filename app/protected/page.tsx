
"use client"
import { useAuth, RedirectToSignIn, UserButton } from '@clerk/nextjs';

export default function ProtectedPage() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className='flex flex-col h-screen'>
      {/* Navbar */}
      <nav className='bg-gray-800 text-white p-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Class 10</h1>
        <ul className='flex items-center'>
          <li>
            <UserButton/>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className='flex-1 bg-gray-100 p-4 flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold mb-4'>Welcome to Class 10!</h1>
        <p className='text-2xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Get Started
        </button>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-4 flex flex-col justify-center items-center text-black'>
        <div className='flex flex-wrap justify-center mb-4'>
          <div className='bg-gray-200 p-4 rounded-lg shadow-md w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <h2 className='text-2xl font-bold'>Mathematics</h2>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='bg-gray-200 p-4 rounded-lg shadow-md w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <h2 className='text-2xl font-bold'>Science</h2>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='bg-gray-200 p-4 rounded-lg shadow-md w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <h2 className='text-2xl font-bold'>English</h2>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}