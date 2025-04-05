
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Calendar, 
  Bed, 
  Stethoscope, 
  Ambulance 
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const DashboardPage = () => {
  // Sample dashboard data
  const stats = [
    { title: 'Total Patients', value: '2,584', icon: Users, change: '+12%', color: 'text-blue-600' },
    { title: 'Appointments', value: '48', icon: Calendar, change: '+8%', color: 'text-green-600' },
    { title: 'Bed Occupancy', value: '76%', icon: Bed, change: '-3%', color: 'text-red-600' },
    { title: 'Pending Tests', value: '24', icon: Stethoscope, change: '+5%', color: 'text-purple-600' },
    { title: 'Emergency Cases', value: '7', icon: Ambulance, change: '+2%', color: 'text-orange-600' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Hospital overview and key metrics</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
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

          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <div>
                    <p className="text-sm font-medium">9:00 AM - Staff Meeting</p>
                    <p className="text-xs text-muted-foreground">Conference Room B</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <div>
                    <p className="text-sm font-medium">11:30 AM - Surgery</p>
                    <p className="text-xs text-muted-foreground">OR 2 - Dr. Johnson</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <div>
                    <p className="text-sm font-medium">2:00 PM - Dept. Review</p>
                    <p className="text-xs text-muted-foreground">Admin Office</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                  <div>
                    <p className="text-sm font-medium">4:30 PM - Handover</p>
                    <p className="text-xs text-muted-foreground">Nurses Station</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
