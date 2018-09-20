import React, { Component } from "react";
import AdventureRow from "./AdventureRow";

export default class Adventures extends Component {
  render() {
    return (
      <div className={'ContainerDiv'} id={'AdventureContainer'}>
        <AdventureRow header={"Seattle"}
                      text={"This summer I worked for Liberty Mutual Insurance out in Seattle, WA. I am crazy enough " +
                      "to have driven there! I actually went out of my way to make sure they placed me in the Seattle " +
                      "office even though they have offices in MA and NH because I wanted to explore the West Coast " +
                      "for the first time in my life, and I can say now that I made the right decision. I made so many " +
                      "friends being an intern, and we always kept ourselves busy in the weekends or weekdays. I spent " +
                      "every weekday rock climbing and working out at Seattle Bouldering Project where I continued my hobby, " +
                      "climbing a V5 for the first time in my life (I haven't been able to do any since...). During the " +
                      "weekends we either went out, or went hiking through the beautiful mountains of the Pacific " +
                      "Northwest. A friend came and visited me and we hiked up a decent way on Mount Rainier, the 14,000 ft " +
                      "giant that overlooks the city on a clear day. Hiking there was my favorite memory; we felt like we " +
                      "were in the Lord of the Rings universe. The constant views of mountain ranges throughout the city " +
                      "were something I adored, and can't find anywhere on the east coast."}
                      photo={require("../images/rainierfocus.jpg")}
                      padding={'75px'}>
        </AdventureRow>
        <AdventureRow header={"Cross-Country"}
                      text={"To get to my Summer internship, I decided to try driving across the country. From Massachusetts " +
                      "to Seattle. I pretty much drove the entire I-90 West road. Along the way I crashed in Ohio, Iowa, The " +
                      "Badlands in South Dakota, and a farm in Montana. I've always wanted an excuse to do a road trip and this " +
                      "was the best excuse ever. My favorite part was driving through the Rockies and Montana - the East Coast " +
                      "just doesn't have nearly as massive, ice-capped mountains. It was beautiful. I kept myself occupied by " +
                      "blasting music in my car and singing along almost the entire way there. I tried podcasts but it just " +
                      "didn't do for me."}
                      photo={require("../images/Montana.jpg")}/>
        <AdventureRow header={"Peru"}
                      photo={require("../images/peruvianMtn.jpg")}
                      text={"In the Summer of May 2018, me and two friends travelled" +
                      "across the world to Cusco, Peru, to hike through the Andes Mountains " +
                      "and end up at Machu Picchu. We flew out from Boston Logan Airport" +
                      "to Miami, Florida, where we then connected to a flight going to Lima, Peru." +
                      "From there, we stayed in a hostel for 4 hours of rest and then made our way back to the airport" +
                      "to go to Cusco, Peru. From there we asked a few taxi divers to take us to 'El Camino de Salkantay'." +
                      "The Salkantay Trek. We got denied a few times since the drive was 2-3 hours away, but " +
                      "one brave soul took us up on our offer. After negotiating, we ended up paying around what's worth" +
                      "50 american dollars for the 2 hour drive into the mountainous region near the trail head. " +
                      "From there, we realized we had to take another, more treacherous 1-hour ride to the trail head." +
                      " This ride took use through the rocky and narrow mountain passes where our taxi would honk his horn " +
                      "to alert anyone coming around a cliff-side that if they didn't stop, we would both surely die. " +
                      "After we got to the trail-head, we immediately started our hike at 12,000 feet at the equator of the " +
                      "earth. Without any acclimation, we started up a trail and ended up at a beautiful glacier-water lake " +
                      "that was overlooked by a beautiful snow-covered mountain peak. Unfortunately, this was not the way to " +
                      "el Camino de Salkantay. We went up the wrong path, huffing and coughing up the way with our 40-lb " +
                      "packs on our back. We went down the trail and a local guide told us it was too late to go down the " +
                      "right path for if we were, we would end up 16,000 ft when the sun sets, and would freeze trying to sleep. " +
                      "We ended up staying there for the night, still a brutally cold one. The next day we woke up to mist " +
                      "creeping through the mountain peaks creating a gigantic effect on us. The hike ahead of us was the most " +
                      "gruelling hike I have ever experienced. With our packs on, now with extra food and water, we hiked nearly " +
                      "straight up into the ice-capped Andes mountains to 16,000 ft elevation, with the beautiful Salkantay " +
                      "mountains encompassing us. Breathing was impossible. Towards the top we would make 100-200ft of progress, " +
                      "stop and take a breather for 2 minutes, and continue: over a dozen times. We were rewarded with " +
                      "the sight of the most beautiful mountains any of us have ever seen. The snow-capped Andes mountains " +
                      "in their full glory with only a few clouds (and only at the peaks for a dramatic effect) in sight " +
                      "stunned all three of us like never before. It looked fake. Everywhere we looked, it seemd we " +
                      "were in a movie, a video game, a simulation, a green-screen. This was the best part of the trip " +
                      "that I will never forget."}
                      padding={'75px'}/>
      </div>
    );
  }
}