document.addEventListener("DOMContentLoaded", () => {
  const buttonLink = document.getElementById("btnLink");
  const buttonCV = document.getElementById("button-cv");
  const buttonproject1 = document.getElementById("btn-project1");
  const buttonproject2 = document.getElementById("btn-project2");

  buttonLink.addEventListener("click", () => {
    window.location.href =
      "https://www.linkedin.com/in/luis-arturo-dominguez-alatorre";
  });

  buttonCV.addEventListener("click", () => {
    const openCV = document.createElement("a");
    openCV.href = `${window.location.origin}${window.location.pathname.replace(/\/$/, "")}/assets/cv/curriculum.pdf`;
    openCV.target = "_blank";
    openCV.click();
  });

  buttonproject1.addEventListener("click", () => {
    window.location.href =
      "https://github.com/iArthurDev/proyectoGestorDeProyectos.git";
  });

  buttonproject2.addEventListener("click", () => {
    window.location.href = "https://github.com/iArthurDev/presupuesto-app.git";
  });
});
