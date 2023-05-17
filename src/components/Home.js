import Color from "./Color";
import Navbar from "./Navbar";
function Home()
{
    return(
    <div class="bg-dark">
        <Navbar style={{height:"600px",width:"600px"}}/>
        <Color style={{height:"600px",width:"600px"}}/>
    </div>
    )
}
export default Home;