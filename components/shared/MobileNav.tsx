import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MobileNav = () => {
  const router = useRouter();
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
        <Link href="/" className="w-36">
          <div className=" flex items-center justify-center font-bold text-xl">
            <img
              src={"/assets/images/Logo.png"}
              alt=""
              width={50}
              height={20}
              className="rounded-xl pr-1"
            />
            <h1 className=" font-semibold">MindFullMe</h1>
          </div>
        </Link>
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
