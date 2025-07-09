
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { TrendingUp, Brain, AlertCircle } from "lucide-react";

export const WastePredictionChart = () => {
  // Mock data for waste prediction
  const wasteData = [
    { week: 'Week 1', predicted: 45, actual: 42, saved: 38 },
    { week: 'Week 2', predicted: 52, actual: 48, saved: 44 },
    { week: 'Week 3', predicted: 38, actual: 35, saved: 32 },
    { week: 'Week 4', predicted: 41, actual: 39, saved: 35 },
    { week: 'Week 5', predicted: 47, actual: 44, saved: 41 },
    { week: 'Week 6', predicted: 39, actual: 36, saved: 33 },
    { week: 'Week 7', predicted: 43, actual: 40, saved: 37 },
    { week: 'Week 8', predicted: 35, actual: 33, saved: 30 }
  ];

  const demandForecast = [
    { product: 'Apples', current: 45, predicted: 38, confidence: 92 },
    { product: 'Bread', current: 12, predicted: 18, confidence: 88 },
    { product: 'Yogurt', current: 28, predicted: 32, confidence: 95 },
    { product: 'Salmon', current: 8, predicted: 6, confidence: 76 },
    { product: 'Bananas', current: 67, predicted: 52, confidence: 91 },
    { product: 'Chicken', current: 15, predicted: 19, confidence: 87 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center space-x-2">
            <Brain className="h-6 w-6 text-purple-600" />
            <span>AI Waste Prediction</span>
          </h2>
          <p className="text-muted-foreground">Machine learning insights for waste reduction</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span>Weekly Waste Trends</span>
            </CardTitle>
            <CardDescription>
              Predicted vs actual waste with savings achieved
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={wasteData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [`${value} kg`, name]}
                  labelFormatter={(label) => `${label}`}
                />
                <Area 
                  type="monotone" 
                  dataKey="predicted" 
                  stackId="1"
                  stroke="#8884d8" 
                  fill="#8884d8" 
                  fillOpacity={0.6}
                  name="Predicted Waste"
                />
                <Area 
                  type="monotone" 
                  dataKey="actual" 
                  stackId="2"
                  stroke="#82ca9d" 
                  fill="#82ca9d" 
                  fillOpacity={0.6}
                  name="Actual Waste"
                />
                <Area 
                  type="monotone" 
                  dataKey="saved" 
                  stackId="3"
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.8}
                  name="Waste Saved"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-purple-600" />
              <span>Demand Forecast</span>
            </CardTitle>
            <CardDescription>
              AI predictions for next week's demand
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={demandForecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [`${value} units`, name]}
                />
                <Bar dataKey="current" fill="#3b82f6" name="Current Stock" />
                <Bar dataKey="predicted" fill="#10b981" name="Predicted Need" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights and Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-purple-700">
              <Brain className="h-5 w-5" />
              <span>AI Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-purple-700 text-sm font-medium">
                🧠 Model Accuracy: 94.2% (up 3.1% this month)
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-blue-700 text-sm font-medium">
                📈 Bread demand expected to increase by 50% next week
              </p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-green-700 text-sm font-medium">
                🎯 Apple overstocking detected - reduce orders by 15%
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-orange-700">
              <AlertCircle className="h-5 w-5" />
              <span>Smart Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-orange-50 p-3 rounded-lg">
              <p className="text-orange-700 text-sm font-medium">
                🏷️ Apply 30% discount to salmon (expires in 2 days)
              </p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-yellow-700 text-sm font-medium">
                🤝 Partner with Local Food Bank for bread donations
              </p>
            </div>
            <div className="bg-emerald-50 p-3 rounded-lg">
              <p className="text-emerald-700 text-sm font-medium">
                ♻️ Schedule pickup for 23 expiring items tomorrow
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Model Performance Metrics */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Model Performance Metrics</CardTitle>
          <CardDescription>Key performance indicators for our AI prediction system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">94.2%</div>
              <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">87.5%</div>
              <div className="text-sm text-muted-foreground">Waste Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">142kg</div>
              <div className="text-sm text-muted-foreground">CO₂ Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">$2,340</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
