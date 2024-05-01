import React from "react";
import css from "./Experties.module.scss";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const Experties = () => {
	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={css.wrapper}
		>
			<a className="anchor" id="experties"></a>
			<div
				className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
			>
				<div className={css.leftSide}>
					{projectExperience.map((exp, i) => {
						return (
							<motion.div
								variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
								className={css.exp}
								key={i}
							>
								<div className="flexCenter" style={{ background: exp.bg }}>
									<exp.icon size={25} color="white" />
								</div>
								<div>
									<span>{exp.name}</span>
									<span className="secondaryText">{exp.projects} Projects</span>
								</div>
							</motion.div>
						);
					})}
				</div>

				<motion.div variants={textVariant(0.5)} className={css.rightSide}>
					<span className="primaryText">What do I help you with?</span>
					{WhatDoIHelp.map((string, i) => {
						return (
							<span className="secondaryText" key={i}>
								{string}
							</span>
						);
					})}

					<div className={`flexCenter ${css.stats}`}>
						<div className={`flexCenter ${css.stat}`}>
							<span className="primaryText">30+</span>
							<span className="secondaryText">Projects Completed</span>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Experties;
