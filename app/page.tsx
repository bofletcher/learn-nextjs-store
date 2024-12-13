import React from "react";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">Heading 1</h1>
      <Button variant="outline" size="lg" className="capatalize m-8">
        Click
      </Button>
    </div>
  );
}

export default HomePage;
