
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if (htmlElement.children){
    Array.from(htmlElement.children).forEach( child => 
      {htmlElement.removeChild(child)})
  }

  const paragraph = document.createElement("p");
  paragraph.innerHTML = string;
  htmlElement.appendChild(paragraph);
};

htmlGenerator('Party Time.', partyHeader);