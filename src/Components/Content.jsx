import React from 'react';
import Flex from "./Flex";
import Post from "./Post/Post";
import postsData from "../mocks/postsData";

const Content = () => {
    return (
        <Flex direction='column' align='center'>
            {postsData.map(p => <Post
                key={p.id}
                title={p.caption}
                body={p.text}
                date={p.date}
                category={p.category}
            />)}
        </Flex>
    );
};

export default Content;