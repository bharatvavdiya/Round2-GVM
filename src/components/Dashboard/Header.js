import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom';
import UserIcon from '../../Assest/image/userIcon.jpg'


export default function Header() {
	const navigate = useNavigate();

	const handleSidebar = () => {
		// context.setSidebar(true);
	}

	const handleLogout = () => {
		// localStorage.removeItem("token");
		// localStorage.removeItem('admin');
		// navigate(ROUTES.DASHBOARD);
	}


	return (
		<div className='d-flex flex-wrap align-items-center w-100'>
			<div className='d-flex flex-wrap align-items-center ms-auto'>
				<div>
					{/* <Dropdown className='dashNotiDropdown'>
						<Dropdown.Toggle variant='normal' id='dropdown-basic' className='py-0'>
							<div className='dashNotiIcon'><i className='las la-bell'></i></div>
						</Dropdown.Toggle>
					</Dropdown> */}
				</div>

				<div>
					Hi,admin
					{/* <Dropdown className='dashUserDropdown'>
						<Dropdown.Toggle variant='normal' id='dropdown-basic' className='py-0 pe-1'>
							<span className='dashUserIcon me-2'>
								<img src={UserIcon} alt='Admin' crossOrigin="anonymous" />
							</span>
						</Dropdown.Toggle>

						<Dropdown.Menu className='p-0'>
							<Link onClick={handleLogout} className='dropdown-item py-2 px-3'><span><i className='las la-sign-out-alt'></i></span>Logout</Link>
						</Dropdown.Menu>
					</Dropdown> */}
				</div>
			</div>
		</div>
	)
}
