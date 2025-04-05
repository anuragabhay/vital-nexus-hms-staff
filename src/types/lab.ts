
export interface LabTest {
  id: string;
  name: string;
  description: string;
  cost: number;
  category: string;
  turnaround_time: string;
  is_active: boolean;
  created_at: string;
}

export interface CreateLabTestPayload {
  name: string;
  description: string;
  cost: number;
  category: string;
  turnaround_time: string;
  is_active: boolean;
}

export interface UpdateLabTestPayload {
  name?: string;
  description?: string;
  cost?: number;
  category?: string;
  turnaround_time?: string;
  is_active?: boolean;
}
