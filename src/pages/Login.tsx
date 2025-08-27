import { Link } from "react-router";

import { LoginForm } from "@/components/modules/Authenticaltion/LoginForm";
import { Car } from "lucide-react";

export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <Car className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl text-primary">RideShare</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block h-screen w-full bg-muted overflow-hidden">
        <img
          src="https://i.ibb.co.com/x838Fkqr/david-leonard-lv-RSHmt4-Hxo-unsplash.jpg"
          alt="Login Background"
          className="absolute inset-0 h-full w-full object-cover object-center dark:brightness-75"
        />
      </div>
    </div>
  );
}
