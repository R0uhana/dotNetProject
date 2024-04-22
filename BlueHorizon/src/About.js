import InsertImages from "./InsertImages";
import TextBox from "./TextBox";

const About = () => {
    const textContent = [
        {
            title: "About FlyHigh Agency",
            id: 1,
            body: "FlyHigh Agency specializes in designing tailored vacation experiences and exclusive extras at an exceptional value.",
            footer: "When you book your holiday through FlyHigh Agency, you'll enjoy the benefits of our global buying power and extensive partnerships which deliver exceptional value and access to unique travel 'perks' - making every holiday experience an unforgettable one."
        },
        {
            title: "Tailored holiday experiences for every style and budget",
            id: 2,
            body: "The expert travel advisors at FlyHigh Agency have every vacation style, budget and experience covered. Our customers enjoy tailor-made travel experiences at exceptional value by leveraging our global supplier negotiations and experienced professional travel teams. Our travel advisors combine first-hand travel experience with first-class industry knowledge, ensuring your vacations are planned and delivered with ease, efficiency and accuracy."
        },
        {
            title: "Luxury escapes with FlyHigh Agency",
            id: 3,
            body: "As a FlyHigh Agency customer, you'll also enjoy access to extraordinary travel upgrades and premium products that most travel agencies simply cannot provide.",
            footer: "Through our invitation-only membership of the Virtuoso travel network, we partner with more than 1,800 of the world's best hotels, cruise lines and tour operators to deliver superior vacation experiences for our discerning customers. From bespoke travel itineraries, unique travel experiences, value-added extras, complimentary perks and VIP treatment, your vacation with FlyHigh Agency is guaranteed to deliver long-lasting memories."
        }
    ]
    return (

        <div className="header">
            <TextBox text={textContent[0]} />
            <InsertImages images={[{ path: "couplelaugh.jpg", id: 1 }, { path: "couplewalking.jpg", id: 2 }]} />
            <TextBox text={textContent[1]} />
            <div className="videoBox">
                <video src={require("./img/sevenwonders.mp4")} autoPlay controls muted></video>
            </div>
            <TextBox text={textContent[2]} />
        </div>
    );
}

export default About;