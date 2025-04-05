
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const BedManagementPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Bed Management</h2>
          <p className="text-muted-foreground">Monitor and manage hospital beds and rooms</p>
        </div>
        
        <Tabs defaultValue="beds">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="beds">Bed Status</TabsTrigger>
            <TabsTrigger value="rooms">Room Allocation</TabsTrigger>
            <TabsTrigger value="discharge">Discharge Planning</TabsTrigger>
          </TabsList>
          
          <TabsContent value="beds">
            <Card>
              <CardHeader>
                <CardTitle>Bed Occupancy Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">General Ward</span>
                      <span className="text-sm text-muted-foreground">32/40 beds</span>
                    </div>
                    <div className="relative">
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">ICU</span>
                      <span className="text-sm text-muted-foreground">8/12 beds</span>
                    </div>
                    <div className="relative">
                      <Progress value={67} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Pediatric Ward</span>
                      <span className="text-sm text-muted-foreground">18/25 beds</span>
                    </div>
                    <div className="relative">
                      <Progress value={72} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Maternity</span>
                      <span className="text-sm text-muted-foreground">14/20 beds</span>
                    </div>
                    <div className="relative">
                      <Progress value={70} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="rooms">
            <Card>
              <CardHeader>
                <CardTitle>Room Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Room allocation and management will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="discharge">
            <Card>
              <CardHeader>
                <CardTitle>Discharge Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discharge planning and management will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default BedManagementPage;
