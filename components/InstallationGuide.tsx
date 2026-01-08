
import React from 'react';

const InstallationGuide: React.FC = () => {
  return (
    <div className="bg-slate-100/50 rounded-2xl p-6 md:p-8">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
        <i className="fas fa-info-circle text-slate-400 mr-2"></i>
        How to Install
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">1</div>
          <p className="text-sm text-slate-600">Click the <strong>Install</strong> button above and confirm the prompt.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">2</div>
          <p className="text-sm text-slate-600">The app will download and install on your home screen.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">3</div>
          <p className="text-sm text-slate-600">Go to <strong>Settings</strong> &gt; <strong>General</strong> &gt; <strong>VPN & Device Management</strong> to trust the profile.</p>
        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;
