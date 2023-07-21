import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Slider from '@/components/Slider'
import MyVideo from '@/components/MyVideo'
import Image from 'next/image'
import VideoSlider from '@/components/VideoSlider'

export default function Home() {
  return (
<div className='flex flex-col' >
<Hero message="Software Developer" heading="Conrad Etherington" />
<Slider/>
<VideoSlider/>
</div>
  )
}
