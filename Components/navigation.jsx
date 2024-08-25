import React from 'react'
import PropTypes from 'prop-types'

const Navigation = props => {
  return (
    <>
        <div className="navbar bg-base-100 fixed top-0">
            <div className="flex-1">
                <a className="btn hover:bg-transparent hover:border-0 bg-transparent border-0 text-xl">Flowgrid</a>
            </div>

            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div> 
    </>
  )
}

Navigation.propTypes = {

}

export default Navigation
