export default function RegisterSection() {
  return (
    <section class="bg-stone-800 px-6 py-24 sm:py-32 lg:px-8">
      <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Registration
          </h2>
          <p class="mb-8 font-light sm:text-xl text-gray-300">
            Ready to join us for Mountain of the Lord Rendezvous? Begin by
            completing your registration—this secures your spot and lets us
            start the process. After you register, we’ll coordinate with your
            ward clerk to finalize payment. Once that’s complete, you’ll receive
            your registration packet with everything needed to prepare for this
            meaningful event. We’re looking forward to seeing you there!
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="/registration"
              class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-sky-500 focus:ring-4 focus:ring-sky-600"
            >
              Register
            </a>
            <a
              href="/my-role"
              class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-user-search-icon lucide-user-search mr-2 -ml-1 w-5 h-5"
              >
                <circle cx="10" cy="7" r="4" />
                <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
                <circle cx="17" cy="17" r="3" />
                <path d="m21 21-1.9-1.9" />
              </svg>
              Who registers?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
