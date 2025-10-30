import { TestimonyDataInterface } from "@/interfaces/testimoni.interface";
import Image from "next/image";

export default function TestimonyCard({
  image,
  name,
  title,
  rate,
  testimony,
}: TestimonyDataInterface) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-orange-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-card-background rounded-lg p-6 shadow-sm border border-gray-100 max-w-md w-[300px] h-full">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-4">
        {/* Profile Image */}
        <div className="shrink-0">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <div className="flex-1">
          <h3 className="font-bold text-primary text-sm uppercase tracking-wide">
            {name}
          </h3>
          <p className="text-gray-500 text-sm mt-1">{title}</p>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-200 mb-4" />

      {/* Rating Section */}
      <div className="flex gap-1 mb-4">{renderStars(rate)}</div>

      {/* Testimonial Text */}
      <blockquote className="text-card-foreground text-base leading-relaxed">
        <span className="text-2xl text-gray-400 leading-none">&ldquo;</span>
        {testimony}
        <span className="text-2xl text-gray-400 leading-none">&rdquo;</span>
      </blockquote>
    </div>
  );
}
