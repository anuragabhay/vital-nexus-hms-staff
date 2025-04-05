
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

interface EmergencyCase {
  id: string;
  patient_name: string;
  status: string;
  severity: string;
  admitted_at: string;
}

interface Ambulance {
  id: string;
  vehicle_number: string;
  status: string;
  location: string;
}

const EmergencyPage = () => {
  const [cases, setCases] = useState<EmergencyCase[]>([]);
  const [ambulances, setAmbulances] = useState<Ambulance[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Instead of fetching from Supabase immediately, use mock data
    // This prevents errors if Supabase connection is not working
    const mockCases: EmergencyCase[] = [
      {
        id: '1',
        patient_name: 'John Doe',
        status: 'Critical',
        severity: 'High',
        admitted_at: new Date().toISOString(),
      },
      {
        id: '2',
        patient_name: 'Jane Smith',
        status: 'Stable',
        severity: 'Medium',
        admitted_at: new Date().toISOString(),
      },
    ];

    const mockAmbulances: Ambulance[] = [
      {
        id: '1',
        vehicle_number: 'AMB-001',
        status: 'Available',
        location: 'Hospital Parking',
      },
      {
        id: '2',
        vehicle_number: 'AMB-002',
        status: 'On Call',
        location: 'Downtown Area',
      },
    ];

    setCases(mockCases);
    setAmbulances(mockAmbulances);
    setLoading(false);
  }, []);

  // Function to fetch real data once Supabase is properly connected
  const fetchRealData = async () => {
    try {
      setLoading(true);
      
      // Uncomment these when Supabase is properly connected
      // const { data: casesData, error: casesError } = await supabase
      //   .from('emergency_cases')
      //   .select('*');

      // if (casesError) throw casesError;
      
      // const { data: ambulancesData, error: ambulancesError } = await supabase
      //   .from('ambulances')
      //   .select('*');
      
      // if (ambulancesError) throw ambulancesError;
      
      // setCases(casesData || []);
      // setAmbulances(ambulancesData || []);
      
      toast({
        title: "Connection Test",
        description: "Supabase connection test. This would fetch real data when properly connected.",
      });
    } catch (error) {
      console.error('Error fetching emergency data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch emergency data. Using mock data instead.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Emergency Management</h2>
            <p className="text-muted-foreground">Manage emergency cases and ambulance dispatch</p>
          </div>
          <button 
            onClick={fetchRealData}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Test Connection'}
          </button>
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
                {loading ? (
                  <p>Loading emergency cases...</p>
                ) : cases.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="p-2 text-left">Patient Name</th>
                          <th className="p-2 text-left">Status</th>
                          <th className="p-2 text-left">Severity</th>
                          <th className="p-2 text-left">Admitted At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cases.map((case_) => (
                          <tr key={case_.id} className="border-b">
                            <td className="p-2">{case_.patient_name}</td>
                            <td className="p-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                case_.status === 'Critical' 
                                  ? 'bg-red-100 text-red-800' 
                                  : case_.status === 'Stable' 
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {case_.status}
                              </span>
                            </td>
                            <td className="p-2">{case_.severity}</td>
                            <td className="p-2">{new Date(case_.admitted_at).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p>No emergency cases found.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ambulances">
            <Card>
              <CardHeader>
                <CardTitle>Ambulance Dispatch</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <p>Loading ambulance data...</p>
                ) : ambulances.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="p-2 text-left">Vehicle Number</th>
                          <th className="p-2 text-left">Status</th>
                          <th className="p-2 text-left">Location</th>
                          <th className="p-2 text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ambulances.map((ambulance) => (
                          <tr key={ambulance.id} className="border-b">
                            <td className="p-2">{ambulance.vehicle_number}</td>
                            <td className="p-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                ambulance.status === 'Available' 
                                  ? 'bg-green-100 text-green-800' 
                                  : ambulance.status === 'On Call' 
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {ambulance.status}
                              </span>
                            </td>
                            <td className="p-2">{ambulance.location}</td>
                            <td className="p-2">
                              <button 
                                className="text-blue-600 hover:text-blue-800 mr-2"
                                onClick={() => toast({
                                  title: "Dispatch",
                                  description: `Dispatched ambulance ${ambulance.vehicle_number}`,
                                })}
                              >
                                Dispatch
                              </button>
                              <button 
                                className="text-gray-600 hover:text-gray-800"
                                onClick={() => toast({
                                  title: "Track",
                                  description: `Tracking ambulance ${ambulance.vehicle_number}`,
                                })}
                              >
                                Track
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p>No ambulances found.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default EmergencyPage;
