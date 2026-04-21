import { Button } from "@heroui/react";
import React from "react";

const HeroPage = () => {
  return (
    <div>
      <h2 className="text-2xl text-center mt-5 font-bold">Hero Page</h2>

      <Button variant="secondary">Hero Button 1</Button>
      <Button variant="ghost">Hero Button 2</Button>
    </div>
  );
};

export default HeroPage;
