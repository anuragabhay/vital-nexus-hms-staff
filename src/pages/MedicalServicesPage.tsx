
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MedicalServicesPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Medical Services</h2>
          <p className="text-muted-foreground">Manage lab tests, radiology, pharmacy and prescriptions</p>
        </div>
        
        <Tabs defaultValue="lab">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="lab">Lab Tests</TabsTrigger>
            <TabsTrigger value="radiology">Radiology</TabsTrigger>
            <TabsTrigger value="pharmacy">Pharmacy</TabsTrigger>
            <TabsTrigger value="ehr">EHR</TabsTrigger>
          </TabsList>
          
          <TabsContent value="lab">
            <Card>
              <CardHeader>
                <CardTitle>Laboratory Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lab test ordering and results management will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="radiology">
            <Card>
              <CardHeader>
                <CardTitle>Radiology Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Radiology test ordering and results management will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pharmacy">
            <Card>
              <CardHeader>
                <CardTitle>Pharmacy Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Medication management and dispensing will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ehr">
            <Card>
              <CardHeader>
                <CardTitle>Electronic Health Records</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Electronic health record management will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default MedicalServicesPage;
