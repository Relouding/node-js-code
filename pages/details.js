import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Details() {
 return (
  <Layout>
   <Head />

   <div className="container">
    <h1>{post.title}</h1>
    <p>{post.content}</p>
    <p>{post.date}</p>
   </div>

  </Layout>
 );
}

// Api Call here(retrieve parameter from URL)