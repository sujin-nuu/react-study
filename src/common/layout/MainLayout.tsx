import { MainHeader, SideMenu } from "common";
import { Outlet } from "react-router-dom"
import styled from "styled-components";

export const MainLayout = () => {
    return (
        <StyledMainLayout>
            <MainHeader />
            <StyledContents>
                <SideMenu />
                <Outlet />
            </StyledContents>
        </StyledMainLayout>
    )
}

const StyledMainLayout = styled.div`
    width: 100vw;
    height: 100vh;
`

const StyledContents = styled.div`
    display: flex;
    height: calc( 100vh - 5rem );
`