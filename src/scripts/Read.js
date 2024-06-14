"use client"

//values will have to be changed once write to publish method is set
const storeName = "cur_uuid"

//runs when a branch hook button is selected
const updatePanelSet = (branchHookId) => {
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
    document.querySelector("#second-img").src = branchData.images_paths[1];
    document.querySelector("#third-img").src = branchData.images_paths[2];

    let hook;
    //move button into correct panel div, then set x and y
    for (let i = 0; i < branchData.branches.length; i++) {
        //checks what panel to put the hook in and append it to that panel div
        hook = document.querySelector(`.${i}-branch-hook`);
        document.querySelector(`#${branches[i].pan}`).appendChild(hook);

        //sets x and y of button
        hook.style.left = x;
        hook.style.bottom = y;

        //set up branch hooks to have childBranch id
        hook.id = branches[i].child_branch_uuid;
    }


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