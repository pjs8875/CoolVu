import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

const faq = [
  {
    q: "Can window film hurt my pet if they press against the glass?",
    a: "No. Window film is applied to the inside surface of the glass and is completely pet-safe once cured (usually 24-48 hours). It doesn't emit any fumes or chemicals that are harmful to dogs, cats, birds, or other animals.",
  },
  {
    q: "How much cooler will my pet's favorite sunny spot be after window film?",
    a: "Most Long Island pet owners report a 10–20 degree drop in temperature right next to filmed windows. Rooms with south- or west-facing windows see the biggest improvement. Your pet can still enjoy natural light — just without the dangerous heat.",
  },
  {
    q: "Does window film stop cats from sitting in the window?",
    a: "Window film doesn't obstruct the view, so most cats continue to sit in their favorite spots. They just won't get overheated or exposed to UV rays while they do it. From the cat's perspective, the window looks exactly the same.",
  },
  {
    q: "Will privacy film stop my dog from barking at passersby?",
    a: "Frosted or one-way privacy film reduces visibility from outside (so fewer people stop and stare), but most dogs can still see movement through it. If reducing the trigger entirely is the goal, an opaque decorative film covering the lower portion of the window is more effective.",
  },
  {
    q: "Is window film worth it for just one or two pets?",
    a: "Yes — especially in older Long Island homes with single-pane or aluminum-frame windows that heat up significantly. Even one south-facing room with a dog crate or cat perch can get dangerously hot. One install, lifetime warranty, and your pet is protected every summer going forward.",
  },
];

