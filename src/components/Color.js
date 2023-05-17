import { FaAd, FaBookReader, FaClock, FaGraduationCap } from "react-icons/fa";
import img from './Images/picture3.jpg';
import img1 from './Images/edyoda_logo.png';
import img2 from './Images/picture4.jpg';

function Color() {
    return (
        <div class="bg-secondary">
            <div>
                <h2 class="fw-bold">ICON</h2>
                <img src={img2} alt="img" style={{ height: "80px", width: "180px", margin: "20px", color: "light" }} />
                <img src={img} alt="img" style={{ height: "80px", width: "80px", margin: "20px", color: "light" }} />
                <FaClock style={{ height: "60px", width: "60px", margin: "20px", color: "light" }}></FaClock>
                <br />
                <FaBookReader style={{ height: "60px", width: "60px", margin: "20px", color: "light" }}></FaBookReader>
                <FaGraduationCap style={{ height: "60px", width: "60px", margin: "20px", color: "light" }}></FaGraduationCap>
                <img src={img1} alt="img" style={{ height: "80px", width: "80px", margin: "20px", color: "light" }} />
                <br />
                <FaAd style={{ height: "60px", width: "60px", margin: "20px", color: "light", borderRadius: "100px" }}></FaAd>
                <FaClock style={{ height: "60px", width: "60px", margin: "20px", color: "light" }}></FaClock>

                <h2 style={{margin:"20px" }}>COLOUR</h2>
            
                <div class="row m-2">
                    <div class="bg-light text-dark" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "white" }}> 
                </div>
                    <div class=" text-white" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "gray" }}></div>
                    <div class=" text-white" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "white" }}></div>
                    <div class=" text-white" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "rgb(240, 240, 240)" }}></div>
                    
                    <div class="row " style={{marginTop:"20px"}}>
                        <div class=" text-dark" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "hsl(0, 100%, 50%)" }}></div>
                        <div class=" text-white" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "hsl(0, 20%, 50%)" }}></div>
                        <div class=" text-dark" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "rgba(255, 99, 71, 1)" }}></div>
                        <div class=" text-white" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "rgb(200, 200, 200)" }}></div>
                    
                    </div>
                    
                    <div class="row " style={{marginTop:"20px"}}>
                    <div class=" text-dark" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "MediumSeaGreen" }}> 
                </div>
                    <div class="bg-dark text-white" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "" }}></div>
                    <div class=" text-white" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "rgb(238, 130, 238)" }}></div>
                    <div class="bg-danger text-white" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "hsl(0, 60%, 50%)" }}></div>
                    
                    <div class="row " style={{marginTop:"20px"}}>
                        <div class="bg-info text-dark" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "blue" }}></div>
                        <div class="bg-primary text-white" style={{ height: "50px", width: "50px", marginLeft: "20px", backgroundColor: "blue" }}></div>
                    </div>
</div>

                    <h3>BACKGROUND</h3>
                    <h2 id="c1" style={{ height: "500px", width: "900px", marginLeft: "20px",text:"center" }}> </h2>
                </div>
            </div>
        </div>
    )
}
export default Color;