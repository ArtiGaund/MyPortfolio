import React from 'react';

const BiographyModal = ({setShowBio}) => {
    return (
       <div className={`${!setShowBio ? "active" : ""} show`}>
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                        <h1 className="form-heading">Edit/Update Biography</h1>
                        <label>Biography</label>
                        <input 
                        type="text"
                        name="biograpgy"
                        className="login-box"
                        />
                        <br></br>
                        <input type="submit" value="SUBMIT" className="submit-button"/>
                    </form>
                </div>
            </div>
       </div>
    );
};


export default BiographyModal;