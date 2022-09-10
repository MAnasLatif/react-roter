import React from 'react'
import { useParams } from "react-router-dom";

export default function PostPage() {
let params = useParams();
    return <h1>Post Link :  {params.Post_id}</h1>;
}
