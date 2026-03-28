import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <TrustBar />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[50vh] p-8 text-center bg-coolvu-off-white">
        <h2 className="text-3xl md:text-5xl font-bold text-coolvu-dark-blue mb-4 font-heading">
          Trusted Local Experts
        </h2>
        <p className="text-lg md:text-xl text-coolvu-medium-blue max-w-2xl font-sans">
          More content goes here below the hero...
        </p>
      </main>
    </PageWrapper>
  );
}

