import { RoomCard } from "./RoomCard";
import deluxeVilla from "@/assets/deluxe-villa.jpg";
import beachBungalow from "@/assets/beach-bungalow.jpg";
import oceanSuite from "@/assets/ocean-suite.jpg";

export const Rooms = () => {
  const rooms = [
    {
      title: "Deluxe Overwater Villa",
      description: "Experience ultimate luxury in our overwater villa with direct ocean access and private sundeck.",
      price: "$450/night",
      image: deluxeVilla,
      capacity: 2,
    },
    {
      title: "Beach Bungalow",
      description: "Cozy beachfront accommodation with traditional tropical design and stunning sunset views.",
      price: "$280/night",
      image: beachBungalow,
      capacity: 4,
    },
    {
      title: "Ocean Suite",
      description: "Spacious suite with panoramic ocean views, modern amenities, and private balcony.",
      price: "$350/night",
      image: oceanSuite,
      capacity: 3,
    },
  ];

  return (
    <section id="rooms" className="bg-gradient-tropical px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Our Accommodations
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose from our selection of beautifully designed rooms and villas, each offering a unique tropical experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <div
              key={room.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <RoomCard {...room} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
