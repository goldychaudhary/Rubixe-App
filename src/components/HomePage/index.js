
import {Component} from 'react'
import {AiOutlineTrademarkCircle} from 'react-icons/ai'
import Navbar from '../Navbar'
import BannerSection from '../BannerSection'
import Form from '../Form'
import Footer from '../Footer'
import './index.css'


class HomePage extends Component {

    renderAboutUsSection = () => (
         <div className='about-container'>
            <div className='about-content'>
                <h1 className='section-heading'>WHO WE ARE</h1>
                <p>
                Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). 
                <br/>
                <br/>
                Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.
                </p>
            </div>
            <div className='about-pic-container'>
               
                <img className="aboout-us-pic" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" alt="about-us"/>
                <div className="empty-div"></div>
            </div>
         </div>

    )

    renderWhereWeStartedSection = () => (
        <div className="where-started-main-bg">
            <div className= "ws-header">
                <h1 className='section-heading'>WHERE WE STARTED</h1>
                <p>
                We started in 2015, providing technology solutions based in the Netherlands, founders of Rubixe™ have gained expertise in cutting-edge technology like- Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT), through delivering several smart city solutions for European Commission (EC) projects.
                </p>
            </div>
            <div className="ws-lower">
                <h1 className='section-heading'>TECH FOR TEENS - A RUBIXE <span >
                  <AiOutlineTrademarkCircle  className='trademark-icon'/>
                </span> INITIATIVE</h1>
                <div className='div1-whole'>
                    <div className='div2-box'>
                        <div className='div3-box'>
                            <img src="https://res.cloudinary.com/goldy-ccbp-tech/image/upload/v1676053350/Screenshot_2023-02-10_at_11.50.58_PM_cwuixf.png" alt="div-pic"/>
                       <p>Introducing AI to children in an age appropriate manner.</p>
                        </div>
                    </div>
                </div>
                <div className='div1-revert-whole'>
                    <div className='div2-revert-box'>
                        <div className='div3-revert-box'>
                            
                       <p>Gain awareness on AI and build an Interactive story around it</p>
                       <img src="https://res.cloudinary.com/goldy-ccbp-tech/image/upload/v1676053511/Screenshot_2023-02-10_at_11.54.22_PM_i7bnfb.png" alt="div-pic"/>
                        </div>
                    </div>
                </div>
                <div className='div1-whole orange'>
                    <div className='div2-box orange2'>
                        <div className='div3-box'>
                            <img src="https://res.cloudinary.com/goldy-ccbp-tech/image/upload/v1676053630/Screenshot_2023-02-10_at_11.56.26_PM_nkicwc.png" alt="div-pic"/>
                       <p>Acquire programming skills in a user-friendly format</p>
                        </div>
                    </div>
                </div>
                <div className='div1-revert-whole green'>
                    <div className='div2-revert-box green2'>
                        <div className='div3-revert-box'>
                       <p>Exposure to mini projects on diverse topics</p>
                        <img src="https://res.cloudinary.com/goldy-ccbp-tech/image/upload/v1676053841/Screenshot_2023-02-10_at_11.59.53_PM_eexgpk.png" alt="div-pic"/>
                        </div>
                    </div>
                </div>
                <div className='div1-whole yellow'>
                    <div className='div2-box yellow2'>
                        <div className='div3-box'>
                            <img src="https://res.cloudinary.com/goldy-ccbp-tech/image/upload/v1676053959/Screenshot_2023-02-11_at_12.02.03_AM_d6z7ay.png" alt="div-pic"/>
                       <p>Train the teachers programme</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )

    render(){
        return (
            <div className="homepage-main-bg">
            <Navbar />
            <BannerSection />
            {this.renderAboutUsSection()}
            {this.renderWhereWeStartedSection()}
            <Form />
            <Footer />
            </div>
            
        )
    }
}

export default HomePage