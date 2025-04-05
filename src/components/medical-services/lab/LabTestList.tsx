
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllLabTests, toggleLabTestStatus } from '@/services/labTestService';
import { LabTest } from '@/types/lab';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LabTestForm from './LabTestForm';

const LabTestList: React.FC = () => {
  const { toast } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState<LabTest | null>(null);

  const { data: labTests = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['labTests'],
    queryFn: getAllLabTests,
  });

  const handleEdit = (test: LabTest) => {
    setSelectedTest(test);
    setIsFormOpen(true);
  };

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      await toggleLabTestStatus(id, !currentStatus);
      refetch();
      toast({
        title: "Status updated",
        description: `Test status has been ${!currentStatus ? 'activated' : 'deactivated'}.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update test status.",
        variant: "destructive",
      });
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setSelectedTest(null);
    refetch();
  };

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading lab tests...</div>;
  }

  if (isError) {
    return <div className="text-red-500 p-8">Error loading lab tests. Please try again.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Laboratory Tests</h3>
        <Button onClick={() => setIsFormOpen(true)} size="sm">
          <Plus className="mr-2 h-4 w-4" /> Add New Test
        </Button>
      </div>

      {labTests.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No lab tests found. Click "Add New Test" to create one.
        </div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Turnaround Time</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {labTests.map((test) => (
                <TableRow key={test.id}>
                  <TableCell className="font-medium">{test.name}</TableCell>
                  <TableCell>{test.category}</TableCell>
                  <TableCell>{test.turnaround_time}</TableCell>
                  <TableCell>${test.cost.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={test.is_active ? "default" : "secondary"}>
                      {test.is_active ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(test)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleToggleStatus(test.id, test.is_active)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {isFormOpen && (
        <LabTestForm 
          isOpen={isFormOpen} 
          onClose={handleFormClose} 
          labTest={selectedTest} 
        />
      )}
    </div>
  );
};

export default LabTestList;
