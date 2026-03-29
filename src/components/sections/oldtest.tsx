// "use client";

// import Image, { StaticImageData } from "next/image";
// import { useEffect, useMemo, useState } from "react";

// const TESTIMONIAL_COLORS = {
//   bg: "#020202",
//   card: "#171717",
//   cardBorder: "rgba(255,255,255,0.06)",
//   text: "#F8FAFC",
//   muted: "#B3B3B3",
//   accent: "#00E676",
//   dot: "#5A5A5A",
// };

// type Testimonial = {
//   id: number;
//   quote: string;
//   name: string;
//   role: string;
//   company: string;
//   location: string;
//   avatar?: StaticImageData; // future pattern
// };

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     quote:
//       "Octalve helped us refine our brand presence and deliver a clean, professional branding that actually supports enquiries. The process was structured, communication was clear, and they paid attention to details that matter for customer trust. Since launching, our online presentation looks more credible and easier for clients to interact with.",
//     name: "Dr. Akerele Ronke",
//     role: "Founder",
//     company: "SapphireQuest Travels and Tour",
//     location: "Abuja",
//   },
//   {
//     id: 2,
//     quote:
//       "Working with Octalve was a smooth experience from discovery to delivery. They didn’t just build a website—they built a system that reflects our organization and improves how we receive and manage enquiries. Their execution discipline and support after launch stood out.",
//     name: "Prof. Rabiu Babatunde",
//     role: "Founder",
//     company: "NSEE Org.",
//     location: "Abuja",
//   },
//   {
//     id: 3,
//     quote:
//       "Octalve delivered a modern brand look and a website that feels premium and conversion-focused. What impressed me most was how they guided us through the structure, content, and user journey instead of just designing pages. The result is a stronger digital presence that supports growth.",
//     name: "Dr. Michael Ojo",
//     role: "Founder",
//     company: "Gotooeasy Homes and Travels",
//     location: "Lagos",
//   },
//   {
//     id: 4,
//     quote:
//       "Octalve brought clarity and quality to our brand logo and identity delivery. The logo is clean, aesthetic, and well organised, and their support approach is professional. I appreciated the speed, documentation, and how they made the entire process easy.",
//     name: "Sarah A.",
//     role: "Founder",
//     company: "IHHConsulting",
//     location: "Canada",
//   },
//   {
//     id: 5,
//     quote:
//       "Octalve delivered a clean, professional brand direction and website experience that matches our industry standard. Their team was structured, responsive, and clear about timelines and deliverables. The final output improved how our company presents itself online and how enquiries are handled.",
//     name: "Victor Emaka",
//     role: "MD",
//     company: "Mayport Oil and Gas",
//     location: "Lagos",
//   },
//   {
//     id: 6,
//     quote:
//       "Octalve approached our project with strong execution discipline. From brand clarity, structure and technical delivery, everything was handled professionally. Communication was consistent, and the final result was modern, fast, and easy to scale—exactly what we needed.",
//     name: "Abraham Akinwale",
//     role: "Founder",
//     company: "AIICOTECH",
//     location: "USA",
//   },
//   {
//     id: 7,
//     quote:
//       "What stood out about Octalve was their ability to translate our ideas into a clear brand identity that supports conversion. They gave helpful guidance on structure and messaging, and their deployment support made launch smooth.",
//     name: "Angel Akinwale",
//     role: "Founder",
//     company: "DSF Inc.",
//     location: "USA",
//   },
//   {
//     id: 8,
//     quote:
//       "Octalve helped us build a strong digital foundation—branding, website structure, and technical setup. Their delivery was thoughtful and detail-oriented, and they made the process easy even when we had multiple moving parts. We’re satisfied with the quality and professionalism.",
//     name: "Haleemah A.",
//     role: "Founder",
//     company: "SafedeenHQ",
//     location: "Lagos",
//   },
// ];

// function StarIcon() {
//   return (
//     <svg
//       width="22"
//       height="22"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       aria-hidden="true"
//     >
//       <path d="M12 3.8L14.55 8.97L20.25 9.8L16.12 13.83L17.1 19.5L12 16.82L6.9 19.5L7.88 13.83L3.75 9.8L9.45 8.97L12 3.8Z" />
//     </svg>
//   );
// }

