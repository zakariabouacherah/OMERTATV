import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Premium Subscriber",
      avatar: "JD",
      avatarColor: "bg-yellow-500",
      rating: 5,
      text: "StreamPro has completely transformed my entertainment experience. The quality is incredible and the channel selection is absolutely unmatched!",
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Annual Subscriber",
      avatar: "SM",
      avatarColor: "bg-cyan-900 text-white",
      rating: 5,
      text: "Amazing premium service! The 4K quality is crystal clear and I love having access to channels from around the world. Highly recommended!",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "3-Month Subscriber",
      avatar: "JD",
      avatarColor: "bg-yellow-500",
      rating: 5,
      text: "The customer support is outstanding! They helped me set everything up in minutes. Best premium IPTV service I've ever used.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section className="bg-slate-950 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-8">
            <span className="text-yellow-500 font-medium">
              Customer Reviews
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-yellow-500">Customers Say</span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied premium customers worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`cursor-pointer bg-gray-900/50 rounded-lg p-8 transition-all duration-300 hover:bg-gray-900/70 border border-gray-800 hover:border-gray-700`}
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-300 leading-relaxed mb-8 text-lg text-justify">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className={`${testimonial.avatarColor} w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg`}
                >
                  {testimonial.avatar}
                </div>

                {/* Name and Role */}
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
