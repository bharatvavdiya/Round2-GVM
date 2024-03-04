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
				</div>

				<div>
					<button className='border border-0 bg-transparent text-white' onClick={() => alert("You have been Signout")}>Signout</button>
				</div>
			</div>
		</div>
	)
}
