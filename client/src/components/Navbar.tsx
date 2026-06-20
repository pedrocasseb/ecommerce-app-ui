import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b border-gray-200 pb-4">
      {/* Left */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="size-6 md:size-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          ORBIT
        </p>
      </Link>
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="size-4 text-gray-600" />
        </Link>
        <Bell className="size-4 text-gray-600" />
        <ShoppingCart className="size-4 text-gray-600" />
        <Link href="/login">Sign In</Link>
      </div>
      {/* Right */}
    </nav>
  );
}
