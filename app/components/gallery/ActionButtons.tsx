import React from "react";
import { Link } from "@remix-run/react";
import { Card, CardContent } from "~/components/ui/Card";
import { Button } from "~/components/ui/Button";

interface ActionButtonsProps {
  hasImages: boolean;
  onClearAll: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  hasImages,
  onClearAll,
}) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" asChild>
            <Link to="/">Back to Upload</Link>
          </Button>

          {/* Clear all button */}
          {hasImages && (
            <Button variant="outline" onClick={onClearAll}>
              Clear All
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionButtons;
