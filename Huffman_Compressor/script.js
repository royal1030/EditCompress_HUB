import { HuffmanCoder } from "./huffman.js";

// const leftContainer = document.getElementById("left-container");

// leftContainer.addEventListener("dragenter", (event) => {
//   event.preventDefault();
//   leftContainer.classList.add("drag-over");
// });

// leftContainer.addEventListener("dragleave", () => {
//   leftContainer.classList.remove("drag-over");
// });

// leftContainer.addEventListener("dragover", (event) => {
//   event.preventDefault();
// });

// leftContainer.addEventListener("drop", (event) => {
//   event.preventDefault();
//   leftContainer.classList.remove("drag-over");
//   const file = event.dataTransfer.files[0];
//   // Handle the dropped file here
// });

onload = function () {
  // Get reference to elements
  const treearea = document.getElementById("treearea");
  const encode = document.getElementById("encode");
  const decode = document.getElementById("decode");
  const temptext = document.getElementById("temptext");
  const upload = document.getElementById("uploadedFile");

  const coder = new HuffmanCoder();

  upload.addEventListener("change", () => {
    alert("File uploaded");
  });

  encode.onclick = function () {
    const uploadedFile = upload.files[0];
    if (uploadedFile === undefined) {
      alert("No file uploaded !");
      return;
    }
    // const fileReader = new FileReader();
    // fileReader.onload = function(fileLoadedEvent){
    //     const text = fileLoadedEvent.target.result;
    // if(text.length===0){
    //     alert("Text can not be empty ! Upload another file !");
    //     return;
    // }
    //     let [encoded, tree_structure, info] = coder.encode(text);
    //     downloadFile(uploadedFile.name.split('.')[0] +'_encoded.txt', encoded);
    //     treearea.innerText = tree_structure;
    //     treearea.style.marginTop = '2000px';
    // temptext.innerText = info;
    // };
    // fileReader.readAsText(uploadedFile, "UTF-8");

    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
      let text = fileLoadedEvent.target.result;
      if (text.length === 0) {
        alert("Text can not be empty ! Upload another file !");
        return;
      }
      let [encodedString, outputMsg] = coder.encode(text);
      myDownloadFile(
        uploadedFile.name.split(".")[0] + "_compressed.txt",
        encodedString
      );
      // treearea.style.marginTop = "2000px";
      temptext.innerText = outputMsg;

      //   ondownloadChanges(outputMsg);
    };
    fileReader.readAsText(uploadedFile, "UTF-8");
  };

  decode.onclick = function () {
    const uploadedFile = upload.files[0];
    if (uploadedFile === undefined) {
      alert("No file uploaded !");
      return;
    }
    // const fileReader = new FileReader();
    // fileReader.onload = function (fileLoadedEvent) {
    //   const text = fileLoadedEvent.target.result;
    //   if (text.length === 0) {
    //     alert("Text can not be empty ! Upload another file !");
    //     return;
    //   }
    //   let [decoded, tree_structure, info] = coder.decode(text);
    //   downloadFile(uploadedFile.name.split(".")[0] + "_decoded.txt", decoded);
    //   treearea.innerText = tree_structure;
    //   treearea.style.marginTop = "2000px";
    //   temptext.innerText = info;
    // };
    // fileReader.readAsText(uploadedFile, "UTF-8");

    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
      let text = fileLoadedEvent.target.result;
      if (text.length === 0) {
        alert("Text can not be empty ! Upload another file !");
        return;
      }
      let [decodedString, outputMsg] = coder.decode(text);
      myDownloadFile(
        uploadedFile.name.split(".")[0] + "_decompressed.txt",
        decodedString
      );
      // treearea.style.marginTop = "2000px";
      temptext.innerText = outputMsg;

      // ondownloadChanges(outputMsg);
    };
    fileReader.readAsText(uploadedFile, "UTF-8");
  };
};

// function downloadFile(fileName, data) {
//   let a = document.createElement("a");
//   a.href = "data:application/octet-stream," + encodeURIComponent(data);
//   a.download = fileName;
//   a.click();
// }
function myDownloadFile(fileName, text) {
  let a = document.createElement("a");
  a.href = "data:application/octet-stream," + encodeURIComponent(text);
  a.download = fileName;
  a.click();
}

/// changed dom when file is downloaded (step 3 complete)
// function ondownloadChanges(outputMsg) {
// 	step3.innerHTML = "";
// 	let img = document.createElement("img");
// 	img.src = "assets/done_icon3.png";
// 	img.id = "doneImg";
// 	step3.appendChild(img);
// 	var br = document.createElement("br");
// 	step3.appendChild(br);
// 	let msg3 = document.createElement("span");
// 	msg3.className = "text2";
// 	msg3.innerHTML = outputMsg;
// 	step3.appendChild(msg3);
// }
