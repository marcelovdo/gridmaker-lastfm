import React from "react";

function ImageList(props) {
    const {imageList} = props;
    
    const imagesMarkup = imageList.map((imageSrc, i) => {
        return (<li key={i}><img src={imageSrc} /></li>);
    });

    return (
        <ul>
            {imagesMarkup}
        </ul>
    );
}

export default ImageList;
