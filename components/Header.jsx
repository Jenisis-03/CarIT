import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  CarIcon,
  HeartIcon,
  LayoutDashboard,
  ArrowLeftCircleIcon,
} from "lucide-react";

const Header = ({ isAdminPage = false }) => {
  const isAdmin = false; // Update this based on actual authentication logic

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? "/admin" : "/"} className="flex items-center">
          <Image
            src="/logo.png"
            alt="CarIT logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
          {isAdminPage && (
            <span className="text-xs font-extralight ml-2">Admin</span>
          )}
        </Link>

        {isAdminPage ? (
          <SignedIn>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeftCircleIcon size={18} />
                <span>Back to App</span>
              </Button>
            </Link>
          </SignedIn>
        ) : (
          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="/saved-cars">
                <Button>
                  <HeartIcon size={18} />
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </Link>

              {!isAdmin ? (
                <Link href="/reservations">
                  <Button variant="outline">
                    <CarIcon size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/admin">
                  <Button variant="outline">
                    <LayoutDashboard size={18} />
                    <span className="hidden md:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          </div>
        )}
        <SignedOut>
          <SignInButton forceRedirectUrl="/">
            <Button variant="outline">Log In</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "rounded-full",
              },
            }}
          />
        </SignedIn>
      </nav>
    </header>
  );
};

export default Header;
