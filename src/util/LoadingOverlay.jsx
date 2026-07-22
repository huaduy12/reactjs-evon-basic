import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
      <div className="rounded-2xl bg-white px-8 py-6 shadow-2xl">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600"></div>
          <div className="text-center">
            <h2 className="text-lg font-bold text-slate-800">Loading</h2>
            <p className="text-sm text-slate-500">Vui lòng chờ một chút...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
