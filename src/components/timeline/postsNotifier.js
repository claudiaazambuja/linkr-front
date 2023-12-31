import { useEffect, useState } from "react";
import { styled } from "styled-components";

const PostsNotifier = ({ notifier: { state }, setRefresh }) => {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setDisabled(false);
    }, [state.count])

    return (
        <Container data-test="load-btn"
            onClick={() => {
                if(disabled) return;

                setDisabled(true);
                setRefresh(prev => !prev)}}
        >
            <p className="Lato">{state.count} new posts, load more!</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M11.2391 4.19004e-06C15.4598 4.19004e-06 18.9272 3.10714 19.513 7.14285H22L17.8152 11.9048L13.6304 7.14285H16.4043C16.1369 5.9775 15.4804 4.93688 14.5423 4.19091C13.6042 3.44495 12.4397 3.03771 11.2391 3.03571C9.50543 3.03571 7.975 3.88095 7.00652 5.15476L4.96196 2.83333C5.74453 1.94233 6.70962 1.22848 7.79235 0.739766C8.87507 0.251055 10.0503 -0.00118567 11.2391 4.19004e-06ZM10.7609 16C6.55217 16 3.07283 12.8928 2.48696 8.85714H0L4.18478 4.09524C5.5837 5.67857 6.97065 7.27381 8.36957 8.85714H5.59565C5.86314 10.0225 6.51955 11.0631 7.45769 11.8091C8.39583 12.555 9.56028 12.9623 10.7609 12.9643C12.4946 12.9643 14.025 12.119 14.9935 10.8452L17.038 13.1667C16.2562 14.0586 15.2913 14.773 14.2084 15.2618C13.1255 15.7506 11.9498 16.0023 10.7609 16Z" fill="white" />
            </svg>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    width: 100%;
    height: 60px;

    border-radius: 16px;
    background: #1877F2;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    cursor: pointer;

    p {
        color: #FFF;
        font-size: 18px;
        font-weight: 500;
    }


`;

export default PostsNotifier;