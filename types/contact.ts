export interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string; // or Date if your API sends ISO date strings
}