// function getInitials(name: string) {
//   return name
//     .split(" ")
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((part) => part[0]?.toUpperCase())
//     .join("");
// }

// function TestimonialCard({ item }: { item: Testimonial }) {
//   return (
//     <article
//       className="min-h-[390px] rounded-[22px] border p-7 shadow-[0_20px_50px_rgba(0,0,0,0.20)]"
//       style={{
//         backgroundColor: TESTIMONIAL_COLORS.card,
//         borderColor: TESTIMONIAL_COLORS.cardBorder,
//       }}
//     >
//       <div className="flex items-center gap-1 text-[#FFD700]">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <StarIcon key={index} />
//         ))}
//       </div>

//       <blockquote
//         className="mt-7 text-[19px] leading-[1.65] italic"
//         style={{ color: TESTIMONIAL_COLORS.text }}
//       >
//         “{item.quote}”
//       </blockquote>

//       <div className="mt-8 flex items-center gap-4">
//         <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white/10">
//           {item.avatar ? (
//             <Image
//               src={item.avatar}
//               alt={item.name}
//               fill
//               className="object-cover"
//               sizes="64px"
//             />
//           ) : (
//             <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-white/90">
//               {getInitials(item.name)}
//             </div>
//           )}
//         </div>

//         <div>
//           <h3 className="text-[20px] font-semibold text-white">{item.name}</h3>
//           <p
//             className="text-[15px]"
//             style={{ color: TESTIMONIAL_COLORS.muted }}
//           >
//             {item.role}, {item.company}
//           </p>
//           <p
//             className="text-[15px]"
//             style={{ color: TESTIMONIAL_COLORS.muted }}
//           >
//             {item.location}
//           </p>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function Testimonials() {
//   const [page, setPage] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);

//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth < 768) {
//         setItemsPerView(1);
//       } else if (window.innerWidth < 1200) {
//         setItemsPerView(2);
//       } else {
//         setItemsPerView(3);
//       }
//     }

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const totalPages = Math.ceil(testimonials.length / itemsPerView);

//   useEffect(() => {
//     const interval = window.setInterval(() => {
//       setPage((prev) => (prev + 1) % totalPages);
//     }, 6000);

//     return () => window.clearInterval(interval);
//   }, [totalPages]);

//   useEffect(() => {
//     if (page > totalPages - 1) {
//       setPage(0);
//     }
//   }, [itemsPerView, page, totalPages]);

//   const visibleTestimonials = useMemo(() => {
//     const start = page * itemsPerView;
//     const sliced = testimonials.slice(start, start + itemsPerView);

//     if (sliced.length === itemsPerView) return sliced;

//     const needed = itemsPerView - sliced.length;
//     return [...sliced, ...testimonials.slice(0, needed)];
//   }, [page, itemsPerView]);

//   return (
//     <section
//       className="px-4 py-16 sm:px-6 md:py-20"
//       style={{ backgroundColor: TESTIMONIAL_COLORS.bg }}
//     >
//       <div className="mx-auto max-w-[1500px]">
//         <div className="text-center">
//           <p
//             className="text-sm font-medium"
//             style={{ color: TESTIMONIAL_COLORS.accent }}
//           >
//             Testimonials
//           </p>

//           <h2 className="mt-4 text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
//             Trusted by Growing Businesses
//           </h2>
//         </div>

//         <div className="mt-14 grid gap-8 xl:grid-cols-3 md:grid-cols-2">
//           {visibleTestimonials.map((item) => (
//             <TestimonialCard key={`${page}-${item.id}`} item={item} />
//           ))}
//         </div>

//         <div className="mt-10 flex items-center justify-center gap-3">
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => setPage(index)}
//               aria-label={`Go to testimonial page ${index + 1}`}
//               className={`h-3 rounded-full transition-all ${
//                 page === index ? "w-10" : "w-3"
//               }`}
//               style={{
//                 backgroundColor:
//                   page === index
//                     ? TESTIMONIAL_COLORS.accent
//                     : TESTIMONIAL_COLORS.dot,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
