import { Palmtree, Heart, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/30 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            About Our Resort
          </h2>
          <p className="font-script text-3xl text-primary md:text-4xl">
            Paradise Awaits
          </p>
        </div>

        <div className="space-y-8 text-center">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Isla Maré Resort is a peaceful island getaway with a Maldives vibe, where you can relax, 
            enjoy nature, and feel at home. We offer cozy rooms, friendly service, and a quiet place to unwind.
          </p>

          <div className="grid gap-8 pt-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Palmtree className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Tropical Paradise</h3>
              <p className="text-muted-foreground">
                Surrounded by crystal-clear turquoise waters and pristine white sand beaches
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Warm Hospitality</h3>
              <p className="text-muted-foreground">
                Friendly staff dedicated to making your stay comfortable and memorable
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Luxury Comfort</h3>
              <p className="text-muted-foreground">
                Modern amenities and elegant design in every room and villa
              </p>
            </div>
          </div>

          <p className="pt-8 text-lg text-muted-foreground">
            Whether you're spending time with loved ones or taking a break for yourself, 
            Isla Maré is the perfect place to enjoy the beauty of island life in comfort and peace.
          </p>
        </div>
      </div>
    </section>
  );
};
