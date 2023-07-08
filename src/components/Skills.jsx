import React from 'react'

import HTML from '../Assets/html.png';
import CSS from '../Assets/css.png';
import JavaScript from '../Assets/javascript.png';
import ReactImg from '../Assets/react.png';
import Node from '../Assets/node.png';
import FireBase from '../Assets/firebase.png';
import GitHub from '../Assets/github.png';
import Tailwind from '../Assets/tailwind.png';
import Mongo from '../Assets/mongo.png';
import AWS from '../Assets/aws.png';
import VSCode from '../Assets/VS Code.png';
import Canva from '../Assets/canva.png';
import Numpy from '../Assets/numpy.png';
import Pandas from '../Assets/pandas.png';
import Matplotlib from '../Assets/matplotlib.png';
import Sklearn from '../Assets/sklearn.png';
import OpenCV from '../Assets/opencv.png';
import Seaborn from '../Assets/seaborn.png';
import Keras from '../Assets/keras.png';
import C from '../Assets/c.png';
import CPP from '../Assets/cpp.png';
import Java from '../Assets/java.png';
import Python from '../Assets/python.png';
import SkillsItem from './SkillsItem';


function Skills() {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4 text-xl'>These are the technologies I worked with ...</p>
            </div>
            <br />

            <h2 className='italic font-bold text-gray-300 text-xl'>Programming Languages</h2>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <SkillsItem Skill={"C"} Icon={C} />
                <SkillsItem Skill={"C++"} Icon={CPP} />
                <SkillsItem Skill={"Java"} Icon={Java} />
                <SkillsItem Skill={"Python"} Icon={Python} />
            </div>
            <br />

            <h2 className='italic font-bold text-gray-300 text-xl'>Web Development</h2>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="Skills icon" />
                    <p className='my-4'>HTML</p>
                </div> */}
                <SkillsItem Skill={"HTML"} Icon={HTML} />
                <SkillsItem Skill={"CSS"} Icon={CSS} />
                <SkillsItem Skill={"JavaScript"} Icon={JavaScript} />
                <SkillsItem Skill={"React.JS"} Icon={ReactImg} />
                <SkillsItem Skill={"Node.JS"} Icon={Node} />
                <SkillsItem Skill={"Tailwind CSS"} Icon={Tailwind} />
            </div>
            <br />

            <h2 className='italic font-bold text-gray-300 text-xl'>Machine Learning, Deep Learning, Image Processing</h2>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <SkillsItem Skill={"Numpy"} Icon={Numpy} />
                <SkillsItem Skill={"Pandas"} Icon={Pandas} />
                <SkillsItem Skill={"Matplotlib"} Icon={Matplotlib} />
                <SkillsItem Skill={"Seaborn"} Icon={Seaborn} />
                <SkillsItem Skill={"Sklearn"} Icon={Sklearn} />
                <SkillsItem Skill={"OpenCV"} Icon={OpenCV} />
                <SkillsItem Skill={"Keras"} Icon={Keras} />
            </div>
            <br />

            <h2 className='italic font-bold text-gray-300 text-xl'>Other Software Tools</h2>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <SkillsItem Skill={"Github"} Icon={GitHub} />
                <SkillsItem Skill={"VS Code"} Icon={VSCode} />
                <SkillsItem Skill={"Canva"} Icon={Canva} />
            </div>
        </div>
    </div>
  )
}

export default Skills