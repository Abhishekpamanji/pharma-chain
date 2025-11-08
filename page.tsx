"use client"

import { useState } from "react"
import { LayoutDashboard, Package, Boxes, Truck, Thermometer, Shield, FileText, Cpu, Settings } from "lucide-react"
import Dashboard from "@/components/dashboard"
import SupplyChainMap from "@/components/supply-chain-map"
import MetricsOverview from "@/components/metrics-overview"
import RecentAlerts from "@/components/recent-alerts"
import EnvironmentalMonitor from "@/components/environmental-monitor"
import TamperDetection from "@/components/tamper-detection"
import ComplianceReporting from "@/components/compliance-reporting"
import BlockchainViewer from "@/components/blockchain-viewer"
import DeviceManagement from "@/components/device-management"
import ProductVerification from "@/components/product-verification"
import BatchTracking from "@/components/batch-tracking"

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "tracking", label: "Tracking", icon: Truck },
    { id: "products", label: "Products", icon: Package },
    { id: "batches", label: "Batches", icon: Boxes },
    { id: "environment", label: "Environment", icon: Thermometer },
    { id: "tamper", label: "Tamper Detection", icon: Shield },
    { id: "compliance", label: "Compliance", icon: FileText },
    { id: "blockchain", label: "Blockchain", icon: Cpu },
    { id: "devices", label: "Devices", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Package className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">PharmaTrac</h1>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-primary text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-border bg-card sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <MetricsOverview />
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SupplyChainMap />
              </div>
              <div>
                <RecentAlerts />
              </div>
            </div>
          </div>
        )}

        {activeTab === "tracking" && <Dashboard view="tracking" />}

        {activeTab === "products" && <ProductVerification />}

        {activeTab === "batches" && <BatchTracking />}

        {activeTab === "environment" && <EnvironmentalMonitor />}

        {activeTab === "tamper" && <TamperDetection />}

        {activeTab === "compliance" && <ComplianceReporting />}

        {activeTab === "blockchain" && <BlockchainViewer />}

        {activeTab === "devices" && <DeviceManagement />}
      </main>
    </div>
  )
}
