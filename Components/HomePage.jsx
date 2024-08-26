import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const HomePage = ({}) => {
    return <div className="bg-grid-md h-screen w-full flex justify-center items-center">
        <div className='flex flex-col'>
            <div className="my-4">
                <h1 className='lg:text-9xl md:text-5xl sm:text-3xl font-black text-3xl'>Flow<span className='text-blue-600'>grid.</span></h1>
            </div>
            <div className='font-medium lg:text-2xl md:text-xl text-sm'>We can build your dream website or webapp within no time</div>
        </div>
    </div>
}

HomePage.propTypes = {

}

export default HomePage
