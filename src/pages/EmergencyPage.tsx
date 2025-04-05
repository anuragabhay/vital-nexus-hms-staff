
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EmergencyPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Emergency Management</h2>
          <p className="text-muted-foreground">Manage emergency cases and ambulance dispatch</p>
        </div>
        
        <Tabs defaultValue="cases">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cases">Emergency Cases</TabsTrigger>
            <TabsTrigger value="ambulances">Ambulance Dispatch</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cases">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Emergency case management will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ambulances">
            <Card>
              <CardHeader>
                <CardTitle>Ambulance Dispatch</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Ambulance tracking and dispatch management will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default EmergencyPage;
