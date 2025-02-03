import { useState } from "react";
import { workData } from "../data/work";
import { motion, TargetAndTransition } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import Student from '../assets/dvp4.png';

const Work = () => {
    const works:Work[] = workData;
    const [filterWork, setFilterWork] = useState<Work[]>(workData);
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [animateCard, setAnimateCard] = useState<TargetAndTransition>({ y: 0, opacity: 1 });

    const handleWorkFilter = (item: string) => {
        setActiveFilter(item);
        setAnimateCard({ y: 100, opacity: 0 });

        setTimeout(() => {
        setAnimateCard({ y: 0, opacity: 1 });

        if (item === 'All') {
            setFilterWork(works);
        } else {
            setFilterWork(works.filter((work) => work.tags.includes(item)));
        }
        }, 500);
    };
  return (
    <div className="main-container custom-scrollbar">
      <div className="work-body">
        <div className="flex flex-col gap-3">
          <div className="flex">
            <p className="subtitle">
              Work
            </p>
          </div>
          <div className="flex">
            <p className="head-text">
              My Creative <span>Portfolio</span> Section
            </p>
          </div>
        </div>
        <div className="app__work-filter">
          {['Desktop', 'Mobile', 'Full Stack', 'Frontend', 'All'].map((item, index) => (
            <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
                {item}
            </div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.length > 0 ? (
            filterWork.map((work) => {
              return (
                <div className="app__work-item app__flex" key={work.id}>
                  <div
                    className="app__work-img app__flex"
                  >
                    <img src={work.imgUrl} alt={work.name} className="work-img" />

                    <motion.div
                      whileHover={{ opacity: [0, 1] }}
                      transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                      className="app__work-hover app__flex"
                    >
                      <a href={work.projectLink} target="_blank" rel="noreferrer">

                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="hover-div app__flex"
                        >
                            <AiFillEye />
                        </motion.div>
                      </a>
                      <a href={work.codeLink} target="_blank" rel="noreferrer">
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.90] }}
                          transition={{ duration: 0.25 }}
                          className="hover-div app__flex"
                        >
                          <AiFillGithub />
                        </motion.div>
                      </a>
                    </motion.div>
                  </div>
                  <div className="app__work-content app__flex">
                    <h4 className="content-h4 bold-text">{work.title}</h4>
                    <p className="about-intro" style={{ marginTop: 10 }}>{work.description}</p>
                    <div className="app__work-tag app__flex">
                        <p className="p-text">{work.tags[0]}</p>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className='app__work-item app__flex'>
              <div className='app__work-img app__flex'>
                  <img src={Student} alt='No Project' />
              </div>
              <div className='app__work-content app__flex'>
                  <h4 className='content-h4 bold-text'>No Projects Yet</h4>
                  <p className='about-intro'>Loading soon...</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Work