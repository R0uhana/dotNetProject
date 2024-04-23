import Separator from "./Separator";
import InsertImages from "./InsertImages";
import TextBox from "./TextBox";

const Home = () => {


    const textContent = [
        {
            title : "Vacation where you're comfortable",
            id: 1,
            body : "There's never been a more important time to work with a travel advisor on vacation and travel itineraries. Get out and explore the world's amazingly diverse experiences with the safety and security of knowing an advisor is available before, during, and after your vacation.",
            footer : "Make the most of your vacation this year with an advisor in your corner. From the latest information on travel restrictions to destination assistance complete with planning for safety and the added logistics of travel at this time, FlyHigh Agency advisors are available to help you navigate travel that is comfortable for you."
        },
        {
            title: "Your Journey, Your Way",
            id: 2,
            body : "Our experienced travel advisors keep up to date with the latest travel guidance and restrictions, travel trends, and destination hotspots, and are available to offer advice, inspiration, and information to help plan for your next trip. But most of all, we listen - because we know that every traveler wants to experience something different - a unique experience just for you.",
            footer : "We'll design your perfect travel experience, by leveraging our extensive range of local and global travel suppliers, partnerships, and industry-only accessible amenities you can't find on your own."
        }
    ]

    return (
        <div>
            
            <div className="randText">
                <div className="introtitle">

                    <h1 className="h2">
                        Welcome to <br />
                        <span className="span1">Blue</span><span className="span2">Horizon</span>
                    </h1>
                </div>

                <div className="introbody">
                    <p className="ph5">For Travelers who expect more, BlueHorizon Agency specializes in 
                        designing tailored vacation and travel experiences to make 
                        your travel dreams a reality</p> 

                    <p>From weekend getaways to extended, family-focused itineraries and
                        luxury escapes when you book with BlueHorizon Agency, you'll enjoy
                        the same level of exemplary service and value you've come to expect.</p>

                    <p>When you book your holiday through BlueHorizon Agency, you'll enjoy 
                        the benefits of our global buying power and extensive partnerships
                        which deliver exceptional value and access to unique travel
                        'perks' - making every holiday experience an unforgettable one.</p>
                     
                </div>
            </div>

            <Separator text="Design Your Dream Vacation Today"/>

            <InsertImages images={[{path:"couple.jpg", id:1}, {path:"fundrink.jpg",id:2}]}/>

            <TextBox text = {textContent[0]} />

            <img src={require("./img/famroadtrip.png")} alt="" className="imgSeparator"/>

            <TextBox text = {textContent[1]} />

            
        </div>
    );
}

export default Home;