export default function BlogPetOwnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isTransparent={false} />
      <BlogArticleLayout
        tag="Pet Safety · Solar Film · Privacy Film"
        title="Window Film for Long Island Pet Owners: Cooler Rooms, UV Protection, and Calmer Dogs"
        metaLine="By Paul Silverman · CoolVu of Long Island · June 2026 · 5 min read"
        answerText="Window film keeps sun-facing rooms cooler and safer for pets — blocking up to 60% of solar heat and 99% of UV rays. It also reduces outside visual triggers that make dogs bark. One install, lifetime residential warranty."
        faqItems={faq}
        ctaHeadline="Protect Your Pets This Summer"
        ctaBody="Get a free estimate from CoolVu of Long Island. We serve all of Nassau and Suffolk Counties — Westbury, Garden City, Huntington, Smithtown, Bay Shore, and everywhere in between. Call 516-535-9555 or visit coolvulongisland.com."
      >
        <p>If you have a dog or a cat on Long Island, you already know the drill come June: you go to work, the house heats up, and your pet is stuck in a room that turns into an oven. You come home to a panting, anxious animal — and a PSEG bill that hurts almost as much.</p>

        <p>What most pet owners don't realize is that their windows are the main problem. Glass lets sunlight pass through and traps the heat inside. A room with south- or west-facing windows can be 15–20 degrees hotter than the rest of the house by mid-afternoon — even with the AC running. For a dog in a crate, or a cat in their favorite sunny spot, that's not just uncomfortable. It can be dangerous.</p>

        <p>Solar window film fixes this. It's a thin, nearly invisible layer applied to the inside of your glass that blocks heat at the source — before it ever gets into the room. Your pet keeps the natural light they love. The dangerous heat stays outside.</p>

        <h2>The Real Risk: How Hot Does a Sun-Facing Room Get?</h2>

        <p>Dogs can't sweat the way humans do. They rely on panting to cool down, and when the ambient air temperature is already high, panting stops working. Cats are more heat-tolerant, but senior cats and short-faced breeds (like Persians) are vulnerable to heat stress too.</p>

        <div className="not-prose my-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "60%", label: "of solar heat blocked at the glass" },
            { num: "99%", label: "of UV rays blocked" },
            { num: "15–20°F", label: "typical drop near filmed windows" },
            { num: "∞", label: "lifetime residential warranty" },
          ].map((s) => (
            <div key={s.num} className="bg-[#EBF3FB] rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-[#1F4E79]">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <p>Here's a real example: A customer in Levittown had a rescue greyhound who spent the day in a crate in the living room. West-facing windows meant that by 3pm, the room temperature near the crate was pushing 88°F — even with central air running. After CoolVu filmed the three west-facing windows, afternoon temperatures in that room dropped to the low 70s. The dog's anxiety during hot days nearly disappeared.</p>

        <h2>Solar Film: The Heat Problem Solved</h2>

        <p>Solar window film works like a reflective shield on your glass. When sunlight hits the window, the film bounces a large portion of the infrared heat energy (the hot part of sunlight) back outside. Natural light still passes through — the room stays bright — but the heat doesn't follow it in.</p>

        <p>For rooms where pets spend the day, solar film is the single most effective upgrade you can make. No monthly cost. No maintenance. Just a quieter, cooler, safer space for your animal.</p>

        <table>
          <thead>
            <tr>
              <th>Solution</th>
              <th>Blocks Heat?</th>
              <th>Keeps Natural Light?</th>
              <th>Safe for Pets?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Solar Window Film</strong></td>
              <td>✅ Up to 60%</td>
              <td>✅ Yes</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Blackout curtains</td>
              <td>✅ Yes</td>
              <td>❌ Room goes dark</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Fans / portable AC</td>
              <td>❌ Moves air only</td>
              <td>✅ Yes</td>
              <td>✅ Yes</td>
            </tr>
            <tr>
              <td>Replacing windows</td>
              <td>🟡 Modest improvement</td>
              <td>✅ Yes</td>
              <td>✅ Yes</td>
            </tr>
          </tbody>
        </table>

        <h2>UV Protection for Pets — A Benefit Most Owners Miss</h2>

        <p>UV rays don't just fade your hardwood floors and furniture. They can be harmful to pets too. Cats, especially white or light-colored cats, are susceptible to UV-related skin conditions — including squamous cell carcinoma on their ears and nose from sun exposure through windows. Dogs with thin, short fur (like Greyhounds, Whippets, and Bulldogs) face similar risks.</p>

        <p>Solar film blocks 99% of UV rays. If your cat spends hours in a sunny window seat or your dog lounges in a sunbeam on the floor, film is protecting them in ways you can't see.</p>

        <h2>Privacy Film: For Dogs Who Bark at Everything</h2>

        <p>If your dog barks at every person, dog, squirrel, or delivery truck that passes by, they may not need more training — they may need fewer visual triggers. Dogs bark reactively when they can see movement outside. Remove the visual, and many dogs naturally calm down.</p>

        <p>One-way privacy film lets your dog see out but makes it much harder for people outside to see in. It dramatically reduces the "there's someone out there!" moment that sets dogs off. Another option is frosted film on the lower portion of street-facing windows — your dog can't see the sidewalk, but the room still gets light from the upper glass.</p>

        <div className="not-prose my-6 bg-amber-50 border border-amber-300 rounded-xl p-5">
          <p className="text-sm text-gray-800"><strong className="text-orange-700">Pro tip:</strong> For homes with reactive dogs, we often recommend one-way solar film on front windows (reduces heat AND visual triggers) and frosted privacy film on lower side windows where delivery trucks and pedestrians pass. It's a combination that makes a real difference.</p>
        </div>

        <h2>Which Windows to Film First</h2>

        <p>If you're not sure where to start, prioritize the rooms and windows where your pets spend the most time during the day. After that, window direction matters:</p>

        <table>
          <thead>
            <tr>
              <th>Window Direction</th>
              <th>Peak Heat Time</th>
              <th>Priority for Pet Rooms</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>West-facing</td>
              <td>2pm–7pm — worst of the day</td>
              <td>🔴 Film first</td>
            </tr>
            <tr>
              <td>South-facing</td>
              <td>All day — constant sun exposure</td>
              <td>🔴 Film first</td>
            </tr>
            <tr>
              <td>East-facing</td>
              <td>Morning only — cools by noon</td>
              <td>🟡 Secondary priority</td>
            </tr>
            <tr>
              <td>Sliding glass doors (any direction)</td>
              <td>Varies — but large glass area = big heat gain</td>
              <td>🔴 High priority</td>
            </tr>
          </tbody>
        </table>

        <h2>Serving Long Island Pet Owners Everywhere</h2>

        <p>CoolVu of Long Island installs solar and privacy film throughout Nassau County and Suffolk County — including Westbury, Garden City, Great Neck, Manhasset, Mineola, Rockville Centre, Merrick, Massapequa, Levittown, Freeport, and Valley Stream in Nassau; and Huntington, Smithtown, Commack, Bay Shore, Babylon, Hauppauge, Ronkonkoma, Patchogue, Islip, and Port Jefferson in Suffolk.</p>

        <p>Free estimates on every job. Lifetime residential warranty on every installation. No pressure, no upselling — just an honest assessment of which windows will help your pets the most.</p>

        <p>Call us at <strong>516-535-9555</strong> or visit <strong>coolvulongisland.com</strong> to schedule your free estimate.</p>
      </BlogArticleLayout>
      <Footer />
    </div>
  );
}
