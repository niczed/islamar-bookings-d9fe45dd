import { Hero } from "@/components/Hero";
import { Rooms } from "@/components/Rooms";
import { About } from "@/components/About";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Rooms />
      <About />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
