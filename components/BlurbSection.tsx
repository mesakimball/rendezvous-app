export default function BlurbSection() {
  return (
    <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20">
      </div>
      <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center">
      </div>
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
          <h1 class="text-3xl mb-4">Why don't we call it Mountain Man?</h1>
          <p>
            This section is going to be quite meaningful. It will explain why we
            call it "Mountain Of The Lord" and not "Mountain Man". After reading
            this, everyone will be excited about the Rendezvous and will tell
            their neighbors about it. It will convey a tone of reverence, and
            draw a tear from the reader.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
