"use client";

import React from "react";

function Navigation() {
  return (
    <>
      <aside className="h-full group/sidebar bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]">
        <div>
          <p>Action Items</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        {/* The little effect on the right side for expanding the navigation */}
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute right-0 top-0 h-full w-1 bg-primary/10" />
      </aside>
    </>
  );
}

export default Navigation;
