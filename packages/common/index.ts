export interface ContactBody {
  name: string;
  email: string;
  address?: string;
}

export interface Contact extends ContactBody {
  id: string;
}
