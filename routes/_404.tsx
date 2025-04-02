import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <section class="bg-white dark:bg-stone-800 h-full flex flex-column items-center">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-lime-700">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
              Something's missing.
            </p>
            <p class="mb-4 text-lg font-light text-gray-300">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <a
              href="/"
              class="inline-flex text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-lime-900 my-4"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
