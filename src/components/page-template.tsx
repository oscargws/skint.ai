import React from "react";

interface PageTemplateProps {
  title: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  description,
  buttonLabel,
  onButtonClick,
  children,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        {buttonLabel && onButtonClick && (
          <button
            onClick={onButtonClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {buttonLabel}
          </button>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default PageTemplate;
