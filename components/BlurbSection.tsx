export default function BlurbSection() {
  return (
    <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20">
      </div>
      <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center">
      </div>
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
          <h1 class="text-3xl mb-4 text-gray-600 font-extrabold">
            Why is it not "Mountain Man" anymore?
          </h1>
          <p>
            Why the change? It's still the same atmosphere and activities you
            know and love, there's just an additional focus on bringing the
            young men closer to Christ. The mountain of the Lord has always been
            a symbol of the temple, and there is an additional spiritual
            component to all of the activities in an effort to point us toward
            the temple.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
