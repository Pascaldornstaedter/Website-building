"use client";

import { Suspense, lazy } from "react";
import type { Application } from "@splinetool/runtime";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
  /** Forwarded after global mouse + background setup */
  onLoad?: (app: Application) => void;
  /** When false, the scene keeps rendering so look-at / follow-mouse stays smooth */
  renderOnDemand?: boolean;
}

export function SplineScene({
  scene,
  className,
  onLoad,
  renderOnDemand = false,
}: SplineSceneProps) {
  function handleLoad(app: Application) {
    // Cursor-based behaviors (look-at, follow) work anywhere on the page, not only over the canvas
    app.setGlobalEvents(true);
    // Blend with the page gradient instead of a separate solid panel
    try {
      app.setBackgroundColor("transparent");
    } catch {
      /* noop if runtime rejects value */
    }
    onLoad?.(app);
  }

  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="loader" />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onLoad={handleLoad}
        renderOnDemand={renderOnDemand}
      />
    </Suspense>
  );
}
