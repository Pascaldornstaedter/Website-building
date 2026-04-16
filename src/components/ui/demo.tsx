"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <Card className="relative h-[500px] w-full overflow-hidden bg-background">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#00FF66" />

      <div className="flex h-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8">
          <h1 className="bg-gradient-to-br from-foreground to-primary/80 bg-clip-text font-heading text-4xl font-bold text-transparent md:text-5xl">
            Interactive 3D
          </h1>
          <p className="mt-4 max-w-lg font-sans text-muted-foreground">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences that
            capture attention and enhance your design.
          </p>
        </div>

        <div className="relative min-h-[240px] flex-1">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  );
}
