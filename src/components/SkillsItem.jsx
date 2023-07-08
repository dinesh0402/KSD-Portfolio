import React from 'react'

function SkillsItem({Skill, Icon}) {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Icon} alt="Skills icon" />
        <p className='my-4'>{Skill}</p>
    </div>
  )
}

export default SkillsItem