"use client"

//
const storeName = "cur_uuid"

//runs when a branch hook button is selected
const updatePanelSet = (branchHookId) => {
    //get data related with branch hook selected
    obj = readFromLocalStorage()[branchHookId];

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
    
    //puts in new branch hooks location (using x,y, and pan)
    //

    //set up branch hooks to have childBranch id
    //change id of correlating branch hook buttons 

}

//ex of structure
// cur_uuid: {
//     parentBranchId: "uuid",
//     panels: [
//       {
//         imgPath: ".\path to image",
//         pan: 0,
//         position: {
//           x: 0,
//           y: 0
//         },
//         childBranch: randomUUID()
//       },
//       {
//         imgPath: ".\path to image",
//         pan: 0,
//         position: {
//           x: 0,
//           y: 0
//         },
//         childBranch: randomUUID()
//       },
//       {
//         imgPath: ".\path to image",
//         pan: 0,
//         position: {
//           x: 0,
//           y: 0
//         },
//         childBranch: randomUUID()
//       }
//     ]
//   };

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
    //test
    console.log(`Calling readFromLocalStorage(${key}) with value=${json[key]}`);

    return json;
}

export { updatePanelSet }