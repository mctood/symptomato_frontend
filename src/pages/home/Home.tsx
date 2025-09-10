import React from 'react';
import 'styles/pages/Home.scss'
import Page from "components/Page";
import {MAX_PAGE_WIDTH, WRAPPED_WIDTH} from "values";
import Header from "../../components/header/Header";
import Wrapper from "../../components/header/Wrapper";

function Home() {
    return (
        <Page widthLimit={MAX_PAGE_WIDTH}>
            <Header />
            <Wrapper width={WRAPPED_WIDTH}>
                <div className="mainTitle">
                    Symptomato – <br />
                    cервис быстрых ответов <br />
                    о здоровье онлайн
                </div>
            </Wrapper>
        </Page>
    );
}

export default Home;
