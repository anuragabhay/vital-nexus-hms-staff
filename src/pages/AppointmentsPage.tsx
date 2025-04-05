
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AppointmentsPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
          <p className="text-muted-foreground">Schedule and manage appointments</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Appointment Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Appointment scheduling functionality will be implemented here.</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AppointmentsPage;
