import { useSignal } from "@preact/signals";

type RegistrationType = "teachers" | "priests" | "ward" | "stake";

export default function RegistrationForm() {
  const registrationType = useSignal("teachers");

  return (
    <form action="#">
      {/* Start registration type */}
      <h3 class="mb-2 text-lg font-medium text-gray-900">
        Who are you registering for Rendezvous?
      </h3>
      <ul class="grid w-full gap-6 md:grid-cols-2">
        <li onClick={() => registrationType.value = "teachers"}>
          <input
            type="radio"
            id="teachers"
            name="registrationType"
            value="teachers"
            class="hidden peer"
            required
            checked
          />
          <label
            for="teachers"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-600 peer-checked:text-sky-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">
                Teachers Quorum
              </div>
              <div class="w-full">
                Only Teacher-age young men plus adult leaders from my ward
              </div>
            </div>
            <svg
              class="w-5 h-5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </label>
        </li>
        <li onClick={() => registrationType.value = "priests"}>
          <input
            type="radio"
            id="priests"
            name="registrationType"
            value="priests"
            class="hidden peer"
          />
          <label
            for="priests"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-600 peer-checked:text-sky-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">
                Priests Quorum
              </div>
              <div class="w-full">
                Only Priest-age young men plus adult leaders from my ward
              </div>
            </div>
            <svg
              class="w-5 h-5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </label>
        </li>
        <li onClick={() => registrationType.value = "ward"}>
          <input
            type="radio"
            id="ward"
            name="registrationType"
            value="ward"
            class="hidden peer"
          />
          <label
            for="ward"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-600 peer-checked:text-sky-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">
                Teachers + Priests
              </div>
              <div class="w-full">
                All Teachers & Priests plus adult leaders from my ward
              </div>
            </div>
            <svg
              class="w-5 h-5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </label>
        </li>
        <li onClick={() => registrationType.value = "stake"}>
          <input
            type="radio"
            id="stake"
            name="registrationType"
            value="stake"
            class="hidden peer"
          />
          <label
            for="stake"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-sky-600 peer-checked:text-sky-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">
                Adult Leaders
              </div>
              <div class="w-full">Only adult leaders from my ward or stake</div>
            </div>
            <svg
              class="w-5 h-5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </label>
        </li>
      </ul>
      {/* End registration type */}

      <div class="grid gap-4 my-4 sm:grid-cols-2 sm:gap-6 sm:my-6">
        <div class="w-full">
          <label
            for="name"
            class="block mb-2 text-lg font-medium text-gray-900"
          >
            Your Ward
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
            required
          />
        </div>
        <div class="w-full">
          <label
            for="name"
            class="block mb-2 text-lg font-medium text-gray-900"
          >
            Your Stake
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="name"
            class="block mb-2 text-lg font-medium text-gray-900"
          >
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
            required
          />
        </div>
        <div class="w-full">
          <label
            for="brand"
            class="block mb-2 text-lg font-medium text-gray-900"
          >
            Your phone number
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
            required
          />
        </div>
        <div class="w-full">
          <label
            for="price"
            class="block mb-2 text-lg font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="number"
            name="price"
            id="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
            required
          />
        </div>
        {/* Start ward clerk block */}
        <div class="sm:col-span-2">
          <label
            for="name"
            class="block mb-2 text-lg font-medium text-gray-900"
          >
            Ward clerk name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
            required
          />
        </div>
        <div class="w-full">
          <label
            for="brand"
            class="block mb-2 text-lg font-medium text-gray-900"
          >
            Ward clerk phone number
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
            required
          />
        </div>
        <div class="w-full">
          <label
            for="price"
            class="block mb-2 text-lg font-medium text-gray-900"
          >
            Ward clerk email
          </label>
          <input
            type="number"
            name="price"
            id="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
            required
          />
        </div>
        {/* End ward clerk block */}
        {/* Start count block */}
        {(registrationType.value === "teachers" ||
          registrationType.value === "ward") && (
          <div class="w-full">
            <label
              for="brand"
              class="block mb-2 text-lg font-medium text-gray-900"
            >
              How Many Teachers?
            </label>
            <input
              type="number"
              name="brand"
              id="brand"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
              required
            />
          </div>
        )}
        {(registrationType.value === "priests" ||
          registrationType.value === "ward") && (
          <div class="w-full">
            <label
              for="brand"
              class="block mb-2 text-lg font-medium text-gray-900"
            >
              How Many Priests?
            </label>
            <input
              type="number"
              name="brand"
              id="brand"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
              required
            />
          </div>
        )}
        {
          <div class="w-full">
            <label
              for="brand"
              class="block mb-2 text-lg font-medium text-gray-900"
            >
              How Many Adult Leaders?
            </label>
            <input
              type="number"
              name="brand"
              id="brand"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
              required
            />
          </div>
        }
        {/* End count block */}
        <div class="sm:col-span-2">
          <label
            for="description"
            class="block mb-2 text-lg font-medium text-gray-900 "
          >
            Any Special Accommodations?
          </label>
          <textarea
            id="description"
            rows={8}
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500"
          >
          </textarea>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button
          type="submit"
          class="text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Register
        </button>
      </div>
    </form>
  );
}
