// Real Google reviews for CoolVu of Long Island.
// Pulled from the Google Business Profile (all 5-star). Lightly trimmed for length/clarity;
// wording and meaning preserved. Town is the customer's location per our records.

export interface CustomerReview {
  name: string;
  town: string;
  text: string;
  rating: number;
}

export const REVIEWS: CustomerReview[] = [
  { name: "Cecilia Sutich", town: "Garden City", rating: 5, text: "Great experience from beginning to end. Paul came to the house and gave us all of our options, never once trying to push one design over another. Manny and Josh did an excellent job on the install. Very respectful and nice people too. Highly recommend!" },
  { name: "Donna Cosel-Pieper", town: "East Hampton", rating: 5, text: "Our house in East Hampton faces west and has no shade on that side. I called Paul after seeing his reviews online. He answered the phone and gave me information on the solar film product they use on windows." },
  { name: "Roger Koopmann", town: "Hicksville", rating: 5, text: "We immediately felt a difference the first night that the CoolVu film was installed. The sunlight was reduced and so was the heat." },
  { name: "Andrea Attanasio", town: "New Hyde Park", rating: 5, text: "The installation of my glass tint went very smoothly. The technicians were very careful to keep the working area clean. The results came out beautiful. I highly recommend this company." },
  { name: "Bobby Seck", town: "Salisbury", rating: 5, text: "Paul and his team are honestly exceptional. This was a new thing to me, and Paul is a pioneer in this field!" },
  { name: "Apple C.", town: "Queens Village", rating: 5, text: "Paul and his crew did an excellent job on my windows. He is very nice and he worked with me on my budget." },
  { name: "Adrian", town: "Deer Park", rating: 5, text: "I had the windows tinted on my home to help with privacy. He walked me through the whole process. Excellent customer service." },
  { name: "Ma Ar", town: "Glen Cove", rating: 5, text: "Professional, courteous and on budget. Recommend this crew!" },
  { name: "Minna Mustonen-Maia", town: "Westbury", rating: 5, text: "Highly recommend Paul at CoolVu. Paul was very knowledgeable and helpful in going over a security plan based on my goals and needs. The best service and quality!" },
  { name: "Thomas Sullivan", town: "East Meadow", rating: 5, text: "Thank you Paul for a great install. The windows look great!" },
  { name: "Mark Jefferson Cacao", town: "Westhampton Bay", rating: 5, text: "CoolVu of Long Island does amazing work! They take their work seriously. Communication is 10/10. You can tell they genuinely care about what they do. Highly recommended! Look for Paul!" },
  { name: "Nicole Fio", town: "Long Beach", rating: 5, text: "Paul and the team were extremely welcoming and went above and beyond to make sure everything was perfect. The service was quick without feeling rushed, and the quality exceeded my expectations. Would absolutely recommend!" },
  { name: "Harry Zouros", town: "Farmingville", rating: 5, text: "Great working with Paul and crew. Friendly, fast and courteous." },
  { name: "Mary Kasin", town: "Merrick", rating: 5, text: "So glad we chose to go with CoolVu of Long Island. Paul was an absolute professional. I am so happy with my windows. The glare is gone." },
  { name: "Kathleen Douglas", town: "Garden City", rating: 5, text: "I would absolutely recommend Paul and his company to friends and family. They are some of the most honest and respectful people I know." },
  { name: "Merri Erlich", town: "Syosset", rating: 5, text: "CoolVu is really Cool! They are very friendly and work hard to make the experience of working with them a good one. I highly recommend them!" },
  { name: "Weymin Hago", town: "Woodbury", rating: 5, text: "Great friendly service. The windows look amazing." },
  { name: "Reina Elyza DeClaro", town: "Sag Harbor", rating: 5, text: "Highly recommend!" },
  { name: "Lauren Chaplin", town: "Manhattan", rating: 5, text: "We had a great experience working with CoolVu. The team was professional, responsive, and easy to work with." },
  { name: "Dennis Silverman", town: "Middle Island", rating: 5, text: "Very professional, did an excellent job. I highly recommend them." },
  { name: "Sonny Alcotas", town: "Smithtown", rating: 5, text: "He is someone who is transparent and will be with you from the beginning to the end. I love his honesty and integrity in doing business." },
  { name: "Gigi Molina", town: "East Islip", rating: 5, text: "My experience with CoolVu has already been excellent. Responsive, professional and a pleasure to deal with." },
  { name: "Luis Cobham", town: "Westhampton Beach", rating: 5, text: "This is a high quality, affordable, and genuine service that is the best alternative to your typical tinting businesses." },
  { name: "Michael Silverman", town: "Massapequa", rating: 5, text: "Paul at CoolVu did a great job with our window tinting and wall graphics. He was easy to work with." },
  { name: "Elizabeth Hilton", town: "Carle Place", rating: 5, text: "We heard about CoolVu from a friend who praised Paul and his professionalism, and he did not disappoint!" },
  { name: "Riane Cristyna", town: "Long Island", rating: 5, text: "Very professional and knowledgeable! If you are looking to tint your windows, definitely choose CoolVu! Best decision I ever made." },
  { name: "Alexandra Swayne", town: "Long Island", rating: 5, text: "Paul at CoolVu is kind and passionate about his business. If you are in the market for his services, I highly recommend hiring him." },
  { name: "Sharina Straughn", town: "Long Island", rating: 5, text: "I am glad I chose this company over the other big ones. Paul was very knowledgeable and helpful in going over a security plan based on my goals and needs. The scheduling and payment was as easy as shopping on Amazon." },
  { name: "Carrie Basak", town: "Long Island", rating: 5, text: "CoolVu is fantastic! They are super responsive, friendly, and work hard to make the experience smooth and easy. You can tell they genuinely care about what they do. Definitely recommend!" },
  { name: "Mike R.", town: "Long Island", rating: 5, text: "Great products and services that CoolVu provides." },
  { name: "Ronnie West", town: "Long Island", rating: 5, text: "Great business!" },
  { name: "Matt Stevens", town: "Long Island", rating: 5, text: "Paul and CoolVu have been excellent in communicating with me, in expectation setting, and with follow up. Love their product offering and will use them again." },
  { name: "Nick Baker", town: "Long Island", rating: 5, text: "Paul recently attended an advanced film course. I found him to be intelligent and capable. He will be an installer that you can trust." },
];

// Total 5-star reviews on the Google Business Profile — verified 2026-09-06.
// This is the number Google, Bing and the AI assistants read, so it must match the
// live GBP total, not just how many review texts we happen to feature below.
// UPDATE THIS whenever the Google review count changes.
export const GOOGLE_REVIEW_COUNT = 37;

// Kept as the public-facing count so existing imports keep working.
export const REVIEW_COUNT = GOOGLE_REVIEW_COUNT;

// How many full review texts we actually show on the page.
export const FEATURED_REVIEW_COUNT = REVIEWS.length;

export const AVERAGE_RATING = 5.0;
