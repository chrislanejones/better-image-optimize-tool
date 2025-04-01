import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border shadow-sm bg-card text-card-foreground ${
      className || ""
    }`}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className || ""}`}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-2xl font-semibold leading-none tracking-tight ${
      className || ""
    }`}
    {...props}
  >
    {children}
  </h3>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-muted-foreground ${className || ""}`}
    {...props}
  >
    {children}
  </p>
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className || ""}`} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center p-6 pt-0 ${className || ""}`}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Card With Border Title
interface CardWithBorderTitleProps {
  title: React.ReactNode;
  children: React.ReactNode;
  titleClassName?: string;
  cardClassName?: string;
  contentClassName?: string;
}

const CardWithBorderTitle = React.forwardRef<
  HTMLDivElement,
  CardWithBorderTitleProps &
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof CardWithBorderTitleProps>
>(
  (
    {
      title,
      children,
      titleClassName = "",
      cardClassName = "",
      contentClassName = "",
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={`relative mt-6 rounded-lg border shadow-sm bg-card text-card-foreground ${cardClassName}`}
      {...props}
    >
      {/* Title positioned on the border */}
      <div
        className={`absolute -top-3 left-4 px-2 bg-background ${titleClassName}`}
      >
        {title}
      </div>

      {/* Card content with increased top padding */}
      <div className={`p-6 pt-8 ${contentClassName}`}>{children}</div>
    </div>
  )
);

CardWithBorderTitle.displayName = "CardWithBorderTitle";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardWithBorderTitle,
};
