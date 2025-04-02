export default function RegisterSection() {
  return (
    <section class="bg-stone-800 px-6 py-24 sm:py-32 lg:px-8">
      <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Let's get you registered.
          </h2>
          <p class="mb-8 font-light sm:text-xl text-gray-300">
            This is a little blurb that will explain a bit of detail about
            registration. About how you can register just your teachers, just
            your priests, or all your ward's young men and adult leaders. There
            will also be a separate way to register adult leaders going with the
            stake. It will be short and punchy- you won't want to pass this up.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="/registration"
              class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-lime-600 rounded-lg hover:bg-lime-700 focus:ring-4 focus:ring-lime-800"
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
              What's my role?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
