import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
	return (
		<div className='dashboardWrapper'>
			{/* <div className={`${changeData.sidebar ? 'sidebarWrapper sidebarToggle' : 'sidebarWrapper'}`}> */}
			<div className='sidebarWrapper sidebarToggle'>
				<Sidebar />
			</div>
			<div className='rightSideWrapper'>
				<div className='headerWrapper'>
					<Header />
				</div>
				<div className='outletWrapper'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layout