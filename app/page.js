import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Slider from '@/components/Slider'
import Image from 'next/image'


export default function Home() {
  return (
<div className='flex flex-col' >
<Hero message="Software Developer" heading="Conrad Etherington" />
<Slider/>
</div>
  )
}
