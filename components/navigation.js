import { styles } from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-blue-700 p-6 rounded-lg">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Nate Palmer</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link href="/">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
              Home
            </a>
          </Link>
          <Link href="/posts">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
              Blog
            </a>
          </Link>
          {/* <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
          >
            Blog
          </a> */}
        </div>
      </div>
    </nav>
  );
}
