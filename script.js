let main = document.createElement("main");
main.className = "container";

document.body.prepend(main);

let projectName = document.createElement("h1");
projectName.innerHTML = "let's do it";
main.append(projectName);

let listBlock = document.createElement("div");
listBlock.className = "mainBlock";
main.append(listBlock);

let firsDiv = document.createElement("div");
listBlock.append(firsDiv);

let texIn = document.createElement("input");
texIn.className = "texIn";
texIn.setAttribute("placeholder", "иштерди жаз...");
firsDiv.append(texIn);

let setDate = document.createElement("input");
setDate.className = "setDate";
setDate.setAttribute("type", "date");
firsDiv.append(setDate);

let addBtn = document.createElement('button');
addBtn.innerHTML = 'ADD';
addBtn.id = 'AddBtn';
firsDiv.append(addBtn);