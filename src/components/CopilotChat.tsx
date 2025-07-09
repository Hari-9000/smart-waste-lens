
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Minimize2, 
  Maximize2,
  Sparkles,
  Brain,
  Zap
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'suggestion';
}

export const CopilotChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your SmartRetail AI Assistant. I can help you optimize inventory, predict waste, and boost sustainability. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (input: string): string => {
    const responses = {
      inventory: "Based on your current inventory data, I recommend focusing on products expiring in the next 3 days. Consider offering 20-30% discounts to move these items quickly.",
      waste: "Your waste reduction is impressive! You've saved 87kg this week. To improve further, implement dynamic pricing for items approaching expiry dates.",
      prediction: "My AI models predict a 15% increase in demand for dairy products next week. Consider increasing your order by 12-15 units to avoid stockouts.",
      sustainability: "Great sustainability progress! You've reduced CO₂ emissions by 142kg. Consider partnering with local food banks to donate near-expiry items.",
      default: "I'm analyzing your query with advanced AI algorithms. Based on your SmartRetail data, I can provide personalized recommendations for inventory optimization, waste reduction, and sustainability improvements."
    };

    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('inventory') || lowerInput.includes('stock')) return responses.inventory;
    if (lowerInput.includes('waste') || lowerInput.includes('reduce')) return responses.waste;
    if (lowerInput.includes('predict') || lowerInput.includes('forecast')) return responses.prediction;
    if (lowerInput.includes('sustain') || lowerInput.includes('green')) return responses.sustainability;
    return responses.default;
  };

  const suggestions = [
    "Analyze inventory trends",
    "Predict waste patterns",
    "Sustainability tips",
    "Optimize pricing"
  ];

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 border border-blue-400/20 z-50"
        size="icon"
      >
        <div className="relative">
          <Bot className="h-6 w-6 text-white" />
          <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-pulse" />
        </div>
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl shadow-blue-500/10 transition-all duration-300 ${
      isMinimized ? 'h-16 w-80' : 'h-[600px] w-96'
    }`}>
      <CardHeader className="p-4 border-b border-gray-700/50 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div>
              <CardTitle className="text-sm font-semibold text-white flex items-center space-x-2">
                <span>AI Copilot</span>
                <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-400/30 text-xs">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Active
                </Badge>
              </CardTitle>
              <p className="text-xs text-gray-400">SmartRetail Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-700/50"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-700/50"
            >
              ×
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-[calc(600px-80px)]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-950/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-3 w-3 text-white" />
                    ) : (
                      <Bot className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <div className={`px-3 py-2 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      : 'bg-gray-800/80 text-gray-100 border border-gray-700/50'
                  }`}>
                    <p>{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="bg-gray-800/80 px-3 py-2 rounded-lg border border-gray-700/50">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" />
                      <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="p-3 border-t border-gray-700/50 bg-gray-900/50">
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setInputValue(suggestion)}
                  className="text-xs bg-gray-800/50 border-gray-600/50 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-blue-400/50"
                >
                  <Zap className="h-3 w-3 mr-1" />
                  {suggestion}
                </Button>
              ))}
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about your inventory..."
                className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-400/50"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
