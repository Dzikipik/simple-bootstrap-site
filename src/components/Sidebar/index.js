import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarBtnWrap,SidebarLink,SidebarRoute,SidebarWrapper, SidebarMenu} from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">O grzybach</SidebarLink>
                    <SidebarLink to="why">Czemu grzyby?</SidebarLink>
                    <SidebarLink to="fav">Ulubieńcy</SidebarLink>
                    <SidebarLink to="nuh">Brzydale</SidebarLink>

                    <SidebarBtnWrap>
                        <SidebarRoute to="/contact">Kontakt</SidebarRoute>
                    </SidebarBtnWrap>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
