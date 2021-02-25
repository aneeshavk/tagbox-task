export class PageRes<Tdata> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Tdata;
}

export class User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
