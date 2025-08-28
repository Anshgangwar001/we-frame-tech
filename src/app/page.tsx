"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { 
  Home,
  List, 
  Upload, 
  Users, 
  Settings, 
  Target, 
  BarChart, 
  MessageSquare, 
  LogOut,
  Search,
  Filter,
  Edit,
  Trash2,
  Check,
  TrendingUp,
  Award,
  ChevronRight
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Data for charts
const accountProgressData = [
  { name: 'Completed', value: 85, color: '#1976d2' },
  { name: 'Remaining', value: 15, color: '#e2e8f0' }
];

export default function FranchiseDashboard() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-[#0f3c52] text-white flex flex-col z-50">
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-600">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-[#2c5f6f] rounded-lg flex items-center justify-center overflow-hidden">
              {/* Logo recreation from weframetech design */}
              <svg width="40" height="40" viewBox="0 0 40 40" className="absolute inset-0">
                {/* Background */}
                <rect width="40" height="40" fill="#2c5f6f" rx="4"/>
                
                {/* Small geometric elements */}
                <rect x="6" y="8" width="3" height="3" fill="#4dd0e1" transform="rotate(45 7.5 9.5)"/>
                <rect x="28" y="6" width="2" height="2" fill="#37474f" transform="rotate(45 29 7)"/>
                
                {/* Large checkmark - dark */}
                <path d="M8 18 L12 22 L20 14" stroke="#37474f" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Large checkmark - cyan */}
                <path d="M16 20 L20 24 L28 16" stroke="#4dd0e1" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Additional small elements */}
                <rect x="30" y="28" width="2.5" height="2.5" fill="#4dd0e1" transform="rotate(45 31.25 29.25)"/>
              </svg>
            </div>
            <span className="text-lg font-semibold text-white">weframetech</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <div className="space-y-2">
            <SidebarItem icon={Home} text="Home" active />
            <SidebarItem icon={List} text="Stages & Checklist" />
            <SidebarItem icon={Upload} text="Upload Docs" />
            <SidebarItem icon={Users} text="Preferred Vendors" />
            <SidebarItem icon={Settings} text="Tech Stack" />
            <SidebarItem icon={Target} text="Targets" />
            <SidebarItem icon={BarChart} text="Zee Sales Targets" />
            <SidebarItem icon={MessageSquare} text="MAI Settings" />
            <SidebarItem icon={MessageSquare} text="Pending Questions" badge="1" />
          </div>
      </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-600">
          <SidebarItem icon={LogOut} text="Logout" />
        </div>
      </div>

      {/* Main Content */}
              <div className="ml-80 min-h-screen lg:ml-80 xl:ml-80">
          {/* Mobile overlay for sidebar */}
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 hidden" id="sidebar-overlay"></div>
          {/* Header */}
          <header className="bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">WeframeTech Dashboard</h1>
          <div className="flex items-center gap-4">
            <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-gray-300">U</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* Account Progress Card */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg font-semibold">Account Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={accountProgressData}
                          cx="50%"
                          cy="50%"
                          innerRadius={45}
                          outerRadius={60}
                          startAngle={90}
                          endAngle={450}
                          dataKey="value"
                        >
                          {accountProgressData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#1976d2]">85%</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-medium text-sm mb-2">Steps Completed</h4>
                  <div className="space-y-2">
                    <StepItem text="Profile Setup" completed />
                    <StepItem text="Initial Training" completed />
                    <StepItem text="Legal Documents" completed />
                  </div>
                  
                  <h4 className="font-medium text-sm mb-2 mt-4">Steps Remaining</h4>
                  <div className="space-y-2">
                    <StepItem text="Financial Integration" />
                    <StepItem text="Final Review" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Total Franchisees Onboard Card */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Total Franchisees Onboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold">14</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+7.4%</Badge>
                </div>
                
                <div className="mb-4">
                  <div className="flex -space-x-2 mb-2">
                    {[1,2,3,4,5].map((i) => (
                      <Avatar key={i} className="w-8 h-8 border-2 border-white">
                        <AvatarFallback className="bg-blue-500 text-white text-xs">U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-gray-600">+9</span>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Vidit Mishra</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Stage 1 (Initial Inquiry)</span>
                    <span className="font-medium">02</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Stage 2 (Document Submission)</span>
                    <span className="font-medium">07</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Stage 3 (Training)</span>
                    <span className="font-medium">05</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Wellbeing Card */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Financial Wellbeing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold">20</span>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">-2.1%</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">Total Franchisees</p>
                
                <Badge className="bg-pink-100 text-pink-800 mb-4">Yuvraj Thakur</Badge>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs text-gray-600 mb-1">Target</p>
                    <p className="font-semibold">$500,000</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs text-gray-600 mb-1">Current</p>
                    <p className="font-semibold">$450,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {/* Key Insights & Feedback Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Key Insights & Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold">10%</span>
                    <span className="text-sm text-gray-600">Sales Growth</span>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Top Performer
                  </Badge>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-medium text-sm mb-2">Feedback</h4>
                  <p className="text-sm text-gray-700">Franchisees are requesting more detailed training materials.</p>
                </div>
              </CardContent>
            </Card>

            {/* Prospect Leads Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Prospect Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <ProspectItem name="Wade Warren" stage="Initial Inquiry" />
                  <ProspectItem name="Ava Wright" stage="Initial Inquiry" />
                  <ProspectItem name="Cody Fisher" stage="Initial Inquiry" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Uploads Section */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-semibold">My Uploads</CardTitle>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search here..." className="pl-10" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="border-b">
                    <tr className="text-left">
                      <th className="pb-3 text-sm font-medium text-gray-600">Document Name</th>
                      <th className="pb-3 text-sm font-medium text-gray-600">Document Type</th>
                      <th className="pb-3 text-sm font-medium text-gray-600 text-center">AI App Inclusion</th>
                      <th className="pb-3 text-sm font-medium text-gray-600 text-center">Dashboard Inclusion</th>
                      <th className="pb-3 text-sm font-medium text-gray-600">Stage Access</th>
                      <th className="pb-3 text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <DocumentRow 
                      name="Tech requirements.pdf"
                      type="Legal"
                      aiInclusion={true}
                      dashboardInclusion={true}
                      stageAccess="Full"
                    />
                    <DocumentRow 
                      name="Dashboard screenshot.jpg"
                      type="Vendors & Assets"
                      aiInclusion={true}
                      dashboardInclusion={true}
                      stageAccess="Onboarding"
                    />
                    <DocumentRow 
                      name="Dashboard prototype recording.mp4"
                      type="Technology"
                      aiInclusion={false}
                      dashboardInclusion={false}
                      stageAccess="Franchisee"
                    />
                    <DocumentRow 
                      name="Financial Overview"
                      type="Financial"
                      aiInclusion={true}
                      dashboardInclusion={false}
                      stageAccess="Prospect"
                    />
                    <DocumentRow 
                      name="UX Design Guidelines.docx"
                      type="Legal"
                      aiInclusion={false}
                      dashboardInclusion={true}
                      stageAccess="Onboarding"
                    />
                  </tbody>
                </table>
              </div>
          </CardContent>
        </Card>
    </main>
      </div>
    </div>
  );
}

// Component definitions
function SidebarItem({ icon: Icon, text, active = false, badge }: { 
  icon: React.ComponentType<{className?: string}>, 
  text: string, 
  active?: boolean, 
  badge?: string 
}) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
      active ? 'bg-teal-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}>
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5" />
        <span className="text-sm font-medium">{text}</span>
      </div>
      {badge && (
        <Badge className="bg-red-500 text-white text-xs">{badge}</Badge>
      )}
    </div>
  );
}

function StepItem({ text, completed = false }: { text: string, completed?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
        completed ? 'bg-green-500' : 'bg-gray-200'
      }`}>
        {completed && <Check className="w-3 h-3 text-white" />}
      </div>
      <span className={`text-sm ${completed ? 'text-gray-900' : 'text-gray-500'}`}>{text}</span>
    </div>
  );
}

function ProspectItem({ name, stage }: { name: string, stage: string }) {
  return (
    <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2 sm:gap-3">
        <Avatar className="w-7 h-7 sm:w-8 sm:h-8">
          <AvatarFallback className="bg-blue-500 text-white text-xs">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-xs sm:text-sm">{name}</p>
          <p className="text-xs text-gray-500">{stage}</p>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400" />
    </div>
  );
}

function DocumentRow({ 
  name, 
  type, 
  aiInclusion, 
  dashboardInclusion, 
  stageAccess 
}: { 
  name: string, 
  type: string, 
  aiInclusion: boolean, 
  dashboardInclusion: boolean, 
  stageAccess: string 
}) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Legal': return 'bg-blue-100 text-blue-800';
      case 'Technology': return 'bg-purple-100 text-purple-800';
      case 'Financial': return 'bg-green-100 text-green-800';
      case 'Vendors & Assets': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <tr className="text-sm">
      <td className="py-4">{name}</td>
      <td className="py-4">
        <Badge className={getTypeColor(type)}>{type}</Badge>
      </td>
      <td className="py-4">
        <div className="flex justify-center">
          <Switch 
            checked={aiInclusion} 
            className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 h-5 w-9 sm:h-6 sm:w-11" 
          />
        </div>
      </td>
      <td className="py-4">
        <div className="flex justify-center">
          <Switch 
            checked={dashboardInclusion} 
            className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 h-5 w-9 sm:h-6 sm:w-11" 
          />
        </div>
      </td>
      <td className="py-4">
        <select className="bg-transparent border border-gray-200 rounded px-2 py-1 text-sm">
          <option>{stageAccess}</option>
        </select>
      </td>
      <td className="py-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Trash2 className="w-4 h-4 text-red-500" />
          </Button>
          <Button variant="ghost" size="sm">
            <Edit className="w-4 h-4 text-blue-500" />
          </Button>
        </div>
      </td>
    </tr>
  );
}
