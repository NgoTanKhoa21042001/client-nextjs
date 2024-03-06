import Card from "@/app/Card";
import Header from "@/app/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <div className="p-5">
        <Header />
        <Button variant={"destructive"} className="p-10 m-4 text-mini">
          Mua Khóa học NextJS
        </Button>
        <Input type="email" placeholder="email" />
        <Card />
      </div>
    </>
  );
}
