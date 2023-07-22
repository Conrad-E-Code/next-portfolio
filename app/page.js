"use client";
import Hero from '@/components/Hero'
import VideoSlider from '../components/video/VideoSlider'

export default function Home() {

  return (
<div className='flex flex-col' >
<Hero message="Software Developer" heading="Conrad Etherington" />
<VideoSlider />
</div>
  )
}
