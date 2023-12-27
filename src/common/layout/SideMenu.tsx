import styled from "styled-components"
import { MenuListT } from "types"
import logo from 'assets/img/logo.png';

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
            <div style={{ textAlign: 'center' , margin:'2rem 0px' }}>
                <img src={logo} width={40} height={40} />
            </div>
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
`
const StyledMenuItem = styled.div`
    padding: 10px 20px;
    font-weight: 600;
    font-size: 1.2rem;
    &:hover {
        transform: scale(1.03);
        -webkit-transition: -webkit-transform .3s ease;
        cursor: pointer;
    }
`