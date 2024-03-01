import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MENU from "./SidebarMenu";

export default function Sidebar() {
	const location = window.location.href;

	const [active, setActive] = useState(null);
	const [active2, setActive2] = useState(null);

	const handleClick = (e) => {
		e.preventDefault();
		setActive2(null);
		setActive(parseInt(e.target.id));
	};

	const handleClick2 = (e) => {
		setActive(null);
		setActive2(parseInt(e.target.id));
	};

	return (
		<>
			<div className="dashboardLogo">
				Logo
			</div>
			<div className="sidebarScrollDiv">
				<ul className="sidebarMenu">
					{MENU.MAIN.map((item, index) => {
						return (
							<>
								<li className={(index === active || location.includes(item.LINK)) ? 'sidebarMenuItem activeMenu' : 'sidebarMenuItem'} onClick={handleClick} key={index} >
									<Link to={item.LINK} id={index}><span>{item.ICON}</span>{item.TITLE}</Link>
								</li>
							</>
						);
					})}
				</ul>
			</div>
		</>
	);
}
