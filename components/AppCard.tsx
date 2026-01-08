
import React, { useState, useEffect } from 'react';

interface AppCardProps {
  appName: string;
  version: string;
  installUrl: string;
  releaseNotes: string;
  loadingNotes: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ appName, version, installUrl, releaseNotes, loadingNotes }) => {
  const [isIOS, setIsIOS] = useState<boolean>(true);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isMobileIOS = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isMobileIOS);
  }, []);

  const handleInstall = () => {
    if (!isIOS) {
      alert("This link is specifically for iOS/iPadOS devices. The installation might not work on your current platform.");
    }
    window.location.href = installUrl;
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden transform transition-all hover:shadow-2xl">
      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* App Icon */}
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-lg flex items-center justify-center text-white relative">
             <i className="fas fa-mobile-alt text-6xl opacity-30 absolute"></i>
             <i className="fas fa-cube text-5xl"></i>
          </div>

          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{appName}</h1>
            <p className="text-slate-500 font-medium mb-6">Version {version}</p>
            
            <button 
              onClick={handleInstall}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl shadow-lg hover:shadow-blue-200/50 transition-all flex items-center justify-center space-x-3 active:scale-95 group"
            >
              <i className="fas fa-download group-hover:bounce"></i>
              <span>Install Application</span>
            </button>
            
            {!isIOS && (
              <p className="mt-4 text-amber-600 text-sm flex items-center justify-center md:justify-start">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                Requires an iOS or iPadOS device
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
            <i className="fas fa-clipboard-list text-blue-500 mr-2"></i>
            Release Notes
          </h2>
          {loadingNotes ? (
            <div className="space-y-3 animate-pulse">
              <div className="h-4 bg-slate-100 rounded w-3/4"></div>
              <div className="h-4 bg-slate-100 rounded w-5/6"></div>
              <div className="h-4 bg-slate-100 rounded w-2/3"></div>
            </div>
          ) : (
            <div className="text-slate-600 whitespace-pre-line leading-relaxed">
              {releaseNotes}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppCard;
