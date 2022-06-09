import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Index(props) {
  console.log(props);

// Would like the h1 to link to details page(passing a parameter in the URL)

  return (
    <Layout>
      <Head />

      {props.posts.map((post) => {
        return <div>
               <h1 key={post.slug}>{post.title.rendered}</h1>
               <p>{post.date}</p></div>;
      })}

    </Layout>
  );
}

// Getting Error: Error serializing `.posts` returned from `getServerSideProps` in "/".
// Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value.

// I'm not that great with next js, so I don't know why it dosn't work.
// But hopefully this code makes it more clear what I want it to do.

export async function getStaticProps() {
  let posts = [];

  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    posts = response.data.results;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
        posts: posts,
    },
  };
}