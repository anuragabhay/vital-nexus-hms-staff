
-- This SQL script is for reference only and should be executed in Supabase SQL Editor
-- Create lab_tests table
CREATE TABLE IF NOT EXISTS lab_tests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  cost DECIMAL(10, 2) NOT NULL,
  category TEXT NOT NULL,
  turnaround_time TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster searches
CREATE INDEX IF NOT EXISTS idx_lab_tests_name ON lab_tests(name);
CREATE INDEX IF NOT EXISTS idx_lab_tests_category ON lab_tests(category);

-- Add some sample data
INSERT INTO lab_tests (name, description, cost, category, turnaround_time, is_active)
VALUES 
  ('Complete Blood Count (CBC)', 'Measures several components and features of blood including red cells, white cells, and platelets', 35.00, 'Hematology', '24 hours', true),
  ('Basic Metabolic Panel', 'Tests for glucose, calcium, and electrolytes', 45.00, 'Chemistry', '24 hours', true),
  ('Lipid Panel', 'Measures cholesterol and triglycerides', 60.00, 'Chemistry', '24-48 hours', true),
  ('Thyroid Stimulating Hormone (TSH)', 'Measures thyroid function', 55.00, 'Endocrinology', '24-48 hours', true),
  ('Hemoglobin A1C', 'Measures average blood glucose over past 3 months', 65.00, 'Endocrinology', '24 hours', true),
  ('Urinalysis', 'Examines the content of urine', 25.00, 'Microbiology', '12 hours', true),
  ('Liver Function Tests', 'Assesses liver function and detects liver damage', 75.00, 'Chemistry', '24 hours', true),
  ('Vitamin D', 'Measures vitamin D levels in blood', 85.00, 'Chemistry', '48-72 hours', true),
  ('Pregnancy Test (Serum)', 'Detects pregnancy hormone in blood', 40.00, 'Reproductive', '12 hours', true),
  ('C-Reactive Protein', 'Measures inflammation in the body', 50.00, 'Immunology', '24 hours', true);

-- Enable Row Level Security
ALTER TABLE lab_tests ENABLE ROW LEVEL SECURITY;

-- Create policy for staff access
CREATE POLICY staff_lab_tests_policy ON lab_tests 
  USING (true)  -- Staff can view all lab tests
  WITH CHECK (true);  -- Staff can modify all lab tests
