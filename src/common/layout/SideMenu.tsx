import styled from "styled-components"
import { MenuListT } from "types"

export const SideMenu = () => {

    const menuData: MenuListT[] = [
        {
            path: '',
            name: 'a'
        },
        {
            path: '',
            name: 'b'
        }
    ]

    const handleClickMenu = (menuPath: string) => {
        console.log(menuPath);
    }

    return (
        <StyledMenuLayout>
            <div>
                Exp-Project
            </div>
            <br/>
            {menuData.map((value) => {
                return (
                    <StyledMenuItem
                        onClick={() => handleClickMenu(value.path)}
                    >
                        {value.name}
                    </StyledMenuItem>
                )
            })}
        </StyledMenuLayout>
    )
}

const StyledMenuLayout = styled.div`
    flex-direction: row;
    display: flex;
    flex-direction: column;
    width: 12rem;
    height:100%;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    padding: 3rem 2rem ;
`
const StyledMenuItem = styled.div`
    padding: 10px 0px;
    font-weight: 600;
    font-size: 1.2rem;
`