import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery/lobby.jpg",
    label: "Lobby & lounge",
  },
  {
    src: "/images/gallery/room.jpg",
    label: "Signature rooms",
  },
  {
    src: "/images/gallery/dining.jpg",
    label: "Restaurant dining",
  },
  {
    src: "/images/gallery/exterior.jpg",
    label: "Exterior view",
  },
  {
    src: "/images/gallery/amenities.jpg",
    label: "Amenities",
  },
  {
    src: "/images/gallery/meeting.jpg",
    label: "Meeting spaces",
  },
];

const galleryNotes = [
  "Black & white framing highlights the hotel’s calm interiors.",
  "Add new images to public/images/gallery to refresh this gallery.",
  "Curate a mix of rooms, dining, and amenities for a complete story.",
];

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Gallery</p>
          <h1 className="text-4xl font-semibold text-foreground font-display">
            Visual stories from The Arcas Hotel.
          </h1>
          <p className="text-base text-muted">
            Add your latest photographs to the public/images/gallery folder to
            bring these spaces to life.
          </p>
        </div>
        <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Gallery notes
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {galleryNotes.map((note) => (
              <li key={note} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                {note}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-3xl border border-black/10 bg-surface-muted shadow-sm"
            >
              <div className="aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.label}
                  width={640}
                  height={480}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-foreground">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
