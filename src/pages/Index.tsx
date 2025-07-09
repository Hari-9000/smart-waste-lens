
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
  Users,
  Sparkles,
  Zap,
  Brain,
  Globe,
  Shield
} from "lucide-react";
import { InventoryGrid } from "@/components/InventoryGrid";
import { WastePredictionChart } from "@/components/WastePredictionChart";
import { SustainabilityMetrics } from "@/components/SustainabilityMetrics";
import { AlertsPanel } from "@/components/AlertsPanel";
import { CopilotChat } from "@/components/CopilotChat";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="relative border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 p-3 rounded-xl shadow-lg shadow-blue-500/25">
                  <Package className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-400 rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  SmartRetail
                </h1>
                <p className="text-sm text-gray-400 flex items-center space-x-2">
                  <span>by Team Future Vision</span>
                  <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-400/30 text-xs">
                    <Brain className="h-3 w-3 mr-1" />
                    AI Powered
                  </Badge>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-400/30 px-3 py-1">
                <Leaf className="h-4 w-4 mr-2" />
                Eco Mode Active
              </Badge>
              <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-400/30 px-3 py-1">
                <Shield className="h-4 w-4 mr-2" />
                System Secure
              </Badge>
              <Button variant="outline" size="sm" className="bg-orange-500/20 border-orange-400/30 text-orange-300 hover:bg-orange-500/30">
                <Bell className="h-4 w-4 mr-2" />
                Alerts (3)
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative container mx-auto px-4 py-8">
        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-600/90 to-blue-700/90 text-white border-blue-400/20 shadow-xl shadow-blue-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Products</p>
                  <p className="text-3xl font-bold">{dashboardStats.totalProducts}</p>
                  <div className="flex items-center mt-2 text-blue-200">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">+12% this month</span>
                  </div>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <Package className="h-8 w-8 text-blue-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600/90 to-red-600/90 text-white border-orange-400/20 shadow-xl shadow-orange-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Expiring Soon</p>
                  <p className="text-3xl font-bold">{dashboardStats.expiringProducts}</p>
                  <div className="flex items-center mt-2 text-orange-200">
                    <Zap className="h-4 w-4 mr-1" />
                    <span className="text-sm">Action needed</span>
                  </div>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <AlertTriangle className="h-8 w-8 text-orange-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600/90 to-emerald-600/90 text-white border-green-400/20 shadow-xl shadow-green-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Waste Saved (kg)</p>
                  <p className="text-3xl font-bold">{dashboardStats.weeklyWasteSaved}</p>
                  <div className="flex items-center mt-2 text-green-200">
                    <Globe className="h-4 w-4 mr-1" />
                    <span className="text-sm">This week</span>
                  </div>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <Recycle className="h-8 w-8 text-green-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-teal-600/90 to-cyan-600/90 text-white border-teal-400/20 shadow-xl shadow-teal-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-100 text-sm font-medium">CO₂ Saved (kg)</p>
                  <p className="text-3xl font-bold">{dashboardStats.carbonSaved}</p>
                  <div className="flex items-center mt-2 text-teal-200">
                    <Sparkles className="h-4 w-4 mr-1" />
                    <span className="text-sm">Impact score</span>
                  </div>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <Leaf className="h-8 w-8 text-teal-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600/90 to-violet-600/90 text-white border-purple-400/20 shadow-xl shadow-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">AI Accuracy</p>
                  <p className="text-3xl font-bold">{dashboardStats.predictionAccuracy}%</p>
                  <div className="flex items-center mt-2 text-purple-200">
                    <Brain className="h-4 w-4 mr-1" />
                    <span className="text-sm">Learning</span>
                  </div>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-purple-100" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 bg-black/20 backdrop-blur-sm border border-white/10 p-2 rounded-xl">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="inventory" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              <Package className="h-4 w-4" />
              <span>Inventory</span>
            </TabsTrigger>
            <TabsTrigger value="predictions" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              <TrendingUp className="h-4 w-4" />
              <span>AI Predictions</span>
            </TabsTrigger>
            <TabsTrigger value="sustainability" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              <Leaf className="h-4 w-4" />
              <span>Sustainability</span>
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white">
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

      {/* Add the Copilot Chat Component */}
      <CopilotChat />
    </div>
  );
};

export default Index;
