import React, { useEffect } from 'react'
import BidingList from '../../components/BidingList';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/auth';
import HeroSection from '../../components/HeroSection';


const AppIndex = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(auth);
    dispatch(setUser({isSeller: true}))
    
  }, []);

    return (
        <section className="home-page">
          <HeroSection />
        </section>
    )
}

export default AppIndex;