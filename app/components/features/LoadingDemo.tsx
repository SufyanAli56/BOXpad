import { useState, useEffect } from 'react';

interface LoadingDemoProps {
  onComplete?: () => void;
}

const LoadingDemo: React.FC<LoadingDemoProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    { name: 'Header', icon: '🏠', delay: 0 },
    { name: 'Sidebar', icon: '📋', delay: 500 },
    { name: 'Messages', icon: '💬', delay: 1000 },
    { name: 'Details', icon: '👤', delay: 1500 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Demo complete, fade out after a moment
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 1000);
      }
    }, steps[currentStep]?.delay || 500);

    return () => clearTimeout(timer);
  }, [currentStep, steps, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Loading Dashboard
          </h3>
          <p className="text-sm text-gray-600">
            Watch as each section loads progressively
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.name}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                index <= currentStep
                  ? 'bg-blue-50 border border-blue-200'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                  index <= currentStep
                    ? 'bg-blue-500 text-white scale-110'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {index <= currentStep ? '✓' : step.icon}
              </div>
              <div className="flex-1">
                <p
                  className={`font-medium transition-colors duration-300 ${
                    index <= currentStep ? 'text-blue-900' : 'text-gray-600'
                  }`}
                >
                  {step.name}
                </p>
                {index === currentStep && (
                  <div className="mt-1">
                    <div className="w-full bg-blue-200 rounded-full h-1">
                      <div className="bg-blue-500 h-1 rounded-full animate-pulse w-full"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <div className="text-xs text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDemo;