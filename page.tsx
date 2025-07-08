
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RocketIcon, LeafIcon, BlocksIcon, BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-100 to-sky-200 text-gray-800 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Leonardo Poeiras</h1>
        <p className="mt-4 text-xl md:text-2xl font-light">From Corporate Chains to Decentralized Freedom</p>
        <p className="mt-2 text-md md:text-lg text-green-800">Web3 • Smart Contracts • Clean Energy • AI Infrastructure</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="bg-white border-2 border-green-300 shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-green-700">
              <BlocksIcon className="w-6 h-6" /> Web3 Mission
            </h2>
            <p className="mt-2 text-gray-700">Building systems for transparency, sustainability and autonomy using blockchain, dApps and DAOs.</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-700">
              <BrainCircuit className="w-6 h-6" /> AI & Automation
            </h2>
            <p className="mt-2 text-gray-700">Developing smart automations powered by AI to scale infrastructure and unlock decentralized intelligence.</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-yellow-400 shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-yellow-700">
              <LeafIcon className="w-6 h-6" /> Environmental Focus
            </h2>
            <p className="mt-2 text-gray-700">Creating a regenerative footprint with clean energy solutions like solar, hydrogen and blockchain governance for environmental impact.</p>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center mt-10 text-sm text-gray-600">
        <p>© 2025 Leonardo Poeiras • Built with Web3 & Vision</p>
        <a href="https://github.com/leonardopoeiras" className="text-blue-600 hover:underline">GitHub</a> •
        <a href="https://www.linkedin.com/in/leonardo-marinho-poeiras-b5502a1a" className="text-blue-600 hover:underline ml-1">LinkedIn</a>
      </footer>
    </div>
  );
}
