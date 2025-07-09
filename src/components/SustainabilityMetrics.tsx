import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  Recycle, 
  TrendingUp, 
  Users, 
  Package, 
  AlertTriangle,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const SustainabilityMetrics = () => {
  // Mock data for demonstration
  const sustainabilityData = {
    wasteReduction: 78,
    carbonFootprintReduction: 84,
    donationPartnerships: 92,
    communityEngagement: 65,
    employeeTraining: 88
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Leaf className="h-5 w-5 text-green-600" />
            <span>Waste Reduction</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Current Progress</span>
              <span>{sustainabilityData.wasteReduction}%</span>
            </div>
            <Progress value={sustainabilityData.wasteReduction} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Reducing waste through better inventory management and donation programs.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Recycle className="h-5 w-5 text-blue-600" />
            <span>Carbon Footprint</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Current Progress</span>
              <span>{sustainabilityData.carbonFootprintReduction}%</span>
            </div>
            <Progress value={sustainabilityData.carbonFootprintReduction} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Lowering carbon emissions by optimizing supply chains and reducing energy use.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-orange-600" />
            <span>Community Engagement</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Current Progress</span>
              <span>{sustainabilityData.communityEngagement}%</span>
            </div>
            <Progress value={sustainabilityData.communityEngagement} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Engaging with the local community through partnerships and educational programs.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <span>Donation Partnerships</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Current Progress</span>
              <span>{sustainabilityData.donationPartnerships}%</span>
            </div>
            <Progress value={sustainabilityData.donationPartnerships} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Partnering with local organizations to donate surplus and near-expiry items.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Plus className="h-5 w-5 text-emerald-600" />
            <span>Employee Training</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Current Progress</span>
              <span>{sustainabilityData.employeeTraining}%</span>
            </div>
            <Progress value={sustainabilityData.employeeTraining} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Training employees on sustainable practices and waste reduction techniques.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
