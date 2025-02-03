import { useState } from 'react'
import { skillsData } from '../data/skills'

const Skills = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const skills = skillsData
  const skillsPerPage = 8
  // Get Total pages
  const totalPages = Math.ceil(skills.length / skillsPerPage)
  // Get current page skills
  const indexOfLastSkill = currentPage * skillsPerPage
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage
  const currentSkills = skills.slice(indexOfFirstSkill, indexOfLastSkill)

  return (
    <div className="main-container custom-scrollbar">
      <div className="skills-body">
        <div className="flex flex-col">
          <div className="flex">
            <p className='subtitle'>
              Skills
            </p>
          </div>
          <div className="flex">
            <p className='py-4'>
              These are the technologies I am experienced in.
            </p>
          </div>
        </div>
        <div className="skills">
          {currentSkills.map((skill) => {
            return (
              <div className='skills-item' key={skill.id}>
                <div className='flex h-3/4'>
                  <img className='w-20 h-auto mx-auto object-contain rounded-2xl' src={skill.icon} alt={`${skill.name} icon`} />
                </div>
                <div className='flex w-full justify-center'>
                  <p className='my-4'>{skill.name}</p>
                </div>
              </div>
            )
          })}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center space-x-4 mt-2">
          <button
            className={
                        `px-4 py-2 rounded bg-gradient-to-t from-cyan-500 to-[#1e4074] 
                        ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:from-[#1e4074] hover:to-cyan-700'}`
                      }
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
          <button
            className={
                        `px-4 py-2 rounded bg-gradient-to-t from-cyan-500 to-[#1e4074]
                        ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:from-[#1e4074] hover:to-cyan-700'}`
                      }
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Skills