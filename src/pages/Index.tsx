
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award, 
  Search, 
  Download, 
  FileText, 
  AlertTriangle,
  Globe,
  Zap,
  Shield,
  Database
} from "lucide-react";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", institution: "" });
  const { toast } = useToast();

  // Sample data for visualizations
  const publicationData = [
    { year: "2020", publications: 45, citations: 320 },
    { year: "2021", publications: 52, citations: 410 },
    { year: "2022", publications: 48, citations: 385 },
    { year: "2023", publications: 61, citations: 520 },
    { year: "2024", publications: 38, citations: 280 }
  ];

  const departmentData = [
    { department: "Computer Science", hIndex: 25, publications: 142 },
    { department: "Physics", hIndex: 22, publications: 118 },
    { department: "Chemistry", hIndex: 20, publications: 95 },
    { department: "Mathematics", hIndex: 18, publications: 87 },
    { department: "Biology", hIndex: 16, publications: 76 }
  ];

  const fundingData = [
    { source: "NSF", amount: 450000, color: "#0088FE" },
    { source: "NIH", amount: 320000, color: "#00C49F" },
    { source: "DOE", amount: 180000, color: "#FFBB28" },
    { source: "Private", amount: 90000, color: "#FF8042" }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setActiveUser({ 
        name: "Dr. Sarah Chen", 
        email: loginForm.email, 
        role: "Faculty",
        hIndex: 24,
        publications: 87,
        citations: 1250
      });
      toast({
        title: "Login Successful",
        description: "Welcome to ScholarHub!",
      });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.name && registerForm.email && registerForm.password) {
      setIsLoggedIn(true);
      setActiveUser({ 
        name: registerForm.name, 
        email: registerForm.email, 
        role: "Faculty",
        hIndex: 0,
        publications: 0,
        citations: 0
      });
      toast({
        title: "Registration Successful",
        description: "Your account has been created!",
      });
    }
  };

  const generatePDFReport = (reportType: string) => {
    toast({
      title: "PDF Report Generated",
      description: `${reportType} report has been exported successfully.`,
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-12 h-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">ScholarHub</h1>
            </div>
            <p className="text-xl text-gray-600">Intelligent Research Analytics Platform</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Login Card */}
            <Card className="backdrop-blur-sm bg-white/80 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-800">Login</CardTitle>
                <CardDescription>Access your research dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                      placeholder="your.email@university.edu"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Sign In
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Register Card */}
            <Card className="backdrop-blur-sm bg-white/80 border-cyan-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-cyan-800">Register</CardTitle>
                <CardDescription>Join the research community</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="register-name">Full Name</Label>
                    <Input
                      id="register-name"
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                      placeholder="Dr. John Smith"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                      placeholder="john.smith@university.edu"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-institution">Institution</Label>
                    <Input
                      id="register-institution"
                      value={registerForm.institution}
                      onChange={(e) => setRegisterForm({...registerForm, institution: e.target.value})}
                      placeholder="University of Excellence"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Features Preview */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <Card className="text-center backdrop-blur-sm bg-white/60 border-blue-100">
              <CardContent className="pt-6">
                <Search className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-800">Auto-Discovery</h3>
                <p className="text-sm text-gray-600">Smart crawling of research databases</p>
              </CardContent>
            </Card>
            <Card className="text-center backdrop-blur-sm bg-white/60 border-green-100">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-800">Impact Analytics</h3>
                <p className="text-sm text-gray-600">h-index and collaboration mapping</p>
              </CardContent>
            </Card>
            <Card className="text-center backdrop-blur-sm bg-white/60 border-purple-100">
              <CardContent className="pt-6">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-purple-800">Compliance</h3>
                <p className="text-sm text-gray-600">NIRF and NAAC ready reports</p>
              </CardContent>
            </Card>
            <Card className="text-center backdrop-blur-sm bg-white/60 border-orange-100">
              <CardContent className="pt-6">
                <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold text-orange-800">AI Intelligence</h3>
                <p className="text-sm text-gray-600">Predatory journal alerts</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-blue-800">ScholarHub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">{activeUser?.role}</Badge>
            <span className="text-sm text-gray-600">Welcome, {activeUser?.name}</span>
            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white/80">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">H-Index</p>
                      <p className="text-3xl font-bold">{activeUser?.hIndex}</p>
                    </div>
                    <Award className="w-8 h-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Publications</p>
                      <p className="text-3xl font-bold">{activeUser?.publications}</p>
                    </div>
                    <FileText className="w-8 h-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Citations</p>
                      <p className="text-3xl font-bold">{activeUser?.citations}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100">Collaborations</p>
                      <p className="text-3xl font-bold">23</p>
                    </div>
                    <Users className="w-8 h-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Publication Trends
                    <Button size="sm" onClick={() => generatePDFReport("Publication Trends")}>
                      <Download className="w-4 h-4 mr-2" />
                      Export PDF
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={publicationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="publications" stroke="#3B82F6" strokeWidth={2} />
                      <Line type="monotone" dataKey="citations" stroke="#10B981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Activities
                    <Button size="sm" onClick={() => generatePDFReport("Activity Report")}>
                      <Download className="w-4 h-4 mr-2" />
                      Export PDF
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">New Publication Indexed</p>
                      <p className="text-sm text-gray-600">"AI in Healthcare Research" - Nature AI</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">Citation Milestone</p>
                      <p className="text-sm text-gray-600">Reached 1,250 total citations</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="font-medium">Journal Alert</p>
                      <p className="text-sm text-gray-600">Predatory journal detected in submission</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Faculty Tab */}
          <TabsContent value="faculty" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Faculty Management</h2>
              <div className="space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Import from ORCID
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Import Faculty Data</DialogTitle>
                      <DialogDescription>
                        Bulk import faculty profiles from ORCID and Google Scholar
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input placeholder="Enter ORCID IDs (comma-separated)" />
                      <Button className="w-full">Import Data</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button onClick={() => generatePDFReport("Faculty Report")} variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Faculty Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">47</p>
                      <p className="text-sm text-gray-600">Active Faculty</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">18.5</p>
                      <p className="text-sm text-gray-600">Avg H-Index</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">342</p>
                      <p className="text-sm text-gray-600">Total Publications</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "Dr. Sarah Chen", dept: "Computer Science", hIndex: 24, publications: 87 },
                      { name: "Dr. Michael Rodriguez", dept: "Physics", hIndex: 21, publications: 65 },
                      { name: "Dr. Emily Watson", dept: "Chemistry", hIndex: 19, publications: 72 },
                      { name: "Dr. James Kim", dept: "Mathematics", hIndex: 17, publications: 43 }
                    ].map((faculty, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{faculty.name}</h3>
                          <p className="text-sm text-gray-600">{faculty.dept}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">H-Index: {faculty.hIndex}</p>
                          <p className="text-sm text-gray-600">{faculty.publications} publications</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Research Tab */}
          <TabsContent value="research" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Research Intelligence</h2>
              <Button onClick={() => generatePDFReport("Research Intelligence")} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                    Hot Research Topics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { topic: "Machine Learning in Healthcare", trend: "+15%" },
                    { topic: "Quantum Computing Applications", trend: "+12%" },
                    { topic: "Sustainable Energy Systems", trend: "+10%" },
                    { topic: "CRISPR Gene Editing", trend: "+8%" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="font-medium">{item.topic}</span>
                      <Badge variant="secondary" className="bg-yellow-200 text-yellow-800">
                        {item.trend}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                    Journal Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <p className="font-medium text-red-800">Predatory Journal Detected</p>
                    <p className="text-sm text-red-600">"International Journal of Advanced Research" - Be cautious</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="font-medium text-green-800">High Impact Opportunity</p>
                    <p className="text-sm text-green-600">"Nature Machine Intelligence" - Special issue open</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="font-medium text-blue-800">UGC CARE Listed</p>
                    <p className="text-sm text-blue-600">"Journal of AI Research" - Recently added to CARE list</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2 text-purple-600" />
                    Patent Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "AI-Powered Diagnostic Tool", score: "High (85%)" },
                    { title: "Novel Battery Technology", score: "Medium (72%)" },
                    { title: "Quantum Encryption Method", score: "High (91%)" }
                  ].map((patent, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">{patent.title}</span>
                      <Badge variant="secondary" className="bg-purple-200 text-purple-800">
                        {patent.score}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-green-600" />
                    Collaboration Network
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>MIT - Artificial Intelligence</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Stanford - Quantum Computing</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Oxford - Biotechnology</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-2/5"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Impact Analytics Dashboard</h2>
              <Button onClick={() => generatePDFReport("Impact Analytics")} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Department H-Index Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={departmentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="department" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="hIndex" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Funding Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={fundingData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="amount"
                        label={({ source, value }) => `${source}: $${value.toLocaleString()}`}
                      >
                        {fundingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Research ROI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">$1.04M</p>
                    <p className="text-sm text-gray-600">Total Funding</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">287</p>
                    <p className="text-sm text-gray-600">Publications</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">$3,626</p>
                    <p className="text-sm text-gray-600">Cost per Publication</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">275%</p>
                    <p className="text-sm text-gray-600">Citation ROI</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Automated Compliance</h2>
              <Button onClick={() => generatePDFReport("Compliance Report")} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    NIRF Readiness
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Teaching, Learning & Resources</span>
                      <span className="text-sm text-gray-600">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Research & Professional Practice</span>
                      <span className="text-sm text-gray-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Graduation Outcomes</span>
                      <span className="text-sm text-gray-600">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Outreach & Inclusivity</span>
                      <span className="text-sm text-gray-600">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Perception</span>
                      <span className="text-sm text-gray-600">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    NAAC Criteria Mapping
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { criteria: "Curricular Aspects", status: "Compliant", color: "green" },
                    { criteria: "Teaching-Learning & Evaluation", status: "Needs Review", color: "yellow" },
                    { criteria: "Research & Extension", status: "Compliant", color: "green" },
                    { criteria: "Infrastructure & Learning Resources", status: "Compliant", color: "green" },
                    { criteria: "Student Support & Progression", status: "Partial", color: "orange" },
                    { criteria: "Governance & Leadership", status: "Compliant", color: "green" },
                    { criteria: "Institutional Values & Best Practices", status: "Compliant", color: "green" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="font-medium">{item.criteria}</span>
                      <Badge 
                        variant="secondary" 
                        className={`${
                          item.color === 'green' ? 'bg-green-100 text-green-800' :
                          item.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Automated Report Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button 
                    className="h-20 flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700"
                    onClick={() => generatePDFReport("NIRF Report")}
                  >
                    <FileText className="w-8 h-8 mb-2" />
                    Generate NIRF Report
                  </Button>
                  <Button 
                    className="h-20 flex flex-col items-center justify-center bg-green-600 hover:bg-green-700"
                    onClick={() => generatePDFReport("NAAC Report")}
                  >
                    <FileText className="w-8 h-8 mb-2" />
                    Generate NAAC Report
                  </Button>
                  <Button 
                    className="h-20 flex flex-col items-center justify-center bg-purple-600 hover:bg-purple-700"
                    onClick={() => generatePDFReport("NBA Report")}
                  >
                    <FileText className="w-8 h-8 mb-2" />
                    Generate NBA Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admin Tab */}
          <TabsContent value="admin" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Admin Power Tools</h2>
              <Button onClick={() => generatePDFReport("Admin Report")} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-red-600" />
                    Plagiarism Screening
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="file-upload">Upload Document for Screening</Label>
                    <Input id="file-upload" type="file" accept=".pdf,.doc,.docx" />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Start Plagiarism Check
                  </Button>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Recent Submissions</span>
                      <span className="text-green-600">98% Original</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Cross-Institutional Benchmarking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { metric: "Publications per Faculty", value: "8.2", benchmark: "6.5", status: "above" },
                    { metric: "Citation Rate", value: "145%", benchmark: "120%", status: "above" },
                    { metric: "H-Index Average", value: "18.5", benchmark: "15.2", status: "above" },
                    { metric: "International Collaborations", value: "23", benchmark: "18", status: "above" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{item.metric}</p>
                        <p className="text-sm text-gray-600">Benchmark: {item.benchmark}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{item.value}</p>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Above Average
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Search className="w-5 h-5 mr-2 text-purple-600" />
                    Grant Opportunity Matching
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { 
                      title: "NSF AI Research Initiative", 
                      amount: "$500K", 
                      deadline: "Mar 15, 2024",
                      match: "95%"
                    },
                    { 
                      title: "NIH Biomedical Data Science", 
                      amount: "$250K", 
                      deadline: "Apr 1, 2024",
                      match: "87%"
                    },
                    { 
                      title: "DOE Clean Energy Grant", 
                      amount: "$750K", 
                      deadline: "May 30, 2024",
                      match: "82%"
                    }
                  ].map((grant, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{grant.title}</h4>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                          {grant.match} Match
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Amount: {grant.amount}</span>
                        <span>Deadline: {grant.deadline}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2 text-green-600" />
                    Auto-Discovery Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Scopus Crawling</span>
                      <span className="text-green-600">Active</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>PubMed Integration</span>
                      <span className="text-green-600">Active</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Google Scholar Sync</span>
                      <span className="text-blue-600">Running</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Patent Office Crawl</span>
                      <span className="text-orange-600">Scheduled</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
