import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "../../utils/motion";

const Hero = () => {
	return (
		<section className={`paddings ${css.wrapper}`}>
			<a className="anchor" id="hero"></a>
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className={`innerWidth ${css.container}`}
			>
				<div className={css.upperElements}>
					<motion.span
						variants={fadeIn("right", "tween", 0.2, 1)}
						className="primaryText"
					>
						Hey There, <br /> I'm Sachintha.
					</motion.span>

					<motion.span
						variants={fadeIn("left", "tween", 0.4, 1)}
						className="secondaryText"
					>
						I design beautiful simple <br /> things, And I love what I do
					</motion.span>
				</div>

				<motion.div variants={fadeIn("up", "tween", 0.3, 1)} className={css.me}>
					<motion.img
						variants={slideIn("up", "tween", 0.5, 1.3)}
						src="./person.png"
						alt="me"
					/>
				</motion.div>

				<a href="mailto:sachintharrupasinghe@gmail.com" className={css.email}>
					sachintharrupasinghe@gmail.com
				</a>

				<div className={css.lowerElements}>
					<motion.div
						variants={fadeIn("right", "tween", 0.3, 1)}
						className={css.experience}
					>
						<div className="primaryText">2+</div>
						<div className="secondaryText">
							<div>Years</div>
							<div>Experience</div>
						</div>
					</motion.div>

					<motion.div
						variants={fadeIn("left", "tween", 0.5, 1)}
						className={css.developer}
					>
						<img src="./developer.png" alt="developer" />
						<span>Software Engineer</span>
						<span>Web Developer</span>
						<span>UI/UX Designer</span>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
