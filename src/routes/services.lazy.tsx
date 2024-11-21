/** @format */

import * as React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/services")({
  component: Services,
});

function Services() {
  return "welcome from services";
}
