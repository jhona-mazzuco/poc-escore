export interface Menu {
  icon?: string;
  url?: string;
  name: string;
  opened?: boolean;
  children?: Menu[];
}
