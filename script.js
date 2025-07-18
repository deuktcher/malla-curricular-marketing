document.addEventListener("DOMContentLoaded", () => {
  const materias = document.querySelectorAll(".materia");
  const creditosContador = document.getElementById("total-creditos");

  let totalCreditos = 0;

  function actualizarEstadoMaterias() {
    materias.forEach(materia => {
      const prerequisitos = materia.dataset.prerrequisitos.split(",").map(p => p.trim()).filter(p => p);
      if (prerrequisitos.length > 0) {
        const todosAprobados = prerequisitos.every(nombre =>
          [...materias].some(m => m.textContent.trim() === nombre && m.classList.contains("aprobada"))
        );
        materia.classList.toggle("bloqueada", !todosAprobados);
      }
    });
  }

  materias.forEach(materia => {
    const prerequisitos = materia.dataset.prerrequisitos;
    if (prerrequisitos) {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = `Prerrequisito(s): ${prerequisitos}`;
      materia.appendChild(tooltip);
    }

    materia.addEventListener("click", () => {
      if (materia.classList.contains("bloqueada")) {
        alert("No puedes aprobar esta materia aún. Verifica los prerrequisitos.");
        return;
      }

      materia.classList.toggle("aprobada");

      const creditos = parseInt(materia.dataset.creditos);
      if (materia.classList.contains("aprobada")) {
        totalCreditos += creditos;
      } else {
        totalCreditos -= creditos;
      }

      creditosContador.textContent = totalCreditos;
      actualizarEstadoMaterias();
    });
  });

  actualizarEstadoMaterias();
});
