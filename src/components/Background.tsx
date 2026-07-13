/* REPLACE ENTIRE FILE */
/* src/components/Background.tsx */

import "./Background.css";


export default function Background(){

    return(

        <div className="bg">


            <div className="bg-grid"/>


            <div className="blob blob-1"/>

            <div className="blob blob-2"/>


            <div className="glow glow-left"/>

            <div className="glow glow-right"/>



            <div className="stars">

                {
                    Array.from({length:30}).map((_,i)=>(

                        <span
                            key={i}
                            className="star"
                            style={{
                                left:`${Math.random()*100}%`,
                                top:`${Math.random()*100}%`,
                                animationDelay:`${Math.random()*5}s`
                            }}
                        />

                    ))
                }

            </div>



        </div>

    );

}