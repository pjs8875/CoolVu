"use client";

import { Suspense, ReactNode } from "react";
import MultiStepContactModal from "./MultiStepContactModal";

interface ContactModalWrapperProps {
  children?: ReactNode;
}

export default function ContactModalWrapper({ children }: ContactModalWrapperProps) {
  return (
    <Suspense fallback={null}>
      {children}
      <MultiStepContactModal />
    </Suspense>
  );
}
