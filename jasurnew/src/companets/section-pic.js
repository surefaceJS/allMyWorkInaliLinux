import React from "react";
class SectionPic extends React.Component {
    render(){
        return(
            <div >
                <div className="ones">
                    <img className="w-100"  src="img/footer-bg.svg" />
                    <div className="look d-flex flex-column justify-content-between">
                        <h2>Technocorp Jamosiga Qo'shilishga <br/> Tayyormisan?</h2>
                        <button className="btn btn-outline-success btn-lg w-25">Resume Yuborish</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default SectionPic;