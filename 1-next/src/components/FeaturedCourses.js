'use client'
import Link from 'next/link'
import courseData from '../data/music-courses.json'
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/background-gradient'
const FeaturedCourses = () => {
  const FeaturedCourses =  courseData.courses.filter(courses => courses.isfeatured)
  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With The Best</p>
            </div>
        </div>

        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {FeaturedCourses.map((courses)=>(
                    
                    <div key={courses.id} className='flex justify-center'>
                        <BackgroundGradient 
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                <p className='text-3xl pb-3 font-bold '>{courses.title}</p>
                                <p className='italic text-gray-300'>{courses.description}</p>
                                <Link href={`/courses/${courses.slug}`} className='text-blue-200'>
                                Learn More</Link>
                                </div>
                        </BackgroundGradient>
                        </div>
                ))}
            </div>
        </div>


        <div className='mt-20 text-center '>
            <Link href={'/'}>
            <Button className="bg-neutral-700 text-blue-400 font-semibold">
            View All Courses 
            </Button>
            </Link>
        </div>

    </div>
  )
}

export default FeaturedCourses