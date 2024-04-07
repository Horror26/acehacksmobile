import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Component() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="flex justify-between items-center px-4 py-2">
        <SmileIcon className="text-3xl" />
        <h1 className="text-xl font-semibold">Hi, Riya</h1>
        <MenuIcon className="text-3xl" />
      </div>
      <div className="flex space-x-2 overflow-auto px-4 pb-2 ">
        <Button className="bg-white text-black text-xs">Recommended</Button>
        <Button className="bg-white text-black text-xs">
          Soulful Instrumental
        </Button>
        <Button className=" bg-white text-black text-xs">
          Healing Frequency
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 px-4">
        <Card className="bg-[#FFD3B6] rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Flute Meditation</h2>
            <Button
              className="bg-white rounded-full text-black text-xs flex items-center"
              onClick={() => {
                window.open(
                  "https://open.spotify.com/playlist/37i9dQZF1DXcj8Mdu8qUVH?si=70-XbvtzQO6smwdWCJZrHg&pi=a-Mrb3I50WQnK2",
                  "_blank"
                );
              }}
            >
              Continue Playing
              <Image
                alt="play"
                className="ml-1"
                src="/icons/play.png"
                layout="responsive"
              />
            </Button>
          </div>
          <Image
            alt="Flute Meditation"
            className="w-full mt-2"
            height={100}
            src="/icons/medi1.png"
            layout="responsive"
            width={100}
          />
        </Card>
        <div className="grid grid-cols-2 gap-4 ">
          <Card className="bg-[#E7F6FF] rounded-lg p-4 ">
            <h2 className="text-lg font-semibold">Piano</h2>
            <Button className="bg-white text-black rounded-full text-xs flex items-center mt-2">
              Play Now
              <Image
                alt="play"
                className="ml-1"
                src="/icons/play.png"
                layout="responsive"
              />
            </Button>

            <Image
              alt="Piano"
              className="w-full mt-8"
              src="/icons/medi2.png"
              layout="responsive"
            />
          </Card>
          <Card className="bg-[#FFE8EC] rounded-lg p-4">
            <h2 className="text-lg font-semibold">Saxophone</h2>
            <Button className="bg-white text-black text-xs rounded-full flex items-center mt-2">
              Play Now
              <Image
                alt="play"
                className="ml-1"
                src="/icons/play.png"
                layout="responsive"
              />
            </Button>

            <Image
              alt="Saxophone"
              className="w-full mt-2"
              src="/icons/medi3.png"
              layout="responsive"
            />
          </Card>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-[#FFFACA] rounded-lg p-4">
            <h2 className="text-lg font-semibold">Tabla</h2>
            <Button className="bg-white text-black rounded-full text-xs flex items-center mt-2">
              Play Now
              <Image alt="play" className="mt-1" src="/icons/play.png" />
            </Button>

            <Image
              alt="Tabla"
              className="w-full mt-2"
              height={100}
              src="/icons/medi4.png"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              layout="responsive"
              width={100}
            />
          </Card>
          <Card className="bg-[#EEE5FF] rounded-lg p-4">
            <h2 className="text-lg font-semibold">Guitar</h2>
            <Button className="bg-white rounded-full text-black text-xs flex items-center mt-2">
              Play Now
              <Image
                alt="play"
                className="ml-1"
                src="/icons/play.png"
                layout="responsive"
              />
            </Button>

            <Image
              alt="Guitar"
              className="w-full mt-2"
              height={100}
              width={100}
              src="/icons/medi5.png"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              layout="responsive"
            />
          </Card>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white px-4 py-2">
        {/* <HomeIcon className="text-3xl" />
        <TextIcon className="text-3xl text-orange-500" />
        <UserIcon className="text-3xl" /> */}
      </div>
    </div>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function TextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}
