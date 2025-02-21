import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import HoverVideo from "@/components/ui/HoverVideo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between bg-orange-600 p-4 shadow-md">
        {/* Left section with logo and institution info */}
        <div className="flex items-center">
          <Image
            src="/images/logo1.png"
            alt="Institution Logo 1"
            width={150}
            height={150}
          />
          <div className="ml-4 text-left">
            <h1 style={{ color: "black", fontWeight: "bold" }} className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
              Military Boys Hostel
            </h1>
            <p className="text-sm text-black">
              Vita-Karad road, Saidapur , Vidyanagar, 
              Karad, Satara, Maharashtra, India,
              415124
            </p>
          </div>
        </div>

        {/* Right logo */}
        <Image
          src="/images/logo2.png"
          alt="Institution Logo 2"
          width={150}
          height={150}
        />
      </header>
      <div style={{backgroundColor: "#FAD5A5", color:"black"}}>
        <NavigationMenu>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Gallery
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Rules
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Facilities
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenu>
      </div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-10 xl:grid-cols-[1fr_600px] ml-[20px]">
              <Image
                alt="Hostel exterior"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square ml-[-50px]"
                height="550"
                src="/images/demo.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Military Boys Hostel
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  "Rise as one—united in courage, strength, and honor! Together we conquer every challenge.
                  For the pride of our hostel, let our spirit soar and our hearts ignite!"
                  </p>
                </div>
                {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        className="w-[240px] justify-start text-left font-normal"
                        variant="outline"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="range" numberOfMonths={2} />
                    </PopoverContent>
                  </Popover>
                  <Button>Book Now</Button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 bg-orange-300">
          <div className="container px-4 md:px-6">
            <h2
              style={{ color: "black", fontWeight: "bold" }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8"
            >
              Our Facilities
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Image
                  alt="Hostel facility"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  height="550"
                  src="/images/shijyanti_group.jpg"
                  width="550"
                />
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Free Wi-Fi, library, gym and study rooms.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Image
                  alt="Hostel gathering"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  height="550"
                  src="/images/shijyanti_group.jpg"
                  width="550"
                />
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Festival celebration.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div>
                  <HoverVideo
                    src="/video/drill.mp4"
                    width={550}
                    height={550}
                    className="hover"
                  />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Running, exercise, and drill.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Anurag Wazarkar. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

import { SVGProps } from "react";
import { AlignCenter } from "lucide-react";

function MountainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
