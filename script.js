
document.addEventListener("DOMContentLoaded", () => {
    const aplicacion = document.getElementById("aplicacion");

    
    const etapas = [
        `<div class="etapa-1">

            <h2>Paso 1: Datos básicos del envío</h2>

            <form id="formulario-etapa1">

                <div class="mb-3">

                    <label for="dimensiones" class="form-label">Dimensiones (cm)</label>

                    <input type="text" class="form-control" id="dimensiones" placeholder="Ejemplo: 30x20x10" required>

                </div>

                <div class="mb-3">

                    <label for="peso" class="form-label">Peso (kg)</label>

                    <input type="number" class="form-control" id="peso" placeholder="Ejemplo: 5" required>

                </div>

                <div class="mb-3">

                    <label for="codigo-origen" class="form-label">Código Postal de Origen</label>

                    <input type="text" class="form-control" id="codigo-origen" placeholder="Ejemplo: 01000" required>

                </div>

                <div class="mb-3">

                    <label for="codigo-destino" class="form-label">Código Postal de Destino</label>

                    <input type="text" class="form-control" id="codigo-destino" placeholder="Ejemplo: 02000" required>

                </div>

                <button type="button" class="btn btn-primary" id="boton-siguiente">Siguiente</button>

            </form>

        </div>`,

        `<div class="etapa-2">

            <h2>Paso 2: Opciones de envío</h2>

            <form id="formulario-etapa2">

                <p>Selecciona una opción de envío:</p>

                <div class="form-check">

                    <input class="form-check-input" type="radio" name="opcion-envio" id="opcion-estafeta" value="Estafeta" required>

                    <label class="form-check-label" for="opcion-estafeta">Estafeta</label>

                </div>

                <div class="form-check">

                    <input class="form-check-input" type="radio" name="opcion-envio" id="opcion-dhl" value="DHL" required>

                    <label class="form-check-label" for="opcion-dhl">DHL</label>

                </div>

                <div class="form-check">

                    <input class="form-check-input" type="radio" name="opcion-envio" id="opcion-fedex" value="FedEx" required>

                    <label class="form-check-label" for="opcion-fedex">FedEx</label>

                </div>

                <button type="button" class="btn btn-secondary" id="boton-atras">Atrás</button>

                <button type="button" class="btn btn-primary" id="boton-siguiente">Siguiente</button>

            </form>

        </div>`,

        `<div class="etapa-3">

            <h2>Paso 3: Información detallada</h2>

            <form id="formulario-etapa3">

                <div class="mb-3">

                    <label for="remitente" class="form-label">Remitente</label>

                    <input type="text" class="form-control" id="remitente" placeholder="Nombre del remitente" required>

                </div>

                <div class="mb-3">

                    <label for="destinatario" class="form-label">Destinatario</label>

                    <input type="text" class="form-control" id="destinatario" placeholder="Nombre del destinatario" required>

                </div>

                <button type="button" class="btn btn-secondary" id="boton-atras">Atrás</button>

                <button type="button" class="btn btn-primary" id="boton-siguiente">Siguiente</button>

            </form>

        </div>`,

        `<div class="etapa-4">

            <h2>Paso 4: Confirmación</h2>

            <p>¡Tu envío ha sido creado con éxito!</p>

            <button type="button" class="btn btn-secondary" id="boton-atras">Atrás</button>

        </div>`
        
    ];

    let etapaActual = 0; 

    function renderizarEtapa(indiceEtapa) {
        aplicacion.innerHTML = etapas[indiceEtapa];


        document.getElementById("boton-siguiente")?.addEventListener("click", () => {
            const formulario = document.querySelector(`#formulario-etapa${indiceEtapa + 1}`);
            if (formulario.checkValidity()) {
                if (indiceEtapa < etapas.length - 1) {
                    etapaActual++;
                    renderizarEtapa(etapaActual);
                }
            } else {
                formulario.reportValidity(); 
            }
        });

        
        document.getElementById("boton-atras")?.addEventListener("click", () => {
            if (indiceEtapa > 0) {
                etapaActual--;
                renderizarEtapa(etapaActual);
            }
        });
    }

    renderizarEtapa(etapaActual); 
});
