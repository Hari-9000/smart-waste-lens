
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Package, 
  AlertTriangle, 
  Calendar, 
  DollarSign,
  Search,
  Plus,
  Edit,
  Trash2,
  TrendingDown,
  TrendingUp
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  expiryDate: string;
  purchasePrice: number;
  sellingPrice: number;
  status: 'healthy' | 'warning' | 'critical';
  daysToExpiry: number;
}

export const InventoryGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock inventory data
  const [products] = useState<Product[]>([
    {
      id: "1",
      name: "Organic Apples",
      category: "Fruits",
      quantity: 45,
      expiryDate: "2024-01-15",
      purchasePrice: 2.50,
      sellingPrice: 4.99,
      status: 'warning',
      daysToExpiry: 3
    },
    {
      id: "2", 
      name: "Whole Wheat Bread",
      category: "Bakery",
      quantity: 12,
      expiryDate: "2024-01-12",
      purchasePrice: 1.20,
      sellingPrice: 2.89,
      status: 'critical',
      daysToExpiry: 1
    },
    {
      id: "3",
      name: "Greek Yogurt",
      category: "Dairy",
      quantity: 28,
      expiryDate: "2024-01-20",
      purchasePrice: 0.89,
      sellingPrice: 1.99,
      status: 'healthy',
      daysToExpiry: 8
    },
    {
      id: "4",
      name: "Fresh Salmon",
      category: "Seafood",
      quantity: 8,
      expiryDate: "2024-01-13",
      purchasePrice: 12.99,
      sellingPrice: 24.99,
      status: 'critical',
      daysToExpiry: 2
    },
    {
      id: "5",
      name: "Banana Bunch",
      category: "Fruits",
      quantity: 67,
      expiryDate: "2024-01-16",
      purchasePrice: 0.99,
      sellingPrice: 2.49,
      status: 'warning',
      daysToExpiry: 4
    },
    {
      id: "6",
      name: "Chicken Breast",
      category: "Meat",
      quantity: 15,
      expiryDate: "2024-01-18",
      purchasePrice: 5.99,
      sellingPrice: 12.99,
      status: 'healthy',
      daysToExpiry: 6
    }
  ]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800 border-green-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <TrendingUp className="h-3 w-3" />;
      case 'warning': return <AlertTriangle className="h-3 w-3" />;
      case 'critical': return <TrendingDown className="h-3 w-3" />;
      default: return <Package className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with search and actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Inventory Management</h2>
          <p className="text-muted-foreground">Track and manage your product inventory</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-700 text-sm font-medium">Total Items</p>
                <p className="text-2xl font-bold text-blue-900">{products.reduce((sum, p) => sum + p.quantity, 0)}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-700 text-sm font-medium">Healthy Stock</p>
                <p className="text-2xl font-bold text-green-900">{products.filter(p => p.status === 'healthy').length}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-700 text-sm font-medium">Needs Attention</p>
                <p className="text-2xl font-bold text-yellow-900">{products.filter(p => p.status === 'warning').length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-700 text-sm font-medium">Critical</p>
                <p className="text-2xl font-bold text-red-900">{products.filter(p => p.status === 'critical').length}</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {product.category}
                  </CardDescription>
                </div>
                <Badge className={`${getStatusColor(product.status)} flex items-center space-x-1`}>
                  {getStatusIcon(product.status)}
                  <span className="capitalize">{product.status}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span>Qty: {product.quantity}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{product.daysToExpiry}d left</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>${product.sellingPrice}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <span className="text-xs">Cost: ${product.purchasePrice}</span>
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground">
                <p>Expires: {new Date(product.expiryDate).toLocaleDateString()}</p>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Trash2 className="h-3 w-3 mr-1" />
                  Delete
                </Button>
              </div>

              {product.status === 'critical' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-700 text-xs font-medium">
                    🚨 Urgent: Consider 50% discount or donate to local food bank
                  </p>
                </div>
              )}

              {product.status === 'warning' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-700 text-xs font-medium">
                    ⚠️ Suggestion: Apply 25% discount or promote to customers
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
