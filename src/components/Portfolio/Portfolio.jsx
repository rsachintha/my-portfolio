import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
	return (
		<motion.section
			variants={staggerChildren}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`paddings ${css.wrapper}`}
		>
			<a className="anchor" id="portfolio"></a>

			<div className={`innerWidth flexCenter ${css.container}`}>
				<motion.div
					variants={textVariant(0.4)}
					className={`flexCenter ${css.heading}`}
				>
					<div>
						<span className="primaryText">My Latest Works</span>
						<p style={{ marginTop: "10px" }}>
							Let's create what is in your mind a reality
						</p>
					</div>
					<span className="secondaryText">
						<a href="https://github.com/rsachintha">Explore More Works</a>
					</span>
				</motion.div>

				<div className={`flexCenter ${css.showCase}`}>
					<motion.img
						variants={fadeIn("up", "tween", 0.5, 0.6)}
						src="./showCase1.png"
						alt="project"
					/>

					<motion.img
						variants={fadeIn("up", "tween", 0.7, 0.6)}
						src="./showCase2.png"
						alt="project"
					/>

					<motion.img
						variants={fadeIn("up", "tween", 0.9, 0.6)}
						src="./showCase3.png"
						alt="project"
					/>

					{/* <motion.img
						variants={fadeIn("up", "tween", 0.9, 0.6)}
						src="./showCase3.png"
						alt="project"
					/>

					<motion.img
						variants={fadeIn("up", "tween", 0.9, 0.6)}
						src="./showCase3.png"
						alt="project"
					/>

					<motion.img
						variants={fadeIn("up", "tween", 0.9, 0.6)}
						src="./showCase3.png"
						alt="project"
					/> */}
				</div>
			</div>
		</motion.section>
	);
};

export default Portfolio;
