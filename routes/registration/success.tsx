import FooterSection from "../../components/FooterSection.tsx";

export default function RegisterSuccessPage() {
  return (
    <div class="h-full flex flex-col">
      <section class="bg-stone-800 h-full flex flex-col justify-center">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-sky-400">
            Thank you for registering!
          </h1>
          <p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-300">
            We will calculate totals based on registration count and then reach
            out to your ward clerk with next steps.
          </p>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
