import React from 'react'

const CallToAction = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-6">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Learn anything, anytime, anywhere</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Join the best online learning platform and take your skills to the next level.</p>
    </div>
    <div className='flex gap-2 justify-center'>
    <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
      <button className="text-gray-500 bg-white border-[2px] border-gray-500 py-2 px-8 focus:outline-none  rounded text-lg ">Learn more</button>
    </div>
  </div>
</section>
    </>
  )
}

export default CallToAction
