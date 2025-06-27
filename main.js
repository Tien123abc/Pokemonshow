const container = document.getElementById("container");

let baseUrl ="https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";


  //Tạo phần tử mới
//const newImg = document.createElement("img");
//newImg.src=`${baseUrl}${i}.png`;
//Thêm phần tử con vào container
//container.appendChild(newImg);
for(let i = 1;i<=150;i++){
  const newDiv = document.createElement("div");
  //Thêm div vào cuối container
  //lấy node mới tạo ra gán cho parentID
  const parentDiv = container.appendChild(newDiv);
  //Tạo phần tử con thêm vào trong parentDiv
  const newImg = document.createElement("img");
  newImg.src=`${baseUrl}${i}.png`;
  //Thêm vào trong khối div
  parentDiv.appendChild(newImg);

  const newSpan = document.createElement("span");
  newSpan.innerText = `Pokemon #${i}`;
  parentDiv.appendChild(newSpan);

}