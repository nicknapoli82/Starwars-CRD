// Really this is only to keep up with my vanilla JS skill
// And for a fun little joke :)

export const stubbornOldMan = ()=> {
  const obi = document.createElement("div");
  obi.id = 'obi';
  obi.innerText = "Waves hand: These are not the droids you are looking for";

  obi.style.width = "100%";
  obi.style.border = "solid black 5px";
  obi.style.backgroundColor = "red";
  obi.style.textAlign = 'center';
  obi.style.fontSize = "2em";
  obi.style.opacity = "1";
  document.body.appendChild(obi);
  window.setTimeout(updateObiText, 2000);
};

function updateObiText () {
  const obi = document.getElementById("obi");
  const subConstant = 1 / 120;
  const obiInterval = window.setInterval(updateObiAlpha, 32);
  obi.innerText = "Refusal_to_be_deleted()=>{'......... Accepted'}";

  function updateObiAlpha() {
    obi.style.opacity = (Number(obi.style.opacity) - subConstant).toString();
    if (obi.style.opacity <= 0) {
      document.body.removeChild(obi);
      window.clearInterval(obiInterval);
    }
  };

  return updateObiAlpha();
}



// Waves hand: These are not the droids you are looking for
//             Refusal_to_be_deleted()=>{return('......... Accepted')}
