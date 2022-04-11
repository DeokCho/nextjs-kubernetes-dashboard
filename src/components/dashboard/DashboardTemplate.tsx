import React from "react";

import { NextPage } from "next";
import { V1Pod } from "@kubernetes/client-node/dist/gen/model/V1Pod";

const DashboardTemplate: NextPage<{
  items: V1Pod | null;
  lastResourceVersion: string;
}> = ({ items, lastResourceVersion }) => {
  console.log({ items, lastResourceVersion });
  return <div>DashboardTemplate</div>;
};

export default DashboardTemplate;
