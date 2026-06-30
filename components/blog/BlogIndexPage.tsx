import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    title: "Window Film for Long Island Pool Houses and Cabanas: Stay Cool Where You Play",
    excerpt:
      "Pool houses and cabanas on Long Island turn into ovens by mid-morning every summer. Solar window film blocks up to 60% of heat at the glass and 99% of UV rays — so your outdoor space stays comfortable all day long. CoolVu serves all of Nassau and Suffolk County. Free estimates.",
    date: "June 30, 2026",
    slug: "window-film-pool-house-cabana-long-island",
    readTime: "5 min read",
  },
  {
    title: "Window Film Myths Debunked — What Long Island Homeowners Get Wrong",
    excerpt:
      "Most homeowners skip window film based on things that simply aren't true: that it makes rooms dark, cracks windows, or only works in summer. CoolVu of Long Island debunks the 6 most common myths with the real facts about professional window film installation.",
    date: "June 29, 2026",
    slug: "window-film-myths-debunked-long-island",
    readTime: "5 min read",
  },
  {
    title: "Window Film for Long Island Historic Homes: Protect Original Windows Without Replacing Them",
    excerpt:
      "Historic Long Island homes lose heat, let UV pour in, and risk fading original floors and furnishings — because single-pane glass is beautiful but provides almost no protection. Window film fixes all of this without touching the original windows. CoolVu serves Garden City, Great Neck, Oyster Bay, and all of Nassau and Suffolk County.",
    date: "June 28, 2026",
    slug: "window-film-historic-homes-long-island",
    readTime: "5 min read",
  },
  {
    title: "Window Film for Long Island Home Theaters and Media Rooms: Kill the Glare on Your Screen",
    excerpt:
      "Sun glare turning your TV or projector screen into a washed-out mirror? Window film cuts the light and glare at the glass so your media room works at 2pm, not just at night — plus it blocks 99% of UV to protect your gear. CoolVu serves Nassau & Suffolk. Free estimates.",
    date: "June 24, 2026",
    slug: "window-film-home-theaters-media-rooms-long-island",
    readTime: "5 min read",
  },
  {
    title: "Window Film for Long Island Churches & Houses of Worship",
    excerpt:
      "All that beautiful glass fades stained glass, overheats the sanctuary, and creates an easy break-in point. Window film protects against UV, heat, glare, and shattering in one install — for churches, synagogues, and temples across Nassau and Suffolk. Free estimates.",
    date: "June 23, 2026",
    slug: "window-film-houses-of-worship-long-island",
    readTime: "6 min read",
  },
  {
    title: "Window Film for Bedrooms: Block the Early-Morning Sun and Sleep Better on Long Island",
    excerpt:
      "Long Island summer sun comes up before 5:30am — and east-facing bedrooms feel it first. Window film blocks up to 60% of heat and 99% of UV at the glass, cuts dawn glare, and adds daytime privacy so your bedroom stays cool, calm, and easy to sleep in. Free estimates across Nassau and Suffolk.",
    date: "June 22, 2026",
    slug: "window-film-bedrooms-better-sleep-long-island",
    readTime: "5 min read",
  },
  {
    title: "Does Window Film Help in Winter? Insulating Window Film for Long Island Homes",
    excerpt:
      "Window film is not just a summer upgrade. Insulating 'Low-E' film reflects your heat back inside so rooms stay warmer and your furnace works less — while still blocking 99% of UV and summer heat. CoolVu explains year-round comfort for Nassau and Suffolk homes.",
    date: "June 21, 2026",
    slug: "winter-insulating-window-film-long-island",
    readTime: "5 min read",
  },
  {
    title: "Daytime Privacy Window Film for Long Island: Enjoy Your Summer Without the Neighbors Watching",
    excerpt:
      "Keep the blinds open all summer. Daytime privacy film makes street-facing windows look like mirrors from outside while you keep your view, your light, and a cooler room. CoolVu explains one-way vs. frosted film and the best rooms to film across Nassau and Suffolk.",
    date: "June 20, 2026",
    slug: "daytime-privacy-window-film-long-island",
    readTime: "5 min read",
  },
  {
    title: "Can You Put Window Film on Double-Pane Windows? A Long Island Guide",
    excerpt:
      "Worried film will crack your double-pane windows or fog the glass? The honest answer: yes, you can film them — when the film is matched to your glass. CoolVu explains thermal stress in plain English and how a pro install keeps your windows safe across Nassau and Suffolk.",
    date: "June 20, 2026",
    slug: "window-film-double-pane-windows-long-island",
    readTime: "6 min read",
  },

    {
      title: "How Much Does Window Film Cost on Long Island? (2026 Price Guide)",
      excerpt:
        "Straight answers on pricing: most Long Island homeowners pay $12–$25 per square foot. A single room runs $400–$1,200 and a whole home $1,800–$4,500. Full breakdown by film type and project size — free estimates in Nassau and Suffolk.",
      date: "June 18, 2026",
      slug: "window-film-cost-long-island",
      readTime: "6 min read",
    },
    {
      title: "Anti-Graffiti Window Film for Long Island Storefronts and Businesses",
      excerpt:
        "Vandals tagging or scratching your storefront glass? Anti-graffiti film takes the damage so your glass doesn't — peel it off and replace it for a fraction of the cost of new glass. CoolVu serves businesses across Nassau and Suffolk Counties.",
      date: "June 17, 2026",
      slug: "anti-graffiti-window-film-long-island",
      readTime: "5 min read",
    },
    {
      title: "Window Film for Long Island Car Dealerships and Auto Showrooms",
      excerpt:
        "Large showroom windows cost dealerships thousands in cooling bills, glare, and UV damage to display vehicles. Commercial window film solves all four problems in one install.",
      date: "June 2026",
      slug: "window-film-car-dealerships-long-island",
      readTime: "5 min read",
    },
    {
      title: "Window Film for Long Island Nurseries and Baby Rooms: UV Protection That Actually Works",
      excerpt: "Window film blocks 99% of UV rays and up to 60% of summer heat — protecting your baby from sun exposure through the glass, keeping the nursery cooler, and reducing glare. Free estimates throughout Nassau and Suffolk Counties.",
      date: "June 15, 2026",
      slug: "window-film-nursery-baby-room-long-island",
      readTime: "5 min read",
    },

    {
      title: "Does Window Film Make Your House Dark Inside? Here's the Truth",
      excerpt: "No — modern solar film blocks heat and 99% of UV rays while letting 50–70% of natural light through. Most homeowners can't tell the difference in brightness. Here's how VLT ratings work and why filmed rooms often feel brighter.",
      date: "June 12, 2026",
      slug: "does-window-film-make-house-dark-long-island",
      readTime: "5 min read",
    },
    {
      title: "Window Film for Skylights: Stop the Heat Pouring Into Your Long Island Home",
      excerpt: "Skylights catch sun all day and pump heat and UV straight into your home. Solar film blocks up to 60% of heat and 99% of UV at the glass — without losing the natural light. Here's how skylight film works.",
      date: "June 11, 2026",
      slug: "window-film-skylights-long-island",
      readTime: "5 min read",
    },
    {
      title: "Window Film vs. Curtains and Blinds: The Smart Choice for Long Island Homes",
      excerpt: "Curtains block your view and don't stop heat. Window film blocks 60% of solar heat, 99% of UV rays, and gives you daytime privacy — without ever closing a thing. CoolVu explains the honest comparison.",
      date: "June 10, 2026",
      slug: "window-film-vs-curtains-blinds-long-island",
      readTime: "5 min read",
    },
    {
      title: "Window Film for Long Island Pet Owners: Cooler Rooms, UV Protection, and Calmer Dogs",
      excerpt: "Solar film blocks up to 60% of heat and 99% of UV rays — keeping pets cooler and safer all summer. Privacy film also reduces reactive barking. CoolVu serves all of Nassau and Suffolk Counties.",
      date: "June 7, 2026",
      slug: "window-film-pet-owners-long-island",
      readTime: "5 min read",
    },
  {
    title: "How Much Can Window Film Save You on Your PSEG Long Island Electric Bill? Real Numbers.",
    excerpt: "PSEG LI rates run $0.20–$0.25/kWh — nearly double the national average. Solar window film cuts cooling costs 20–35% in filmed rooms. Most Long Island homes save $70–$150/month in peak summer.",
    date: "June 8, 2026",
    slug: "pseg-long-island-window-film-energy-savings",
    readTime: "6 min read",
    tag: "Energy Savings · PSEG LI",
    featured: true,
    stat: "$150",
    statLabel: "avg monthly savings in peak summer",
  },
  {
    title: "5 Signs Your Long Island Home Needs Window Film This Summer",
    excerpt: "Hot rooms, high PSEG bills, fading floors, closed blinds, AC that never wins — any one of these is a sign your windows are the problem. Here's how to know for sure.",
    date: "June 8, 2026",
    slug: "signs-your-long-island-home-needs-window-film",
    readTime: "5 min read",
    tag: "Solar Film · Summer 2026",
  },
  {
    title: "Window Film for Your Long Island Home Gym: Privacy, Glare, and Comfort",
    excerpt: "Heat, glare, and nosy neighbors make home gyms uncomfortable. Window film solves all three — blocks 60% of heat, kills screen glare, and adds daytime privacy without darkening your workout space.",
    date: "June 8, 2026",
    slug: "window-film-home-gym-long-island",
    readTime: "5 min read",
  },
    {
      title: "Window Film for Long Island Pet Owners: Cooler Rooms, UV Protection, and Calmer Dogs",
      excerpt: "Solar film blocks up to 60% of heat and 99% of UV rays — keeping pets cooler and safer all summer. Privacy film also reduces reactive barking. CoolVu serves all of Nassau and Suffolk Counties.",
      date: "June 7, 2026",
      slug: "window-film-pet-owners-long-island",
      readTime: "5 min read",
    },

    {
      title: "Window Film Tax Credits and Energy Rebates for Long Island Homeowners: The Full Picture",
      excerpt: "PSEG LI, LIPA, and NYSERDA all offer energy efficiency programs — and window film pays back in as little as two summers through direct energy savings. Here's the complete financial picture for Long Island homeowners.",
      date: "June 6, 2026",
      slug: "window-film-tax-credits-energy-rebates-long-island",
      readTime: "6 min read",
    },
    {
      title: "Window Film for Long Island Beach Houses: Sun, Salt Air, and UV Protection",
      excerpt: "Beach houses face intense sun, salt air, and UV damage that inland homes don't. Window film blocks 99% of UV rays, cuts cooling costs, and adds storm protection — without touching your ocean view.",
      date: "June 5, 2026",
      slug: "window-film-beach-houses-long-island",
      readTime: "5 min read",
    },
        {
      title: "Window Film for Long Island Waterfront Homes and Beach Houses",
      excerpt: "Water glare, intense UV, and privacy from neighbors and passing boats — window film solves all three without blocking your view. CoolVu serves Long Beach, Bay Shore, Northport, Cold Spring Harbor, and all of Long Island\'s waterfront communities.",
      date: "June 4, 2026",
      slug: "waterfront-homes-window-film-long-island",
      readTime: "5 min read",
    },
    {
      title: "Glare Reduction Window Film for Long Island Homes — Stop the Squint",
      excerpt: "Blinding sunlight washing out your TV, your monitor, or your morning coffee? Glare-reduction window film cuts harsh sun without blocking your view — and it also blocks heat and UV rays.",
      date: "June 3, 2026",
      slug: "glare-reduction-window-film-long-island",
      readTime: "5 min read",
    },
    {
      title: "Window Film for Long Island Sunrooms: Turn a Greenhouse Into a Year-Round Room",
      excerpt: "Solar window film blocks up to 60% of heat and 99% of UV rays — making your Long Island sunroom comfortable all summer without darkening the space.",
      date: "June 2, 2026",
      slug: "window-film-sunrooms-long-island",
      readTime: "5 min read",
    },
  {
    title: "Window Film for Long Island Rental Properties: What Landlords Need to Know",
    excerpt: "Solar film lowers cooling costs, privacy film solves ground-floor exposure, and safety film protects street-level glass — here's the landlord's guide to window film across Nassau and Suffolk County.",
    date: "June 1, 2026",
    slug: "window-film-long-island-rental-properties",
    readTime: "5 min read",
  },

  {
    title: "Hurricane Season Window Film for Long Island Homes: What You Need to Know",
    excerpt: "Safety window film holds shattered glass together during storms — so broken windows don\'t become flying hazards. Here\'s what Long Island homeowners need to know before hurricane season hits.",
    date: "June 1, 2026",
    slug: "hurricane-season-window-film-long-island",
    readTime: "5 min read",
  },
  {
    title: "Window Film and Home Resale Value: What Long Island Buyers and Sellers Need to Know",
    excerpt: "Window film improves energy efficiency, UV protection, and home comfort — three things Long Island buyers notice. Solar film with a transferable lifetime warranty can tip a home sale in your favor.",
    date: "May 31, 2026",
    slug: "window-film-home-resale-value-long-island",
    readTime: "5 min read",
  },
  {
    title: "Window Film for Sliding Glass Doors and Sunrooms on Long Island",
    excerpt: "Sunrooms and sliding glass doors are the biggest heat and UV problem in most Long Island homes. Window film blocks 60% of solar heat and makes your sunroom usable all summer.",
    date: "May 30, 2026",
    slug: "window-film-sliding-glass-doors-sunrooms-long-island",
    readTime: "5 min read",
  },
  {
    title: "Window Film for Long Island Medical Offices and Clinics",
    excerpt: "Window film cuts heat and glare, adds patient privacy, and blocks UV damage in medical offices — with zero installation downtime.",
    date: "May 29, 2026",
    slug: "window-film-medical-offices-long-island",
    readTime: "5 min read",
  },
  {
    title: "Window Film Installation: What to Expect on Install Day on Long Island",
    excerpt: "Most Long Island homes are done in 2-4 hours — no mess, no demolition. Here's exactly what happens from the initial walkthrough to the final curing period.",
    date: "May 28, 2026",
    slug: "window-film-installation-process-long-island",
    readTime: "5 min read",
  },
  {
    title: "Window Film for Long Island Restaurants: Reduce Glare, Block Heat, and Add Privacy",
    excerpt: "The same windows that give your restaurant a great look can also bake your dining room, blind customers with glare, and put guests on display. CoolVu explains how window film fixes all four problems at once — with one install and no monthly cost.",
    date: "May 27, 2026",
    slug: "window-film-restaurants-long-island",
    readTime: "5 min read",
    tag: "Commercial Film · Restaurants",
  },
  {
    title: "Best Window Film for Long Island's Climate: What to Look For (And What to Avoid)",
    excerpt: "Not all window film is built for Long Island's heat, humidity, and cold winters. Learn the difference between ceramic, metalized, and cheap dyed films — and why professional-grade matters for long-term performance.",
    date: "May 26, 2026",
    slug: "best-window-film-brands-long-island",
    readTime: "6 min read",
    tag: "Film Selection · Long Island Guide",
  },
  {
    title: "Window Film for Long Island Schools and Daycares: Safety, Glare, and Comfort",
    excerpt: "Safety film holds broken glass together so it won't shatter across a classroom. Solar film cuts glare on smartboards and lowers energy costs. Privacy film protects offices and nurse stations. CoolVu serves schools and daycares throughout Nassau and Suffolk Counties.",
    date: "May 25, 2026",
    slug: "window-film-schools-daycares-long-island",
    readTime: "5 min read",
    tag: "Safety Film · Schools & Daycares",
  },
    {
    title: "Real Energy Savings from Window Film: A Long Island Homeowner Case Study",
    excerpt: "Window film typically cuts cooling costs 20-30% in treated rooms. See real before-and-after numbers from a Long Island homeowner, a simple payback calculator, and which windows deliver the biggest savings.",
    date: "May 24, 2026",
    slug: "energy-savings-window-film-long-island",
    readTime: "5 min read",
  },
  {
    title: "How to Choose the Right Window Tint Level for Your Long Island Home",
    excerpt: "Not sure how dark your window film should be? This guide explains tint levels in plain English — and helps you pick the right film for every window in your house.",
    date: "May 23, 2026",
    slug: "how-to-choose-window-tint-level-long-island",
    readTime: "5 min read",
  },
  {
    title: "Window Film for Long Island Condos and Apartments: What Renters and Owners Need to Know",
    excerpt: "Window film blocks heat, cuts glare, adds privacy, and protects furniture in Long Island condos and apartments — without damaging the glass. Works for renters and owners alike. CoolVu serves Nassau and Suffolk Counties.",
    date: "May 22, 2026",
    slug: "window-film-condos-apartments-long-island",
    readTime: "5 min read",
    tag: "Solar Film · Privacy Film · Condo Living",
  },
  {
    title: "Security Window Film for Long Island Storefronts: Stop Smash-and-Grab in Its Tracks",
    excerpt: "Security window film holds shattered glass together after impact — slowing smash-and-grab break-ins, protecting against flying glass, and giving your Long Island storefront a critical layer of defense. CoolVu installs throughout Nassau and Suffolk Counties.",
    date: "May 21, 2026",
    slug: "security-window-film-long-island-storefronts",
    readTime: "5 min read",
    tag: "Safety Film · Commercial",
  },
  {
    title: "UV Damage to Furniture and Floors: How Window Film Protects Your Long Island Home",
    excerpt: "UV rays coming through your windows are silently fading your hardwood floors, furniture, and artwork every day. Window film blocks 99% of those rays at the glass — protecting everything inside without changing how your rooms look.",
    date: "May 20, 2026",
    slug: "uv-damage-furniture-floors-window-film-long-island",
    readTime: "5 min read",
    tag: "UV Protection · Solar Film",
  },
  {
    title: "Decorative Window Film Ideas for Long Island Homes",
    excerpt: "Plain glass doesn't have to stay plain. Decorative film turns ordinary windows into frosted, etched, patterned, or stained glass — for 70–85% less than replacing the glass. CoolVu serves all of Long Island.",
    date: "May 20, 2026",
    slug: "decorative-window-film-ideas-long-island",
    readTime: "5 min read",
  },
  {
    title: "Privacy Window Film for Long Island Home Offices — Work Without Distractions",
    excerpt: "Glare on your screen, neighbors seeing in, afternoon heat — privacy window film solves all three for Long Island home offices. Keeps light in, keeps distractions out.",
    date: "May 19, 2026",
    slug: "privacy-window-film-home-office-long-island",
    readTime: "5 min read",
  },
  {
    title: "South Shore vs. North Shore Long Island: Which Windows Need Film Most?",
    excerpt: "It\'s not about where you live — it\'s about which direction your windows face. Here\'s how to figure out which windows on your Long Island home need film first.",
    date: "May 2026",
    slug: "south-shore-vs-north-shore-window-film-long-island",
    readTime: "5 min read",
  },
  {
    slug: "window-film-vs-new-windows-long-island",
    tag: "Window Film · Home Improvement",
    title: "Window Film vs. New Windows: Which Is Worth It for Long Island Homeowners?",
    excerpt:
      "New windows cost $12,000–$25,000 and only block 25–30% of solar heat. Window film costs 70–80% less, blocks 60% of heat, and installs in a day. Here's how to decide what's right for your home.",
    date: "May 17, 2026",
    readTime: "6 min read",
  },
  {
    slug: "commercial-window-film-long-island",
    tag: "Commercial Film · Business Solutions",
    title: "Commercial Window Film for Long Island Offices and Retail Stores",
    excerpt:
      "Long Island businesses use window film to cut heat, eliminate glare, block UV damage, and protect storefronts — without replacing glass. CoolVu installs commercial film throughout Nassau and Suffolk Counties.",
    date: "May 16, 2026",
    readTime: "6 min read",
  },
  {
    slug: "how-long-does-window-film-last-long-island",
    tag: "Window Film · Long Island Climate",
    title: "How Long Does Window Film Last? Long Island Heat, Humidity, and What to Expect",
    excerpt:
      "Quality window film lasts 15 to 25 years — even on Long Island with salt air, humidity, and intense UV. Learn what affects film lifespan, how to spot failing film, and why a lifetime warranty matters.",
    date: "May 15, 2026",
    readTime: "5 min read",
  },
  {
    slug: "summer-heat-solar-window-film-long-island",
    tag: "Solar Film · Summer 2026",
    title: "How Solar Window Film Cuts Your AC Bill This Summer on Long Island",
    excerpt:
      "Long Island summers drive electric bills sky-high. Solar window film blocks up to 60% of heat at the glass — before it enters your home. Learn which windows matter most and how much you can realistically save.",
    readTime: "5 min read",
    featured: true,
    stat: "60%",
    statLabel: "of heat blocked at the glass",
  },
  {
    slug: "one-way-privacy-window-film-long-island",
    tag: "Privacy Film",
    title: "One-Way Privacy Window Film: See Out, Nobody Sees In",
    excerpt:
      "Keep your view and your natural light while blocking neighbors from seeing into your home. We explain how it works, where it works best, and the one nighttime limitation you should know before deciding.",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "frosted-bathroom-window-film-long-island",
    tag: "Privacy Film · Decorative",
    title: "Frosted Window Film for Bathrooms: Privacy That Still Lets Light In",
    excerpt:
      "The simplest upgrade for any Long Island bathroom — no curtains, no blinds, no remodeling. Frosted film looks like expensive etched glass, blocks visibility completely day and night, and is covered by a lifetime warranty.",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "safety-window-film-storms-long-island",
    tag: "Safety & Security Film",
    title: "Safety Window Film for Long Island Storms: What It Does and Why It Matters",
    excerpt:
      "When a nor'easter shatters a window, glass can explode into your home. Safety film holds broken pieces together — invisible, always-on protection that storm shutters can't match for everyday living.",
    readTime: "5 min read",
    featured: false,
  },
];

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isTransparent={false} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1F4E79] to-[#2E75B6] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest opacity-70 mb-3">CoolVu of Long Island</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Window Film Tips &amp; Guides for Long Island Homeowners
          </h1>
          <p className="text-lg opacity-85 max-w-2xl">
            Straight talk from Paul Silverman and the CoolVu team — no jargon, just helpful answers to the questions Long Island homeowners actually ask.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#EBF3FB] border-b border-[#d0dcea]">
        <div className="max-w-4xl mx-auto px-6 py-3 flex flex-wrap gap-x-8 gap-y-1 text-sm font-semibold text-[#1F4E79]">
          <span>✓ Nassau County Advisory Board Recognized</span>
          <span>✓ Lifetime Residential Warranty</span>
          <span>✓ Blocks 99% of UV Rays</span>
          <span>✓ Free Estimates — 516-535-9555</span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 flex-1 w-full">

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="block mb-10 rounded-2xl border-2 border-[#2E75B6] overflow-hidden hover:shadow-lg transition-shadow md:grid md:grid-cols-2"
        >
          <div className="p-8">
            <span className="inline-block bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-wider rounded px-2 py-1 mb-3">
              🔥 Most Timely Right Now
            </span>
            <span className="block text-xs font-bold text-[#2E75B6] uppercase tracking-wide mb-2">
              {featured.tag}
            </span>
            <h2 className="text-xl font-extrabold text-[#1F4E79] leading-snug mb-3">
              {featured.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
            <span className="text-[#2E75B6] font-bold text-sm">Read article →</span>
          </div>
          <div className="bg-gradient-to-br from-[#EBF3FB] to-[#D6E8F8] flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-6xl font-black text-[#1F4E79]">{featured.stat}</div>
              <div className="text-gray-600 text-sm mt-2">{featured.statLabel}</div>
            </div>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 flex-1">
                <span className="inline-block bg-[#EBF3FB] text-[#1F4E79] text-xs font-bold uppercase tracking-wide rounded px-2 py-1 mb-3">
                  {post.tag}
                </span>
                <h2 className="text-base font-extrabold text-[#1F4E79] leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                <span className="text-xs text-gray-400">{post.readTime}</span>
                <span className="text-[#2E75B6] font-bold text-sm">Read →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 rounded-2xl bg-gradient-to-br from-[#1F4E79] to-[#2E75B6] text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-extrabold mb-1">Have a question we didn't answer?</h2>
            <p className="opacity-85 text-sm">Free estimates · No pressure · All of Nassau &amp; Suffolk County</p>
          </div>
          <a
            href="tel:5165359555"
            className="bg-[#FF6B00] hover:bg-[#e55f00] text-white font-extrabold px-8 py-3 rounded-lg text-base whitespace-nowrap transition-colors"
          >
            📞 516-535-9555
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}


