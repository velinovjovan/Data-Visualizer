import { BarChart3 } from "lucide-react";

function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BarChart3 className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold text-cyan-500">
              Data Vizualizer
            </span>
          </div>
          <div className="text-gray-400">
            Powered by Open Trivia Database API
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
