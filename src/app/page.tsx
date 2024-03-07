import Card from "@/app/Card";
import Header from "@/app/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="w-[400px] h-[400px] bg-red-300 flex gap-5">
        <Image
          src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/338025255_541336521462464_3424359269512720106_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gLtVyniotb0AX86SXDq&_nc_oc=AQlT0o_YZblE7zmHutws8fu5uLSDpvXtPBJCjY4FnxFhSvTRr19ptPR9VwU8-EE54lE&_nc_ht=scontent-nrt1-1.xx&oh=00_AfAyZRsaLSxMKw4bKkvKK4902v1TmJH-lDsBPcHOowLTLw&oe=65EE9909"
          alt=""
          width={600}
          height={100}
          quality={100}
        />
        <Image
          src="https://images.unsplash.com/photo-1591946931510-0f1b638a04f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={600}
          height={100}
          quality={100}
        />
      </h1>
    </>
  );
}
