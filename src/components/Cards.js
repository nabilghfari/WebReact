import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check This Watame's Video!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem
                            src="/imagess/wtm7.jpg"
                            text="【歌枠】110万人目指して歌う！Singing till reach 1.1 million!!!【角巻わため/ホロライブ４期生】"
                            label="Watame Archive 1"
                            path="/archive"
                        />
                        <CardItem
                            src="/imagess/wtm6.jpg"
                            text="【スプラトゥーン２】今回も勝ちはいただくぜ！【角巻わため/ホロライブ４期生】"
                            label="Watame Archive 2"
                            path="/archive"
                        />
                        <CardItem
                            src="/imagess/wtm10.jpg"
                            text="【打ち上げ】＼たのしかった！運動会！／【角巻わため/ホロライブ４期生】"
                            label="Watame Archive 3"
                            path="/archive"
                        />
                    </ul>
                    <ul className="cards-items">
                        <CardItem
                            src="/imagess/wtm4.jpg"
                            text="【歌枠】"
                            label="Watame Moments 1"
                            path="/archive"
                        />
                        <CardItem
                            src="/imagess/wtm3.gif"
                            text="【スプラトゥーン２】"
                            label="Watame Moments 2"
                            path="/archive"
                        />
                        <CardItem
                            src="/imagess/wtm9.gif"
                            text="【打ち上げ】"
                            label="Watame Moments 3"
                            path="/archive"
                        />
                        <CardItem
                            src="/imagess/wtm5.jpg"
                            text="【スプラトゥーン２】"
                            label="Watame Moments 4"
                            path="/archive"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
