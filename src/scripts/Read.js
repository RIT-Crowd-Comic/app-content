//runs when a branch hook button is selected
//should take in new
const updatePanelSet = () => {
    //get data related with branch hook selected
    //loadPanelSetJSON();

    //loads in new panels for images
    
    //puts in new branch hooks location (using x,y)

    //set up branch hooks to have childBranch id

    //
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

//parses out json correlated with branchId
const readPanelSetJSON = (branchId) => {
    //     const json = //     const string = localStorage.getItem(storeName);
    //     let json;
    //     try {
    //         json = JSON.parse(string);
    //         if (!json) throw new Error("json is null!");
    //     } catch (error) {
    //         console.log(`ERROR: ${error} with string: ${string}`);
    //         json = {};
    //     }
    //     return json;
    //     console.log(`Calling readFromLocalStorage(${key}) with value=${json[key]}`);
    //     return json[key];
}

export { updatePanelSet }