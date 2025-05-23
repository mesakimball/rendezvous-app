// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_registration from "./routes/api/registration.ts";
import * as $faq from "./routes/faq.tsx";
import * as $index from "./routes/index.tsx";
import * as $my_role from "./routes/my-role.tsx";
import * as $registration_error from "./routes/registration/error.tsx";
import * as $registration_index from "./routes/registration/index.tsx";
import * as $registration_success from "./routes/registration/success.tsx";
import * as $RegistrationForm from "./islands/RegistrationForm.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/registration.ts": $api_registration,
    "./routes/faq.tsx": $faq,
    "./routes/index.tsx": $index,
    "./routes/my-role.tsx": $my_role,
    "./routes/registration/error.tsx": $registration_error,
    "./routes/registration/index.tsx": $registration_index,
    "./routes/registration/success.tsx": $registration_success,
  },
  islands: {
    "./islands/RegistrationForm.tsx": $RegistrationForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
