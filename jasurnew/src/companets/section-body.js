import React from "react";
class SectionBody extends React.Component {
    // shotga campanentla yoziladi va  bu funcsiyan qogan joyda bemalol chaqirvose boldi...

    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h1>
                                    <span> Technocorp</span>  komandasida karyera!
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem aliquid debitis vitae earum dolor
                                    recusandae, quos doloribus rerum, officiis eius illum impedit nesciunt, minima animi magna
                                    m eos iste sed repellendus!Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem
                                    aliquid debitis vitae earum dolor recusandae, quos doloribus rerum, officiis eius illum impedit nesci
                                    unt, minima animi magnam eos iste sed repellendus!
                                </p>
                                <p>
                                    Lorem


 ipsum dolor sit amet consectetur adipisicing elit.Rem aliquid debitis vitae earum dolor
                                    recusandae, quos doloribus rerum, officiis eius illum impedit nesciunt, minima animi magnam eos
                                    iste sed repellendus!
                                </p>


                            </div>
                            <div className="col-6">
                                <img className="rightPic w-100" src="img/rightPic.svg"/>
                                <img  className="moveme" src="img/bg.svg" alt=""/>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

        )
    }

}
export default SectionBody;