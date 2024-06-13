"use client"

//values will have to be changed once write to publish method is set
const storeName = "cur_uuid"

//runs when a branch hook button is selected
const updatePanelSet = (branchHookId = this.id) => {
    //get data related with branch hook selected
    let obj = readFromLocalStorage()[branchHookId];

    //if error reading, log out error message
    if (obj.error) {
        let msg = obj.error;
        console.log(msg);
        return;
    }

    //runs if there is no data in branch (go to create)
    if (!obj.data || obj.data.length == 0) {
        //runs create page
        return;
    }
    let branchData = obj.data;

    //loads in new panels for images
    //sets the src of each image to new src
    document.querySelector("#first-img").src = branchData.images_paths[0];
    document.querySelector("#second-img").src = branchData.images_paths[1]
    document.querySelector("#third-img").src = branchData.images_paths[2];

    //puts in new branch hooks location (using x,y, and pan)
    //move button into correct panel div, then set x and y
    //would have absolute positioning through css ()
    //declares three hook vars
    let firstHook = document.querySelector(".first-branch-hook")
    let secondHook = document.querySelector(".first-branch-hook")
    let thirdHook = document.querySelector(".first-branch-hook");

    //checks what panel to put the hook in (TODO)

    //ex of adding into correct panel div and setting x and y 
    document.querySelector(".first-panel").appendChild(button);
    firstButton.style.left = x;
    button.style.bottom = y;

    //set up branch hooks to have childBranch id
    //change id of correlating branch hook buttons 


    //set up back button with parent branch id
    document.querySelector("#back-button").id = branchData.parentBranchId
}

//parses out json correlated with current branch id
export const readFromLocalStorage = () => {
    const string = localStorage.getItem(storeName);

    let json;
    try {
        json = JSON.parse(string);
        if (!json) throw new Error("json is null!");
    } catch (error) {
        console.log(`ERROR: ${error} with string: ${string}`);
        json = {};
    }

    return json;
}

export { updatePanelSet }