import Image from "next/image";

//
//imported base trunk panels as static images
import baseFirstPanel from "../../../public/comic-panels/first_panel.png";
import baseSecondPanel from "../../../public/comic-panels/second_panel.png";
import baseThirdPanel from "../../../public/comic-panels/third_panel.png";

//importing functions
import {updatePanelSet} from "@/scripts/Read.js"

//set the base trunks to display by default on read
const Read = ({ firstPanelImage = baseFirstPanel, secondPanelImage = baseSecondPanel, 
    thirdPanelImage = baseThirdPanel }) => {
    return (<>
        <div id="comic-panels">
            <div id="1" className="first-panel">
                <Image id="first-img" src={firstPanelImage} alt="" width={900} height={600}/>
            </div>
            <div id="2" className="second-panel">
                <Image id="second-img" src={secondPanelImage} alt="" width={900} height={600}/>
            </div>
            <div id="3" className="third-panel">
                <Image id="third-img" src={thirdPanelImage} alt="" width={900} height={600}/>
            </div>
        </div>
        <div id="branch hooks">
            {/* updatePanelSet will need to get button id somehow (id will be replaced with child branch ids) */}
            <button id="first-branch-id" className="1-branch-hook" onClick={updatePanelSet}>Branch 1</button>
            <button id="second-branch-id" className="2-branch-hook" onClick={updatePanelSet}>Branch 2</button>
            <button id="third-branch-id" className="3-branch-hook" onClick={updatePanelSet}>Branch 3</button>
        </div>
        <button id="back-button" onClick={updatePanelSet}>Back</button>
    </>);
}

export default Read