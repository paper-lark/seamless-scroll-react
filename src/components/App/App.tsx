import React from "react";
import { Layout, LayoutElementPosition } from "../Layout/Layout";
import { Page } from "../Page/Page";

const App: React.FC = () => {
  return (
    <Layout>
      {[
        (props: LayoutElementPosition) => (
          <Page
            {...props}
            key="1"
            style={{ background: "var(--color-blue-50)" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            harum.
          </Page>
        ),
        (props: LayoutElementPosition) => (
          <Page
            {...props}
            key="2"
            style={{ background: "var(--color-red-50)" }}
          >
            <div style={{ width: 3000 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              perspiciatis quia dignissimos rem necessitatibus nam facilis
              adipisci vitae animi maiores, exercitationem est laboriosam
              doloremque, maxime minima iusto ea laudantium at, reiciendis eaque
              neque vel enim. Similique quo exercitationem a necessitatibus,
              quibusdam, maxime adipisci nam at ducimus accusamus sapiente
              perspiciatis consectetur reiciendis laborum nemo, distinctio sequi
              repellat totam velit accusantium. Consectetur ipsum ducimus esse
              perferendis, numquam inventore exercitationem suscipit vero sunt
              omnis atque, vel eaque sint eos soluta cupiditate. Excepturi culpa
              obcaecati provident deserunt, fugiat ipsa deleniti eos, porro
              voluptatum quisquam eaque beatae quas ipsam tempora nihil
              voluptate rerum autem eum!
            </div>
          </Page>
        ),
        (props: LayoutElementPosition) => (
          <Page
            {...props}
            key="3"
            style={{ background: "var(--color-yellow-50)", height: 3000 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            reprehenderit error vitae illo esse amet!
          </Page>
        ),
        (props: LayoutElementPosition) => (
          <Page
            {...props}
            key="4"
            style={{ background: "var(--color-teal-50)" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id
            incidunt dicta nostrum culpa, molestiae autem, at magnam laborum
            optio, dolor maiores consectetur ea distinctio necessitatibus
            possimus ducimus cum. Eligendi.
          </Page>
        ),
      ]}
    </Layout>
  );
};

export default App;
