import Login from "@/components/Login/page";

export default function Home() {
  return (
    <main className="w-dvw h-dvh flex">
      <section className="bg-logo w-1/2 h-dvh flex justify-center items-center">
        <img 
        src="/images/logo.png" 
        alt="logo" 
        className=""
        width={225}
        height={225}
        />
      </section>

      <section className="w-1/2 h-dvh flex justify-center items-center">
        <Login/>
      </section>
    </main>
  );
}
