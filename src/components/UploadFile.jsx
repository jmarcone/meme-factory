import React from "react";

const UploadFile = ({ setSelectedFile, selectedFile }) => {


    const changeHandler = (event) => {
        // setSelectedFile(event.target.files[0]);
        // setIsFilePicked(true);
        const img = new Image();
        const url = URL.createObjectURL(event.target.files[0]);
        
        img.onload = function () {
            console.log("updating");
             setSelectedFile({ 
                'url': URL.createObjectURL(event.target.files[0]), 
                size: {
                    width: this.width,
                    height: this.height
                }
            })
        }

        img.src = url;
    };

    return (
        <div className="ui input">
            <input type="file" name="file" onChange={changeHandler} />
        </div>
    );
}

export default UploadFile;