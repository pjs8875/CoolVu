"use client";

import { Suspense } from "react";
import MultiStepContactModal from "./MultiStepContactModal";

export default function ContactModalWrapper() {
  return (
    <Suspense fallback={null}>
      <MultiStepContactModal />
    </Suspense>
  );
}
