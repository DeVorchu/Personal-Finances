import React from 'react'
import { BodyWraper, DashboardBody, DashboardHeader, DashboardWraper } from '../../styles/components/dashboard.styled'
import Body from './Body'
import Header from './Header'
import RightMenu from './RightMenu'

export default function index() {
    return (
        <DashboardWraper>
            <DashboardHeader>
                <Header />
            </DashboardHeader>
            
            <DashboardBody>
                <BodyWraper>
                    <Body />
                    <RightMenu />
                </BodyWraper>
            </DashboardBody>
            
        </DashboardWraper>
    )
}
