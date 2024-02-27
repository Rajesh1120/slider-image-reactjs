
import Image from "./Image";
import {useState} from "react";


 function Slider(){
    const [isImgClicked,setIsImgClicked]=useState(false)
    const [imageSelected,setImageSelected]=useState("")
    const [index,setIndex]=useState(0)

    const [fromImagetoSelected,setFromImagetoSelected]=useState([
        "deer.jpg",
        "elephant.jpg",
        "zebra.jpg",
        "tiger.jpg",
        "squirrel.jpg",
        "puppy.jpg",
        "panda.jpg",
        "groupofanimals.jpg"
    ])
    function handleClick(name,id){
        setImageSelected(name)
        setIndex(id)
        setIsImgClicked(true)
    }
    
    function handleNextImage(){

        console.log(index)
        if (index > -1 && index < fromImagetoSelected.length - 1) {
            setImageSelected(fromImagetoSelected[index + 1 ]);
            setIndex(index + 1)
            console.log(index) 
            
        }
        
        
    }
    function handlePrevImage(){
        console.log(index)
        
        if (index > 0 && index < fromImagetoSelected.length){
            setImageSelected(fromImagetoSelected[index - 1])
            setIndex(index - 1)
        }
        
    
    }

    return (
        <div>
            <div className="slider">
            {!isImgClicked? <h4>   Click the Image.....! </h4>:null}
            {isImgClicked ?
                <div className="btn">
                    {!(index <=0) ? <button onClick={handlePrevImage} id="prevbtn">Prev</button>:null}
                    {!(index > fromImagetoSelected.length-2)?<button id="nextbtn" onClick={handleNextImage}>Next</button> :null}
                    <img className="imgwh" src={require(`../src/assets/${imageSelected}`)} alt={imageSelected}/>
                </div> : null }
            </div>
            
            <div className="animals">
                <button onClick={() => handleClick("deer.jpg",0)}><Image image="deer.jpg" /></button>
                <button onClick={() => handleClick("elephant.jpg",1)}><Image image="elephant.jpg"/></button>
                <button onClick={() => handleClick("zebra.jpg",2)}><Image image="zebra.jpg" /></button>
                <button onClick={() => handleClick("tiger.jpg",3)}><Image image="tiger.jpg"/></button>
                <button onClick={() => handleClick("squirrel.jpg",4)}><Image image="squirrel.jpg" /></button>
                <button onClick={() => handleClick("puppy.jpg",5)}><Image image="puppy.jpg" /></button>
                <button onClick={() => handleClick("panda.jpg",6)}><Image image="panda.jpg" /></button>
                <button onClick={() => handleClick("groupofanimals.jpg",7)}><Image image="groupofanimals.jpg" /></button>
            </div>
        </div>
    )
}
export default Slider;