export interface Transaction {
  code: string;
  title: string;
  date: string;
  evidence: any[];
  coin: string;
  hasClient: boolean;
  hasOrder: boolean;
  hasProvider: boolean;
  hasService: boolean;
  isIsolatedTransaction: boolean;
  order: object | null;
  provider: object | null;
  service: object | null;
  client: object | null
  value: number;
  type: string;
  description: string;
}
