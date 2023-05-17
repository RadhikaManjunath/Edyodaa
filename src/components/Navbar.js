import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from './Images/picture3.jpg';
import img1 from './Images/edyoda_logo.png';

import { FaAd, FaBookOpen, FaClock, FaGraduationCap, FaRupeeSign, FaSearch } from "react-icons/fa";

function Navbar() {
    return (
        <div >
            <nav class="navbar bg-light">
                <div class="navbar-brand ms-5 text-center text-dark col-md-2" id="c2" href="/CreateStudent">        
                 <img src={img1} alt='img' style={{height:"80px",width:"80px",margin:"20px",color:"light"}}/>
                </div>


                <div class="nav-link text-center text-dark col-md-1 " href="/CreateStudent">Courses</div>
                <div class="nav-link text-center text-dark col-md-1 " href="/CreateStudent">Program</div>
                <div class="col-md-2"></div>
                <FaSearch class="flogo bg-light ms-2 center"></FaSearch>
                <div class="nav-link text-center text-dark col-md-1 " href="/CreateStudent">Log In</div>
                <div><button class="bg-primary  text-light " >JOIN NOW</button></div>
            </nav >
            <div id="c1">

                <div class="row " id="c1">
                    <div class="col-md-6">
                        <div style={{ height: "100vh",marginTop:"50px" }}>

                            <h3 className='ms-5  text-light fw-bold'>Access curated courses worth </h3> <br />
                            <h3 class=" text-light" ><strike><FaRupeeSign class="flogo fw-bold text-light  ms-5 center"></FaRupeeSign> 18500</strike> at just <FaRupeeSign class="flogo text-light  ms-2 center"></FaRupeeSign> 99 per year!</h3>
                            <br />


                            <FaBookOpen class="flogo  text-light ms-5  center"></FaBookOpen>
                            <span className='p-3  text-light'> <span class="text-primary">100+ </span> Job relavant Courses</span> <br />
                            <br/>

                            <FaClock class="flogo  text-light   ms-5 center"></FaClock>
                            <span className='p-3  text-light'> <span class="text-primary">20,000+ </span> Hours of content</span><br />
                            <br />

                            <span className='p-3  text-light'>   <img src={img} alt="img" style={{height:"50px",width:"50px"}}></img></span>

                            <FaGraduationCap class="flogo  text-light ms-5 center"></FaGraduationCap>
                            <span className='p-3 text-light'>Scholership  worth <span class="text-primary"> <FaRupeeSign class="flogo  ms-2 center"></FaRupeeSign> 94,500 </span></span><br />
                            <br />

                            <FaAd class="flogo  text-light  ms-5 center"></FaAd>
                            <span className='p-3  text-light'> Ad free learning experiwnse</span><br />
                        </div>
                    </div>
                    <div class=" card col-md-6 " style={{height:"500px",width:"400px", marginTop:"50px"}}>




                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
