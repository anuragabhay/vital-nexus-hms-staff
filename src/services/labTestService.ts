
import { supabase } from '@/lib/supabase';
import { LabTest, CreateLabTestPayload, UpdateLabTestPayload } from '@/types/lab';

const TABLE_NAME = 'lab_tests';

export async function getAllLabTests(): Promise<LabTest[]> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching lab tests:', error);
    throw new Error(`Error fetching lab tests: ${error.message}`);
  }

  return data || [];
}

export async function getLabTestById(id: string): Promise<LabTest | null> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching lab test with id ${id}:`, error);
    throw new Error(`Error fetching lab test: ${error.message}`);
  }

  return data;
}

export async function createLabTest(payload: CreateLabTestPayload): Promise<LabTest> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .insert([payload])
    .select()
    .single();

  if (error) {
    console.error('Error creating lab test:', error);
    throw new Error(`Error creating lab test: ${error.message}`);
  }

  return data;
}

export async function updateLabTest(id: string, payload: UpdateLabTestPayload): Promise<LabTest> {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(payload)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(`Error updating lab test with id ${id}:`, error);
    throw new Error(`Error updating lab test: ${error.message}`);
  }

  return data;
}

export async function toggleLabTestStatus(id: string, isActive: boolean): Promise<void> {
  const { error } = await supabase
    .from(TABLE_NAME)
    .update({ is_active: isActive })
    .eq('id', id);

  if (error) {
    console.error(`Error toggling lab test status with id ${id}:`, error);
    throw new Error(`Error toggling lab test status: ${error.message}`);
  }
}

export async function deleteLabTest(id: string): Promise<void> {
  const { error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq('id', id);

  if (error) {
    console.error(`Error deleting lab test with id ${id}:`, error);
    throw new Error(`Error deleting lab test: ${error.message}`);
  }
}
