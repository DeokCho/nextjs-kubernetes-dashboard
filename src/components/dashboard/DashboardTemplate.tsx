import React from "react";
import axios from "axios";

import { NextPage } from "next";
import { V1Pod } from "@kubernetes/client-node/dist/gen/model/V1Pod";
import { V1PodList } from "@kubernetes/client-node/dist/gen/model/V1PodList";

const DashboardTemplate: NextPage<{
  items: V1Pod;
  lastResourceVersion: string;
}> = ({ items, lastResourceVersion }) => {
  console.log({ items, lastResourceVersion });
  return <div>DashboardTemplate</div>;
};

export default DashboardTemplate;
