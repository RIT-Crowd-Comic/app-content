import Image from "next/image";

//imported base trunk panels as static images
import baseFirstPanel from "../../../public/comic-panels/first_panel.png";
import baseSecondPanel from "../../../public/comic-panels/second_panel.png";
import baseThirdPanel from "../../../public/comic-panels/third_panel.png";

//importing functions
import {updatePanelSet} from "@/scripts/Read.js"

//set the base trunks to display by default on read
//move out of read() and put in before return?
const Read = ({ firstPanelImage = baseFirstPanel, secondPanelImage = baseSecondPanel, 
    thirdPanelImage = baseThirdPanel }) => {
    return (<>
        <div id="comic-panels">
            <div className="first-panel">
                <Image id="first-img" src={firstPanelImage} alt="" width={900} height={600}/>
            </div>
            <div className="second-panel">
                <Image id="second-img" src={secondPanelImage} alt="" width={900} height={600}/>
            </div>
            <div className="third-panel">
                <Image id="third-img" src={thirdPanelImage} alt="" width={900} height={600}/>
            </div>
        </div>
        <div id="branch hooks">
            <button id="first-branch-id" className="first-branch-hook" onClick={updatePanelSet}>Branch 1</button>
            <button id="second-branch-id" className="second-branch-hook" onClick={updatePanelSet}>Branch 2</button>
            <button id="third-branch-id" className="third-branch-hook" onClick={updatePanelSet}>Branch 3</button>
        </div>
        <button id="back-button">Back</button>
    </>);
}

export default Read