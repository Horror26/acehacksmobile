
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <img
          alt="heee"
          className="hero-image-wrapper"
          src="icons/logo.png"
        />
      <h1 className="text-2xl font-semibold my-4">MindfullMe</h1>
      <form className="w-full max-w-sm space-y-4">
        <Input placeholder="Email or Phone no." type="text" />
        <Input placeholder="Password" type="password" />
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Checkbox id="show-password" />
            <label className="text-sm" htmlFor="show-password">
              Show Password
            </label>
          </div>
          <Link className="text-sm text-gray-600" href="#">
            Forgot Password?
          </Link>
        </div>
        <Button className="w-full bg-orange-500 text-white">Login</Button>
      </form>
      <div className="mt-4">
        <span className="text-sm">Don't have an account?</span>
        <Link className="text-sm text-orange-500" href="#">
          {" "}
          SignUp
        </Link>
      </div>
    </div>
  )
}


