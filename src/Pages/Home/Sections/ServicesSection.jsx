import React from 'react'
import ServiceCard from '../../../Components/ServiceCard'

const ServicesSection = () => {
  return (
    <section className='w-full flex flex-wrap gap-6  justify-center py-7' >
      <ServiceCard title={"Best prices & offers"} subTitle={"Orders $50 or more"} icon={"https://nest.botble.com/storage/general/icon-1.png"}/>
      <ServiceCard title={"Free delivery"} subTitle={"24/7 amazing services"} icon={"https://nest.botble.com/storage/general/icon-2.png"}/>
      <ServiceCard title={"Great daily deal"} subTitle={"When you sign up"} icon={"https://nest.botble.com/storage/general/icon-3.png"}/>
      <ServiceCard title={"Wide assortment"} subTitle={"Mega Discounts"} icon={"https://nest.botble.com/storage/general/icon-4.png"}/>
      <ServiceCard title={"Easy returns"} subTitle={"Within 30 days"} icon={"https://nest.botble.com/storage/general/icon-5.png"}/>
    </section>
  )
}

export default ServicesSection
