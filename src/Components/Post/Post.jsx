import React from 'react';
import TitlePost from "./TitlePost";
import BodyPost from "./BodyPost";
import styled from "styled-components";
import DatePost from "./DatePost";
import Category from "./Category";

const StyledPost = styled.div`
margin: 30px;
width: 50vw;
text-align: left;
`

const Post = ({title, body, date, category}) => {
    return (
        <StyledPost>
            <TitlePost title={title}/>
            <DatePost date={date} />
            <Category category={category}/>
            <BodyPost body={body}/>
        </StyledPost>
    );
};

export default Post;