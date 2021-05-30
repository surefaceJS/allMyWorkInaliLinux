import React from "react";
import imge1 from "../images/Rectangle 32.svg";
const salom = (props) => {
    // shotga campanentla yoziladi va  bu funcsiyan qogan joyda bemalol chaqirvose boldi...

    const changes = [
        {pic: {imge1}, sometext: "Markazimiz hodimining katta yutug’i"}
    ]




        return (
            <div>


                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">
                                    {changes.pic}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )


}
export default salom;