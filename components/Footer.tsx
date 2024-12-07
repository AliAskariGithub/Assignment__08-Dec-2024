// app/page.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full p-4 pt-6">
      <footer className="bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <p className="text-base">
            &copy; 2023 Next.js App Router + Clerk Authentication
          </p>
          <ul className="flex items-center">
            <li className="mr-4">
              <Link href="/terms" className="text-black/80 hover:text-black duration-200 transition hover:underline hover:underline-offset-8 ">Terms of Service</Link>
            </li>
            <li className="mr-4">
              <Link href="/privacy" className="text-black/80 hover:text-black duration-200 transition hover:underline hover:underline-offset-8 ">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
