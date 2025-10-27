import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="Signalist logo"
            width={180}
            height={32}
            className="h-9 w-auto cursor-pointer"
          ></Image>
          <p className="text-shadow-fuchsia-500 text-3xl">Signalist</p>
        </Link>
        {/* <Link href="/" className="flex items-center gap-2"> */}
          <nav className="hidden sm:block">
            <NavItems />
          </nav>
        {/* </Link> */}
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
