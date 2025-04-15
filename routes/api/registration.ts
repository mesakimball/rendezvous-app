import { FreshContext, Handlers } from "$fresh/server.ts";
import { createRegistration } from "../../db/index.ts";
import { RegistrationContact } from "../../db/types.ts";

type RegistrationTypeEnum = "teachers" | "priests" | "ward" | "leaders";

export const handler: Handlers = {
  async POST(req: Request, _ctx: FreshContext) {
    try {
      const form = await req.formData();
      const registrationData: RegistrationContact = {
        registrationType: form.get("registrationType")
          ?.toString() as RegistrationTypeEnum,
        contactName: form.get("contactName")?.toString() as string,
        contactPhone: form.get("contactPhone")?.toString() as string,
        contactEmail: form.get("contactEmail")?.toString() as string,
        clerkName: form.get("clerkName")?.toString() as string,
        clerkPhone: form.get("clerkPhone")?.toString() as string,
        clerkEmail: form.get("clerkEmail")?.toString() as string,
        wardName: form.get("wardName")?.toString() as string,
        stakeName: form.get("stakeName")?.toString() as string,
        teachersCount: parseInt(form.get("teachersCount") as string ?? "0"),
        priestsCount: parseInt(form.get("priestsCount") as string ?? "0"),
        leadersCount: parseInt(form.get("leadersCount") as string ?? "0"),
        specialAccomodations: form.get("specialAccomodations")?.toString(),
      };
      await createRegistration(registrationData);
      return new Response("", {
        status: 302,
        headers: { Location: "/registration/success" },
      });
    } catch (err) {
      return new Response("", {
        status: 302,
        headers: { Location: `/registration/error?error=${err}` },
      });
    }
  },
};
