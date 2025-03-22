// ~/components/ui/select/Select.tsx
import * as React from "react";
import { ChevronDown, Check } from "lucide-react";

interface SelectProps {
  children: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

// Type guard to check if an element is a React element
function isReactElement(child: React.ReactNode): child is React.ReactElement {
  return React.isValidElement(child);
}

// Helper functions to check component types
function isSelectTrigger(element: React.ReactElement): boolean {
  return element.type === SelectTrigger;
}

function isSelectContent(element: React.ReactElement): boolean {
  return element.type === SelectContent;
}

function isSelectItem(element: React.ReactElement): boolean {
  return element.type === SelectItem;
}

// Define interfaces for props to help with type safety
interface SelectItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  value: string;
  selected?: boolean;
}

// Main Select component
export const Select: React.FC<SelectProps> = ({
  children,
  value,
  onValueChange,
  disabled = false,
  placeholder = "Select an option",
}) => {
  const [open, setOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Function to find the selected item's label
  const findSelectedLabel = () => {
    let selectedLabel = placeholder;

    React.Children.forEach(children, (child) => {
      if (isReactElement(child) && isSelectContent(child)) {
        React.Children.forEach(child.props.children, (contentChild) => {
          if (
            isReactElement(contentChild) &&
            isSelectItem(contentChild) &&
            contentChild.props.value === value
          ) {
            selectedLabel = contentChild.props.children;
          }
        });
      }
    });

    return selectedLabel;
  };

  return (
    <div ref={selectRef} className="relative inline-block w-full">
      {React.Children.map(children, (child) => {
        if (!isReactElement(child)) return child;

        // Add props to trigger
        if (isSelectTrigger(child)) {
          return React.cloneElement(child, {
            onClick: () => setOpen(!open),
            disabled,
            children: child.props.children || (
              <SelectValue>{findSelectedLabel()}</SelectValue>
            ),
          });
        }

        // Add props to content
        if (isSelectContent(child)) {
          if (!open) return null;

          return React.cloneElement(child, {
            children: React.Children.map(
              child.props.children,
              (contentChild) => {
                // Add props to each select item
                if (
                  isReactElement(contentChild) &&
                  isSelectItem(contentChild)
                ) {
                  return React.cloneElement<SelectItemProps>(contentChild, {
                    onClick: () => {
                      onValueChange(contentChild.props.value);
                      setOpen(false);
                    },
                    selected: contentChild.props.value === value,
                  });
                }
                return contentChild;
              }
            ),
          });
        }

        return child;
      })}
    </div>
  );
};

interface SelectTriggerProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  children,
  className,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`flex h-9 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus:ring-slate-300 ${
        className || ""
      }`}
      onClick={onClick}
      disabled={disabled}
      aria-haspopup="listbox"
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
};

interface SelectValueProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectValue: React.FC<SelectValueProps> = ({
  children,
  className,
}) => {
  return (
    <span className={`block truncate ${className || ""}`}>{children}</span>
  );
};

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectContent: React.FC<SelectContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`absolute z-50 w-full min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md animate-in fade-in-80 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 ${
        className || ""
      }`}
      role="listbox"
    >
      <div className="max-h-[var(--radix-select-content-available-height)] overflow-auto p-1">
        {children}
      </div>
    </div>
  );
};

export const SelectItem: React.FC<SelectItemProps> = ({
  children,
  className,
  value,
  disabled = false,
  selected = false,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      data-value={value}
      data-disabled={disabled}
      data-selected={selected}
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[selected]:bg-slate-100 data-[selected]:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[selected]:bg-slate-800 dark:data-[selected]:text-slate-50 ${
        className || ""
      }`}
      onClick={onClick}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {selected && <Check className="h-4 w-4" />}
      </span>
      {children}
    </button>
  );
};
