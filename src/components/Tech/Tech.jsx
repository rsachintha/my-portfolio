import React from "react";
import { techs, sliderSettings } from "../../utils/data";
import css from "./Tech.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
const Tech = () => {
	return (
		<motion.section
			variants={staggerChildren}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			section
			className={`paddings ${css.wrapper}`}
		>
			<a className="anchor" id="tech"></a>

			<motion.div
				variants={footerVariants}
				className={`yPaddings innerWidth ${css.container}`}
			>
				<div className={`flexCenter ${css.heading}`}>
					<span className="primaryText">Technologies I mainly use</span>
					<p style={{ marginTop: "2rem" }}>
						These are few of my mainly using favourite technologies, And I am
						eager to learn latest technologies as fast as possible
					</p>
					<p>
						The process of developing appilications is quite easy for me by
						using the above Tech-Stack
					</p>
				</div>

				<div className={`yPaddings ${css.techs}`}>
					<Slider {...sliderSettings} className={css.slider}>
						{techs.map((tech, i) => {
							return (
								<div className={`flexCenter ${css.tech}`}>
									<img src={tech.img} alt="" />
									<p>{tech.description}</p>
									<div className={css.line}></div>
									<div className={css.bio}>
										<span>{tech.name}</span>
										<span>{tech.task}</span>
									</div>
								</div>
							);
						})}
					</Slider>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Tech;
