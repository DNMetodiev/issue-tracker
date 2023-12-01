export interface Issue {
  id?: string;
  caseId: string;
  title: string;
  description: string;
  status: string;
}

export interface Incident {
  id: string;
  caseId: string;
  title: string;
  description: string;
  status: string;
  incidentId: string;
}