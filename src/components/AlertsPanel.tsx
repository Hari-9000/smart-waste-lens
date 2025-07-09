
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Bell, 
  Clock, 
  TrendingDown, 
  Package,
  X,
  CheckCircle,
  AlertCircle,
  Info,
  Gift,
  DollarSign
} from "lucide-react";

interface Alert {
  id: string;
  type: 'critical' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  timestamp: string;
  action?: string;
  actionType?: 'discount' | 'donate' | 'reorder' | 'info';
  isRead: boolean;
}

export const AlertsPanel = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'critical',
      title: 'Products Expiring Today',
      message: '8 items including Fresh Salmon and Whole Wheat Bread are expiring today. Consider immediate action.',
      timestamp: '2 hours ago',
      action: 'Apply Emergency Discount',
      actionType: 'discount',
      isRead: false
    },
    {
      id: '2',
      type: 'warning',
      title: 'Low Stock Alert',
      message: 'Greek Yogurt stock is running low (3 units remaining). Reorder recommended.',
      timestamp: '4 hours ago',
      action: 'Reorder Now',
      actionType: 'reorder',
      isRead: false
    },
    {
      id: '3',
      type: 'info',
      title: 'Donation Pickup Scheduled',
      message: 'Green Valley Food Bank will pick up 15 items tomorrow at 10 AM.',
      timestamp: '6 hours ago',
      action: 'View Details',
      actionType: 'info',
      isRead: true
    },
    {
      id: '4',
      type: 'warning',
      title: 'Overstock Detected',
      message: 'AI detected potential overstock of Bananas. Consider promotional pricing.',
      timestamp: '1 day ago',
      action: 'Create Promotion',
      actionType: 'discount',
      isRead: false
    },
    {
      id: '5',
      type: 'success',
      title: 'Waste Reduction Goal Met',
      message: 'Congratulations! You\'ve achieved 78% waste reduction this month.',
      timestamp: '1 day ago',
      isRead: true
    },
    {
      id: '6',
      type: 'critical',
      title: 'Temperature Alert',
      message: 'Refrigeration unit temperature is above optimal range. Check immediately.',
      timestamp: '2 days ago',
      action: 'Check Equipment',
      actionType: 'info',
      isRead: false
    }
  ]);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case 'info': return <Info className="h-5 w-5 text-blue-600" />;
      case 'success': return <CheckCircle className="h-5 w-5 text-green-600" />;
      default: return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  const getAlertStyle = (type: string) => {
    switch (type) {
      case 'critical': return 'border-l-red-500 bg-red-50';
      case 'warning': return 'border-l-yellow-500 bg-yellow-50';
      case 'info': return 'border-l-blue-500 bg-blue-50';
      case 'success': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'info': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'success': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getActionIcon = (actionType?: string) => {
    switch (actionType) {
      case 'discount': return <DollarSign className="h-3 w-3" />;
      case 'donate': return <Gift className="h-3 w-3" />;
      case 'reorder': return <Package className="h-3 w-3" />;
      default: return <Info className="h-3 w-3" />;
    }
  };

  const markAsRead = (id: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, isRead: true } : alert
    ));
  };

  const dismissAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const unreadCount = alerts.filter(alert => !alert.isRead).length;
  const criticalCount = alerts.filter(alert => alert.type === 'critical').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center space-x-2">
            <Bell className="h-6 w-6 text-blue-600" />
            <span>Smart Alerts</span>
          </h2>
          <p className="text-muted-foreground">AI-powered notifications and recommendations</p>
        </div>
        <div className="flex items-center space-x-2">
          {unreadCount > 0 && (
            <Badge className="bg-red-100 text-red-800 border-red-200">
              {unreadCount} Unread
            </Badge>
          )}
          {criticalCount > 0 && (
            <Badge className="bg-orange-100 text-orange-800 border-orange-200">
              {criticalCount} Critical
            </Badge>
          )}
        </div>
      </div>

      {/* Alert Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-700 text-sm font-medium">Critical Alerts</p>
                <p className="text-2xl font-bold text-red-900">{criticalCount}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-700 text-sm font-medium">Warnings</p>
                <p className="text-2xl font-bold text-yellow-900">
                  {alerts.filter(a => a.type === 'warning').length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-700 text-sm font-medium">Info</p>
                <p className="text-2xl font-bold text-blue-900">
                  {alerts.filter(a => a.type === 'info').length}
                </p>
              </div>
              <Info className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-700 text-sm font-medium">Resolved</p>
                <p className="text-2xl font-bold text-green-900">
                  {alerts.filter(a => a.type === 'success').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card 
            key={alert.id} 
            className={`border-l-4 ${getAlertStyle(alert.type)} ${!alert.isRead ? 'shadow-lg' : 'shadow-sm'} transition-all duration-200`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className={`font-semibold ${!alert.isRead ? 'text-gray-900' : 'text-gray-600'}`}>
                        {alert.title}
                      </h3>
                      {!alert.isRead && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                      <Badge className={getBadgeStyle(alert.type)}>
                        {alert.type}
                      </Badge>
                    </div>
                    <p className={`text-sm ${!alert.isRead ? 'text-gray-700' : 'text-gray-500'} mb-2`}>
                      {alert.message}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{alert.timestamp}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {alert.action && (
                          <Button size="sm" variant="outline" className="text-xs">
                            {getActionIcon(alert.actionType)}
                            <span className="ml-1">{alert.action}</span>
                          </Button>
                        )}
                        {!alert.isRead && (
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => markAsRead(alert.id)}
                            className="text-xs"
                          >
                            Mark Read
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => dismissAlert(alert.id)}
                          className="text-xs text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {alerts.length === 0 && (
        <Card className="shadow-lg">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">All Caught Up!</h3>
            <p className="text-gray-500">No new alerts at this time. Great job managing your inventory!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
