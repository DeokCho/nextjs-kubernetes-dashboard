import type { NextPage } from "next";
import Head from "next/head";
import lazy from "next/dynamic";

import { V1Pod } from "@kubernetes/client-node/dist/gen/model/V1Pod";
import { V1PodList } from "@kubernetes/client-node/dist/gen/model/V1PodList";

const DashBoardTemplate = lazy(
  () => import("@components/dashboard/DashboardTemplate")
);

const Home: NextPage<any> = ({ lastResourceVersion, items }) => {
  return (
    <div>
      <Head>
        <title>Kubernetes Dashboard</title>
        <meta name="description" content="kubernetes dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashBoardTemplate
        lastResourceVersion={lastResourceVersion}
        items={items}
      />
      <footer></footer>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  try {
    const { items, metadata }: V1PodList = await fetch(
      "http://localhost:3000/api/v1/pods"
    ).then((data) => data.json());
    console.log({ items, metadata });
    return {
      props: {
        lastResourceVersion: metadata?.resourceVersion,
        items,
      },
    };
  } catch (err) {
    console.log({ err });
    return { props: { lastResourceVersion: "", items: null } };
  }
};
