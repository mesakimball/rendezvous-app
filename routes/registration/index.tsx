import FooterSection from "../../components/FooterSection.tsx";
import RegistrationForm from "../../islands/RegistrationForm.tsx";

export default function RegisterPage() {
  return (
    <>
      <section class="bg-stone-800">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-sky-400">
            Registration
          </h1>
          <p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-300">
            This blurb explains that registration for young men occurs at the
            ward level now, and the stake is only responsible for stake leaders
            attending Rendezvous.
          </p>
        </div>
      </section>
      <section class="bg-whit">
        <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <RegistrationForm />
        </div>
      </section>
      <FooterSection />
    </>
  );
}
