import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Wifi, Waves } from "lucide-react";

interface RoomCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  capacity: number;
}

export const RoomCard = ({ title, description, price, image, capacity }: RoomCardProps) => {
  const handleBookNow = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Card className="group overflow-hidden border-border/50 bg-card shadow-[0_4px_20px_-2px_hsl(187,50%,50%,0.15)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_32px_-4px_hsl(187,100%,42%,0.25)]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute right-4 top-4 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg">
          {price}
        </div>
      </div>
      <CardContent className="space-y-4 p-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{capacity} guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Wifi className="h-4 w-4" />
            <span>Free WiFi</span>
          </div>
          <div className="flex items-center gap-1">
            <Waves className="h-4 w-4" />
            <span>Ocean View</span>
          </div>
        </div>

        <Button
          onClick={handleBookNow}
          className="w-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};
