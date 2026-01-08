
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Header from './components/Header';
import AppCard from './components/AppCard';
import InstallationGuide from './components/InstallationGuide';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [releaseNotes, setReleaseNotes] = useState<string>('');
  const [loadingNotes, setLoadingNotes] = useState<boolean>(true);

  // Constants
  const APP_NAME = "Internal Testing App";
  const VERSION = "1.0.0 (Build 42)";
  const PLIST_URL = "itms-services://?action=download-manifest&url=https://github.com/minhtamdz/test/raw/refs/heads/main/ipad.plist";

  useEffect(() => {
    const fetchAIContent = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Generate a professional, concise list of release notes for an iOS enterprise testing app named "${APP_NAME}". Focus on stability, UI improvements, and bug fixes. Format it as a short bulleted list.`,
        });
        setReleaseNotes(response.text || 'Bug fixes and performance improvements.');
      } catch (error) {
        console.error("Failed to generate release notes:", error);
        setReleaseNotes("• General stability improvements\n• Bug fixes for navigation issues\n• Enhanced performance on newer iOS devices.");
      } finally {
        setLoadingNotes(false);
      }
    };

    fetchAIContent();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="w-full max-w-2xl space-y-8">
          <AppCard 
            appName={APP_NAME}
            version={VERSION}
            installUrl={PLIST_URL}
            releaseNotes={releaseNotes}
            loadingNotes={loadingNotes}
          />
          
          <InstallationGuide />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
