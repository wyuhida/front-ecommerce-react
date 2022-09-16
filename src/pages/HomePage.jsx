import React, { Component, Fragment } from 'react'
import NavMenuMobile from '../components/common/NavMenuMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProduct from '../components/home/FeaturedProduct'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'
import HomeTopMobile from '../components/home/HomeTopMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import axios from 'axios'
import AppURL from '../api/AppURL'

export class HomePage extends Component {
  
  componentDidMount(){
    window.scroll(0,0)
    this.GetVisitorDetails()
  }

  GetVisitorDetails = () => {
    axios.get(AppURL.VisitorDetails).then().catch()
  }


  render() {
    return (
      <Fragment>

        <div className='Desktop'>
          <NavMenuDesktop />
          <HomeTop />
        </div>

        <div className='Mobile'>
          <NavMenuMobile />
          <HomeTopMobile />
        </div>

        <FeaturedProduct />
        <NewArrival />
        <Collection />
        <Categories />
        

        <div className='Desktop'>
          <FooterDesktop />
        </div>

        <div className='Mobile'>
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default HomePage
