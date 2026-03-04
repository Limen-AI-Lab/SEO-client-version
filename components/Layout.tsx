import React from 'react';
import { Layers, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t, i18n } = useTranslation('common');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">I</span>
          </div>
          <span className="text-lg font-bold text-slate-900 tracking-tight">{t('brandName')}</span>
          <span className="ml-2 px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-md uppercase tracking-wide font-medium">{t('clientPortal')}</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
            <Layers className="w-4 h-4" />
            <span>{t('connectedAs')}</span>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            title={i18n.language === 'zh' ? 'Switch to English' : '切换到中文'}
          >
            <Globe className="w-4 h-4" />
            <span>{i18n.language === 'zh' ? 'EN' : '中文'}</span>
          </button>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;
