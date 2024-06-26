import React from "react";
import css from "./Experience.module.scss";
import { motion } from "framer-motion";
import {
	staggerChildren,
	zoomIn,
	textVariant2,
	fadeIn,
} from "../../utils/motion";
import { workExp } from "../../utils/data";

const Experience = () => {
	return (
		<motion.section
			variants={staggerChildren}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`paddings ${css.wrapper}`}
		>
			<a className="anchor" id="experience"></a>
			<div className={`flexCenter innerWidth ${css.container}`}>
				<span className="primaryText yPaddings">My Work Experience</span>

				<div className={`flexCenter ${css.experience}`}>
					{workExp.map((exp, i) => {
						return (
							<motion.div
								variants={textVariant2}
								className={`flexCenter ${css.exp}`}
								key={i}
							>
								<div className={css.psot}>
									<h1>{exp.place}</h1>
									<p>{exp.tenure}</p>
								</div>
								<div className={css.role}>
									<h1>{exp.role}</h1>
									<p>{exp.detail}</p>
								</div>
							</motion.div>
						);
					})}

					<motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
						<motion.div
							variants={fadeIn("down", "tween", 2, 1.5)}
							className={css.line}
						></motion.div>
						<div>
							<div
								className={css.circle}
								style={{ background: "#0047AB" }}
							></div>
						</div>
						<div>
							<div
								className={css.circle}
								style={{ background: "#0047AB" }}
							></div>
						</div>
						<div>
							<div
								className={css.circle}
								style={{ background: "#0047AB" }}
							></div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Experience;
