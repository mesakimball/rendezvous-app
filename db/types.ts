export type RegistrationContact = {
  id?: string;
  registrationType: "teachers" | "priests" | "ward" | "leaders";
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  clerkName: string;
  clerkEmail: string;
  clerkPhone: string;
  wardName: string;
  stakeName: string;
  teachersCount?: number;
  priestsCount?: number;
  leadersCount?: number;
  specialAccomodations?: string;
};
