
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Recycle, 
  Users, 
  Award, 
  TreePine, 
  Droplets,
  Heart,
  TrendingUp,
  Gift,
  Building
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const SustainabilityMetrics = () => {
  const impactData = [
    { name: 'Food Donated', value: 234, color: '#10b981' },
    { name: 'Waste Reduced', value: 189, color: '#3b82f6' },
    { name: 'Items Discounted', value: 156, color: '#f59e0b' },
    { name: 'Composted', value: 87, color: '#8b5cf6' }
  ];

  const monthlyProgress = [
    { month: 'Jan', co2Saved: 98, wasteReduced: 156, donations: 23 },
    { month: 'Feb', co2Saved: 124, wasteReduced: 189, donations: 31 },
    { month: 'Mar', co2Saved: 142, wasteReduced: 234, donations: 28 },
  ];

  const partnerships = [
    { name: 'Green Valley Food Bank', items: 89, type: 'food bank' },
    { name: 'City Shelter Alliance', items: 45, type: 'shelter' },
    { name: 'Community Compost Co-op', items: 67, type: 'compost' },
    { name: 'Local Schools Program', items: 23, type: 'education' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span>Sustainability Impact</span>
          </h2>
          <p className="text-muted-foreground">Track your environmental and social impact</p>
        </div>
        <Badge className="bg-green-100 text-green-800 border-green-200">
          <Award className="h-3 w-3 mr-1" />
          Eco Champion Level 3
        </Badge>
      </div>

      {/* Impact Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">CO₂ Saved</p>
                <p className="text-2xl font-bold">142 kg</p>
                <p className="text-green-200 text-xs">+12% this month</p>
              </div>
              <TreePine className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Water Saved</p>
                <p className="text-2xl font-bold">2,340 L</p>
                <p className="text-blue-200 text-xs">+8% this month</p>
              </div>
              <Droplets className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">People Fed</p>
                <p className="text-2xl font-bold">186</p>
                <p className="text-purple-200 text-xs">+23% this month</p>
              </div>
              <Heart className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Cost Savings</p>
                <p className="text-2xl font-bold">$3,240</p>
                <p className="text-orange-200 text-xs">+15% this month</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Waste Distribution Chart */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Recycle className="h-5 w-5 text-green-600" />
              <span>Waste Distribution</span>
            </CardTitle>
            <CardDescription>
              How your waste reduction efforts are distributed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={impactData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} kg`, 'Amount']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {impactData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}: {item.value}kg</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Progress */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span>Monthly Progress</span>
            </CardTitle>
            <CardDescription>
              Track your sustainability improvements over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="co2Saved" fill="#10b981" name="CO₂ Saved (kg)" />
                <Bar dataKey="wasteReduced" fill="#3b82f6" name="Waste Reduced (kg)" />
                <Bar dataKey="donations" fill="#f59e0b" name="Donations" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Sustainability Goals */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-purple-600" />
            <span>Sustainability Goals</span>
          </CardTitle>
          <CardDescription>Track your progress towards environmental targets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Reduce Waste by 50%</span>
              <span className="text-sm text-muted-foreground">78% complete</span>
            </div>
            <Progress value={78} className="h-3" />
            <p className="text-xs text-muted-foreground mt-1">234kg of 300kg target</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Partner with 10 Organizations</span>
              <span className="text-sm text-muted-foreground">40% complete</span>
            </div>
            <Progress value={40} className="h-3" />
            <p className="text-xs text-muted-foreground mt-1">4 of 10 partnerships active</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Save 200kg CO₂ Monthly</span>
              <span className="text-sm text-muted-foreground">71% complete</span>
            </div>
            <Progress value={71} className="h-3" />
            <p className="text-xs text-muted-foreground mt-1">142kg of 200kg target</p>
          </div>
        </CardContent>
      </Card>

      {/* Partnership Network */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span>Partnership Network</span>
          </CardTitle>
          <CardDescription>Organizations you're making a difference with</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partnerships.map((partner, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    {partner.type === 'food bank' && <Gift className="h-4 w-4 text-blue-600" />}
                    {partner.type === 'shelter' && <Building className="h-4 w-4 text-blue-600" />}
                    {partner.type === 'compost' && <Recycle className="h-4 w-4 text-blue-600" />}
                    {partner.type === 'education' && <Users className="h-4 w-4 text-blue-600" />}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{partner.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{partner.type}</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {partner.items} items
                </Badge>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline" className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100">
              <Plus className="h-4 w-4 mr-2" />
              Add New Partnership
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
