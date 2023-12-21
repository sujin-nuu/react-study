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

    const handleClickMenu =(menuPath:string) =>{
        console.log(menuPath);
    }

    return (
        <StyledMenuLayout>
            {menuData.map((value) => {
                return (
                    <div onClick={()=>handleClickMenu(value.path)}>
                        {value.name}
                    </div>
                )
            })}
        </StyledMenuLayout>
    )
}

const StyledMenuLayout = styled.div`
    flex-direction: row;
    display: flex;
    width: 10rem;
    height:100%;
`