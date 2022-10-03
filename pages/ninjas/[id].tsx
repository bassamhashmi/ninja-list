import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { NinjasDataType } from "../../types";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}`);
  const data: NinjasDataType = await response.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id;
  const response = await fetch(`${process.env.API_URL}/` + id);
  const data = await response.json();

  return {
    props: { ninja: data },
  };
};

export default function Details({
  ninja,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="container">
      <main className="main">
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.phone}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
      </main>
    </div>
  );
}
