
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  Leaf, 
  BarChart3,
  Calendar,
  DollarSign,
  Recycle,
  Bell,
  Users
} from "lucide-react";
import { InventoryGrid } from "@/components/InventoryGrid";
import { WastePredictionChart } from "@/components/WastePredictionChart";
import { SustainabilityMetrics } from "@/components/SustainabilityMetrics";
import { AlertsPanel } from "@/components/AlertsPanel";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for demonstration
  const dashboardStats = {
    totalProducts: 1247,
    expiringProducts: 23,
    weeklyWasteSaved: 87,
    carbonSaved: 142,
    predictionAccuracy: 94
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  SmartRetail
                </h1>
                <p className="text-sm text-muted-foreground">by Team Future Vision</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Leaf className="h-3 w-3 mr-1" />
                Eco Mode
              </Badge>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Alerts (3)
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Products</p>
                  <p className="text-2xl font-bold">{dashboardStats.totalProducts}</p>
                </div>
                <Package className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Expiring Soon</p>
                  <p className="text-2xl font-bold">{dashboardStats.expiringProducts}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Waste Saved (kg)</p>
                  <p className="text-2xl font-bold">{dashboardStats.weeklyWasteSaved}</p>
                </div>
                <Recycle className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">CO₂ Saved (kg)</p>
                  <p className="text-2xl font-bold">{dashboardStats.carbonSaved}</p>
                </div>
                <Leaf className="h-8 w-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">AI Accuracy</p>
                  <p className="text-2xl font-bold">{dashboardStats.predictionAccuracy}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 bg-white border shadow-sm">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="inventory" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Inventory</span>
            </TabsTrigger>
            <TabsTrigger value="predictions" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>AI Predictions</span>
            </TabsTrigger>
            <TabsTrigger value="sustainability" className="flex items-center space-x-2">
              <Leaf className="h-4 w-4" />
              <span>Sustainability</span>
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>Alerts</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <span>Weekly Performance</span>
                  </CardTitle>
                  <CardDescription>
                    Waste reduction and prediction accuracy trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WastePredictionChart />
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    <span>Sustainability Impact</span>
                  </CardTitle>
                  <CardDescription>
                    Environmental benefits achieved this month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Waste Reduction Goal</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Carbon Footprint Reduction</span>
                        <span>84%</span>
                      </div>
                      <Progress value={84} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Donation Partnerships</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions and system updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="bg-green-500 p-2 rounded-full">
                      <Recycle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">15 items donated to Local Food Bank</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="bg-blue-500 p-2 rounded-full">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">AI prediction model updated</p>
                      <p className="text-xs text-muted-foreground">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <div className="bg-orange-500 p-2 rounded-full">
                      <AlertTriangle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">23 products expiring in 3 days</p>
                      <p className="text-xs text-muted-foreground">6 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <InventoryGrid />
          </TabsContent>

          <TabsContent value="predictions">
            <WastePredictionChart />
          </TabsContent>

          <TabsContent value="sustainability">
            <SustainabilityMetrics />
          </TabsContent>

          <TabsContent value="alerts">
            <AlertsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
