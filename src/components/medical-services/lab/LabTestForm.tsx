
import React from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { createLabTest, updateLabTest } from '@/services/labTestService';
import { LabTest, CreateLabTestPayload } from '@/types/lab';

interface LabTestFormProps {
  isOpen: boolean;
  onClose: () => void;
  labTest?: LabTest | null;
}

const LabTestForm: React.FC<LabTestFormProps> = ({ isOpen, onClose, labTest }) => {
  const { toast } = useToast();
  const isEditing = !!labTest;

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateLabTestPayload>({
    defaultValues: {
      name: labTest?.name || '',
      description: labTest?.description || '',
      cost: labTest?.cost || 0,
      category: labTest?.category || '',
      turnaround_time: labTest?.turnaround_time || '',
      is_active: labTest?.is_active !== undefined ? labTest.is_active : true,
    }
  });

  const onSubmit = async (data: CreateLabTestPayload) => {
    try {
      if (isEditing && labTest) {
        await updateLabTest(labTest.id, data);
        toast({
          title: "Test updated",
          description: "Lab test has been updated successfully.",
        });
      } else {
        await createLabTest(data);
        toast({
          title: "Test created",
          description: "New lab test has been created successfully.",
        });
      }
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${isEditing ? 'update' : 'create'} lab test.`,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Lab Test' : 'Add New Lab Test'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                {...register("name", { required: "Name is required" })}
                error={errors.name?.message}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                className="col-span-3"
                {...register("category", { required: "Category is required" })}
                error={errors.category?.message}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="turnaround_time" className="text-right">
                Turnaround Time
              </Label>
              <Input
                id="turnaround_time"
                className="col-span-3"
                placeholder="e.g., 24 hours"
                {...register("turnaround_time", { required: "Turnaround time is required" })}
                error={errors.turnaround_time?.message}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cost" className="text-right">
                Cost
              </Label>
              <Input
                id="cost"
                type="number"
                min="0"
                step="0.01"
                className="col-span-3"
                {...register("cost", { 
                  required: "Cost is required",
                  valueAsNumber: true,
                  min: { value: 0, message: "Cost must be a positive number" }
                })}
                error={errors.cost?.message}
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                className="col-span-3"
                rows={3}
                {...register("description")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Status</Label>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="is_active"
                  {...register("is_active")}
                />
                <label
                  htmlFor="is_active"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Active
                </label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : isEditing ? 'Update' : 'Create'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LabTestForm;
