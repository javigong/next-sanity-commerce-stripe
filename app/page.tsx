import Hero from "./components/Hero";
import Newest from "./components/Newest";

export const revalidate = 3600 // invalidate every hour

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </div>
  );
}
