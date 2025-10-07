import React from 'react'
import Hero from '../Hero/Hero';
import Todays from '../Today/Todays';
import Categories from '../categories/Categories';
import Month from '../Month/Month';
import Timer from '../Timer/Timer';
import Products from '../Products/Products';
import NewArrival from '../Arrival/Arrival';
import Advertisement from '../Advertisement/Advertisement';

const Profile = () => {
  return (
    <>
      <Hero />
      <Todays />
      <Categories />
      <Month />
      <Timer />
      <Products />
      <NewArrival />
      <Advertisement />
    </>
  )
}

export default Profile