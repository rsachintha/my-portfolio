import React, { useState, useRef } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
	const menuRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);
	//custom hook to create shadow funnction of the header while scrolling
	const headerShadow = useHeaderShadow();

	//to handle click outside of sidebar on mobile
	useOutsideAlerter({
		menuRef,
		setMenuOpen,
	});

	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			variants={headerVariants}
			viewport={{ once: false, amount: 0.25 }}
			className={`bg-primary paddings ${css.wrapper}`}
			style={{ boxShadow: headerShadow }}
		>
			<div className={`flexCenter innerWidth ${css.container}`}>
				<div className={css.name}>
					<a href="#hero">Sachintha</a>
				</div>
				<ul
					style={getMenuStyles(menuOpen)}
					ref={menuRef}
					className={`flexCenter ${css.menu}`}
				>
					<li>
						<a href="#experties">Services</a>
					</li>
					<li>
						<a href="#experience">Experience</a>
					</li>
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
					<li>
						<a href="#tech">Technologies</a>
					</li>
					<li className={`flexCenter ${css.phone}`}>
						<p>+94 702 796 396</p>
						<BiPhoneCall size={"40px"} />
					</li>
				</ul>

				<div
					className={css.menuIcon}
					onClick={() => setMenuOpen((prev) => !prev)}
				>
					<BiMenuAltRight size={30} />
				</div>
			</div>
		</motion.div>
	);
};

export default Header;
