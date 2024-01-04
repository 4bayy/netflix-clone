import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
import MyImageCarousel from "../components/Coursel";



function Home()
{
    return (
        <div>
            <Main></Main>
            <Row title='Upcoming' fetchURL={requests.mostPopular}></Row>
            <Row title="Trending"></Row>
            <MyImageCarousel title="Peoples Also Watching"></MyImageCarousel>
        </div>
    );
}
export default Home;