import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Colorful flower garden installation" },
  { src: gallery2, alt: "Outdoor patio with fire pit" },
  { src: gallery3, alt: "Perfectly manicured lawn" },
  { src: gallery4, alt: "Water feature and pond" },
  { src: gallery5, alt: "Paver walkway with landscape lighting" },
  { src: gallery6, alt: "Spring flower bed planting" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-body text-sm font-semibold text-secondary uppercase tracking-widest">Our Work</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
          See the Transformation
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          Real projects. Real results. Browse our recent work across Central Illinois.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="font-body text-primary-foreground font-medium text-sm">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
