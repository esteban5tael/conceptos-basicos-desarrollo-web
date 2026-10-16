/**
 * Base de datos del glosario de conceptos básicos de desarrollo web.
 * Contiene los 10 niveles y los 200 conceptos con su contenido completo,
 * más helpers de consulta.
 * @module data/database
 */
import type { Nivel, Concepto } from "./db-types";

/**
 * Niveles del glosario. Cada nivel agrupa conceptos de una misma
 * temática del desarrollo web.
 */
export const niveles: readonly Nivel[] = [
    {
        id: 1,
        slug: "fundamentos-de-internet",
        titulo: "Fundamentos de Internet",
        descripcion:
            "Los cimientos de cómo funciona Internet: clientes, servidores, direcciones, dominios y los protocolos que lo sostienen todo.",
        orden: 1,
        icono: "🌐",
        color: "#3B82F6",
    },
    {
        id: 2,
        slug: "comunicacion-web-y-http",
        titulo: "Comunicación web y HTTP",
        descripcion:
            "El idioma que usan navegadores y servidores para hablar: peticiones, respuestas, métodos, códigos de estado y caché.",
        orden: 2,
        icono: "🔄",
        color: "#10B981",
    },
    {
        id: 3,
        slug: "conceptos-de-programacion",
        titulo: "Conceptos de programación",
        descripcion:
            "Los conceptos universales de la programación: variables, funciones, bucles, estructuras de datos y programación asíncrona.",
        orden: 3,
        icono: "💻",
        color: "#8B5CF6",
    },
    {
        id: 4,
        slug: "lenguajes-del-desarrollo-web",
        titulo: "Lenguajes del desarrollo web",
        descripcion:
            "HTML, CSS, JavaScript, TypeScript, el DOM, los componentes y las distintas formas de renderizar una página.",
        orden: 4,
        icono: "🧩",
        color: "#F59E0B",
    },
    {
        id: 5,
        slug: "backend-y-apis",
        titulo: "Backend y APIs",
        descripcion:
            "Todo lo que pasa del lado del servidor: APIs, endpoints, controladores, servicios, middlewares y colas de mensajes.",
        orden: 5,
        icono: "⚙️",
        color: "#EF4444",
    },
    {
        id: 6,
        slug: "bases-de-datos-y-consultas",
        titulo: "Bases de datos y consultas",
        descripcion:
            "Tablas, relaciones, SQL, índices, transacciones, migraciones y las alternativas NoSQL como Redis y MongoDB.",
        orden: 6,
        icono: "🗄️",
        color: "#06B6D4",
    },
    {
        id: 7,
        slug: "autenticacion-y-seguridad",
        titulo: "Autenticación y seguridad",
        descripcion:
            "Cómo verificar identidades y proteger sistemas: sesiones, tokens, JWT, OAuth y los ataques más comunes.",
        orden: 7,
        icono: "🔒",
        color: "#DC2626",
    },
    {
        id: 8,
        slug: "ingenieria-de-software",
        titulo: "Ingeniería de software",
        descripcion:
            "Git, trabajo en equipo, principios de diseño, buenas prácticas y arquitecturas: de monolitos a microservicios.",
        orden: 8,
        icono: "🏗️",
        color: "#7C3AED",
    },
    {
        id: 9,
        slug: "testing-rendimiento-y-calidad",
        titulo: "Testing, rendimiento y calidad",
        descripcion:
            "Pruebas automatizadas, depuración, logs, optimización de consultas, lazy loading y métricas de rendimiento web.",
        orden: 9,
        icono: "🧪",
        color: "#059669",
    },
    {
        id: 10,
        slug: "infraestructura-y-despliegue",
        titulo: "Infraestructura y despliegue",
        descripcion:
            "Servidores, variables de entorno, Nginx, Docker, CI/CD, entornos, despliegues, backups y escalabilidad.",
        orden: 10,
        icono: "🚀",
        color: "#EA580C",
    },
];

/**
 * Lista completa de los 200 conceptos del glosario, con definiciones,
 * ejemplos reales (en bloques de texto y código) y analogías.
 */
export const conceptos: readonly Concepto[] = [
    {
        id: 1,
        slug: "que-es-internet",
        nivelId: 1,
        orden: 1,
        titulo: "¿Qué es Internet?",
        definicion:
            "Es una red gigante de computadoras conectadas entre sí en todo el mundo. No es una sola máquina ni una \"nube mágica\": son millones de computadoras, cables, routers y satélites que se hablan entre ellos usando un mismo idioma (protocolos). Cualquier dispositivo conectado puede intercambiar información con otro.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando mandas un WhatsApp a tu mamá, ese mensaje viaja por cables submarinos, routers y antenas hasta llegar a su teléfono. No hay un \"WhatsApp central\" que lo guarde todo: hay miles de computadoras ayudando a que el mensaje llegue.",
            },
        ],
        analogia:
            "Internet es como la red de carreteras del mundo. Tú no \"usas la carretera\", la usas para llegar a un lugar. Internet es la infraestructura; lo que haces encima (WhatsApp, YouTube, Google) son los vehículos y destinos.",
        tags: ["internet", "redes", "infraestructura"],
    },
    {
        id: 2,
        slug: "que-es-la-world-wide-web",
        nivelId: 1,
        orden: 2,
        titulo: "¿Qué es la World Wide Web?",
        definicion:
            "Es un servicio que funciona *sobre* Internet. Es el conjunto de páginas web enlazadas entre sí mediante links, a las que accedes con un navegador (Chrome, Firefox). La Web usa Internet para transportar sus datos, pero Internet también transporta correos, videollamadas, juegos online, etc.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando escribes `www.wikipedia.org` en Chrome y ves un artículo, estás usando la Web. Pero cuando haces una videollamada por Zoom, usas Internet, no la Web.",
            },
        ],
        analogia:
            "Internet es el océano; la Web es una isla dentro del océano. Puedes navegar el océano sin pisar esa isla (Zoom, correo), pero si quieres ver \"páginas\", vas a la isla.",
        tags: ["web", "navegador", "internet"],
    },
    {
        id: 3,
        slug: "que-es-un-cliente",
        nivelId: 1,
        orden: 3,
        titulo: "¿Qué es un cliente?",
        definicion:
            "Es cualquier dispositivo o programa que *pide* algo. Solicita información o un servicio.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tu celular cuando abres Instagram es el cliente. Le dice al servidor de Instagram: \"dame las fotos de mis amigos\". Tu navegador Chrome también es un cliente.",
            },
        ],
        analogia:
            "El cliente es el comensal en un restaurante. Se sienta, pide el menú, ordena y espera que le traigan la comida. No cocina, solo pide.",
        tags: ["cliente", "arquitectura-cliente-servidor", "redes"],
    },
    {
        id: 4,
        slug: "que-es-un-servidor",
        nivelId: 1,
        orden: 4,
        titulo: "¿Qué es un servidor?",
        definicion:
            "Es una computadora (o programa) que *responde* a las peticiones de los clientes. Está encendida 24/7, guarda información y la entrega cuando alguien la pide.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Los servidores de Netflix guardan todas las películas y, cuando le das \"play\", te envían el video. Los servidores de Google guardan los resultados de búsqueda.",
            },
        ],
        analogia:
            "El servidor es la cocina del restaurante. Recibe el pedido del cliente, lo prepara y lo entrega. No decide qué quieres, solo lo sirve.",
        tags: ["servidor", "arquitectura-cliente-servidor", "backend"],
    },
    {
        id: 5,
        slug: "que-es-arquitectura-cliente-servidor",
        nivelId: 1,
        orden: 5,
        titulo: "¿Qué es una arquitectura cliente-servidor?",
        definicion:
            "Es el modelo en el que un cliente pide y un servidor responde. Es la base de casi todo Internet. El cliente inicia la conversación; el servidor espera y contesta.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando entras a Mercado Libre, tu navegador (cliente) pide la página; el servidor de Mercado Libre la envía. Luego pides \"buscar zapatillas\", el servidor devuelve resultados.",
            },
        ],
        analogia:
            "Es como pedir comida a domicilio. Tú (cliente) llamas, el restaurante (servidor) prepara y te trae el pedido. Tú no entras a la cocina; solo pides y recibes.",
        tags: ["arquitectura", "cliente", "servidor"],
    },
    {
        id: 6,
        slug: "que-es-frontend",
        nivelId: 1,
        orden: 6,
        titulo: "¿Qué es frontend?",
        definicion:
            "Es la parte de una aplicación que el usuario ve y con la que interactúa directamente. Colores, botones, textos, animaciones, formularios. Se ejecuta en el navegador o en tu celular.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "La pantalla de Instagram que ves: el ícono de corazón, el botón de \"publicar\", el scroll infinito. Todo eso es frontend. Está hecho con HTML, CSS y JavaScript.",
            },
        ],
        analogia:
            "El frontend es el mostrador de una tienda: lo que ves, tocas y hueles. La mercancía real está en la bodega (backend), pero tú solo interactúas con el mostrador.",
        tags: ["frontend", "ui", "interfaz"],
    },
    {
        id: 7,
        slug: "que-es-backend",
        nivelId: 1,
        orden: 7,
        titulo: "¿Qué es backend?",
        definicion:
            "Es la parte que el usuario *no ve*. Son los servidores, bases de datos y lógica que procesan la información. Decide qué se guarda, qué se muestra, quién puede entrar, etc.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando das \"me gusta\" en Instagram, el frontend solo cambia el corazón a rojo. El backend es quien guarda ese like en la base de datos y le avisa a tus amigos. También verifica que no le des like 100 veces.",
            },
        ],
        analogia:
            "El backend es la cocina del restaurante: no la ves, pero ahí se prepara todo. El chef (backend) decide si hay ingredientes, si la receta está bien, y manda el plato al mesero (frontend) para que te lo entregue.",
        tags: ["backend", "servidor", "logica"],
    },
    {
        id: 8,
        slug: "que-es-una-direccion-ip",
        nivelId: 1,
        orden: 8,
        titulo: "¿Qué es una dirección IP?",
        definicion:
            "Es un número único que identifica a cada dispositivo conectado a Internet. Como una dirección postal, pero para computadoras. Ejemplo: `192.168.1.1` o `142.250.72.14`.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando te conectas a Google, tu computadora envía datos a la IP de Google (por ejemplo `142.250.72.14`). Google sabe responder a *tu* IP porque también la conoce.",
            },
        ],
        analogia:
            "La IP es como tu dirección de casa. Si quieres recibir una carta, necesitas una dirección. Sin IP, nadie sabría a dónde mandarte datos.",
        tags: ["ip", "redes", "direccionamiento"],
    },
    {
        id: 9,
        slug: "que-es-un-dominio",
        nivelId: 1,
        orden: 9,
        titulo: "¿Qué es un dominio?",
        definicion:
            "Es un nombre fácil de recordar que reemplaza a una IP. En vez de escribir `142.250.72.14`, escribes `google.com`. El dominio es la \"máscara humana\" de la IP.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`youtube.com`, `wikipedia.org`, `mercadolibre.com.ar`. Todos tienen una IP detrás, pero nadie las memoriza.",
            },
        ],
        analogia:
            "El dominio es como el nombre de una persona. Su dirección de casa es la IP (difícil de recordar), pero su nombre (dominio) es lo que usas para encontrarla.",
        tags: ["dominio", "dns", "hosting"],
    },
    {
        id: 10,
        slug: "que-es-dns",
        nivelId: 1,
        orden: 10,
        titulo: "¿Qué es DNS?",
        definicion:
            "Es el \"traductor\" que convierte dominios en IPs. Cuando escribes `google.com`, el DNS busca en su base de datos y te dice: \"esa es la IP `142.250.72.14`\". Sin DNS, tendrías que memorizar números.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tu navegador le pregunta al DNS de tu proveedor (o a uno público como `8.8.8.8` de Google): \"¿cuál es la IP de wikipedia.org?\" El DNS responde y tu navegador se conecta.",
            },
        ],
        analogia:
            "El DNS es como la agenda de contactos de tu celular. No memorizas el número de tu mamá; guardas su nombre y el teléfono lo busca por ti. El DNS es la agenda de Internet.",
        tags: ["dns", "dominio", "redes"],
    },
    {
        id: 11,
        slug: "que-es-un-puerto",
        nivelId: 1,
        orden: 11,
        titulo: "¿Qué es un puerto?",
        definicion:
            "Es un número que identifica *qué servicio* dentro de una misma computadora está recibiendo la conexión. Una misma máquina puede tener varios servicios, y cada uno usa un puerto distinto. Ejemplos: 80 (HTTP), 443 (HTTPS), 22 (SSH), 3306 (MySQL).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando entras a una web, tu navegador se conecta a la IP del servidor en el puerto 443. Si ese servidor también tiene una base de datos, estará en el puerto 3306.",
            },
        ],
        analogia:
            "La IP es la dirección de un edificio. El puerto es el número de apartamento. Llegas al edificio correcto (IP) y tocas la puerta correcta (puerto) para encontrar a quien buscas.",
        tags: ["puerto", "redes", "servidor"],
    },
    {
        id: 12,
        slug: "que-es-localhost",
        nivelId: 1,
        orden: 12,
        titulo: "¿Qué es localhost?",
        definicion:
            "Es tu propia computadora vista como si fuera un servidor. Su IP especial es `127.0.0.1`. Cuando algo se conecta a localhost, se está conectando a sí mismo.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Si estás programando una web y la pruebas en tu compu, abres `http://localhost:3000`. Ahí tu navegador (cliente) le pide la página a tu propia máquina (servidor local).",
            },
        ],
        analogia:
            "Localhost es como hablarte a ti mismo en el espejo. No sales a la calle ni llamas a nadie: te hablas a ti mismo. Sirve para practicar antes de salir al mundo real (Internet).",
        tags: ["localhost", "desarrollo", "servidor"],
    },
    {
        id: 13,
        slug: "que-es-hosting",
        nivelId: 1,
        orden: 13,
        titulo: "¿Qué es hosting?",
        definicion:
            "Es el servicio de alquilar una computadora conectada a Internet 24/7 para guardar tu web, app o datos. Esa computadora es tu \"servidor alquilado\".",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando alguien crea una página web, no la deja en su laptop (porque se apaga). Paga a Hostinger, AWS, Vercel o similar para que guarden su web en sus servidores siempre encendidos.",
            },
        ],
        analogia:
            "El hosting es como alquilar una bodega para guardar tus cosas. Tú no construyes la bodega; pagas para que alguien más la mantenga segura, iluminada y accesible 24/7.",
        tags: ["hosting", "servidor", "despliegue"],
    },
    {
        id: 14,
        slug: "que-es-un-protocolo-de-comunicacion",
        nivelId: 1,
        orden: 14,
        titulo: "¿Qué es un protocolo de comunicación?",
        definicion:
            "Es un conjunto de reglas que dos dispositivos acuerdan para entenderse. Sin reglas comunes, no se pueden comunicar. Define cómo se saluda, cómo se envían datos, cómo se responde, qué hacer si hay errores.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "HTTP es el protocolo para pedir páginas web. SMTP es el protocolo para enviar correos. FTP es el protocolo para transferir archivos. Cada uno tiene reglas distintas.",
            },
        ],
        analogia:
            "Es como los idiomas. Si tú hablas español y yo japonés, no nos entendemos. El protocolo es el idioma acordado: ambos hablamos español y nos comunicamos bien. En Internet hay muchos \"idiomas\" (protocolos) según qué estés haciendo.",
        tags: ["protocolo", "redes", "comunicacion"],
    },
    {
        id: 15,
        slug: "que-es-tcp-ip",
        nivelId: 1,
        orden: 15,
        titulo: "¿Qué es TCP/IP?",
        definicion:
            "Es el conjunto de protocolos base de Internet. **IP** se encarga de direccionar y enrutar los paquetes (encontrar el camino). **TCP** se encarga de que los datos lleguen completos y en orden (si falta algo, lo pide de nuevo). Juntos forman el \"idioma fundamental\" de Internet.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando envías un archivo por Internet, TCP lo divide en pedacitos (paquetes), IP los manda por distintas rutas, y TCP en el destino los reordena y verifica que estén todos. Si falta uno, TCP pide que se reenvíe.",
            },
        ],
        analogia:
            "Imagina que quieres mandar un rompecabezas por correo a otra ciudad. **IP** es el servicio postal que decide por qué calles y camiones va cada pieza. **TCP** es el amigo que, al recibirlas, revisa que estén todas, las ordena y te pide las que falten. Sin TCP, podrías recibir piezas sueltas y desordenadas; sin IP, no sabrías a dónde mandarlas.",
        tags: ["tcp", "ip", "protocolos"],
    },
    {
        id: 16,
        slug: "que-es-http",
        nivelId: 2,
        orden: 1,
        titulo: "¿Qué es HTTP?",
        definicion:
            "Es el protocolo (conjunto de reglas) que usan los navegadores y servidores para hablar entre sí en la Web. Define cómo se pide algo y cómo se responde. Cada vez que abres una página, tu navegador manda un mensaje HTTP y el servidor contesta con otro.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando escribes `wikipedia.org` en Chrome, tu navegador envía un mensaje HTTP tipo: \"dame la página principal\". El servidor responde con el HTML de esa página. Eso es HTTP en acción.",
            },
        ],
        analogia:
            "HTTP es como el idioma y las reglas de cortesía en una oficina de atención al público. Tú llegas, dices \"buenos días, quiero X\", el empleado responde \"aquí tiene\" o \"no tenemos eso\". Hay un formato esperado para pedir y responder.",
        tags: ["http", "protocolo", "web"],
    },
    {
        id: 17,
        slug: "que-es-https",
        nivelId: 2,
        orden: 2,
        titulo: "¿Qué es HTTPS?",
        definicion:
            "Es HTTP pero con seguridad. La \"S\" significa *Secure*. Todo lo que viaja entre tu navegador y el servidor va **cifrado**: nadie en el medio (WiFi público, tu proveedor, un hacker) puede leerlo ni modificarlo.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando entras a tu banco online, la URL empieza con `https://`. Si fuera solo `http://`, cualquiera en la misma red WiFi podría ver tu usuario y contraseña.",
            },
        ],
        analogia:
            "HTTP es mandar una postal: cualquiera que la vea en el camino puede leerla. HTTPS es mandar una carta dentro de un sobre sellado y con candado: solo el destinatario puede abrirlo.",
        tags: ["https", "seguridad", "cifrado"],
    },
    {
        id: 18,
        slug: "que-es-tls-ssl",
        nivelId: 2,
        orden: 3,
        titulo: "¿Qué es TLS/SSL?",
        definicion:
            "Son los protocolos que hacen posible el cifrado de HTTPS. SSL fue el original, TLS es su versión moderna (hoy se usa TLS, aunque la gente sigue diciendo \"SSL\"). Se encargan de dos cosas: cifrar los datos y verificar que el servidor es quien dice ser.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando entras a `https://google.com`, TLS negocia con el servidor: intercambian claves, verifican el certificado de Google, y a partir de ahí todo va cifrado.",
            },
        ],
        analogia:
            "TLS/SSL es como el sistema de sobres blindados y sellos oficiales del correo. El sobre (cifrado) evita que lean tu carta, y el sello oficial (certificado) confirma que quien la manda es realmente quien dice ser, no un impostor.",
        tags: ["tls", "ssl", "certificados"],
    },
    {
        id: 19,
        slug: "que-es-una-url",
        nivelId: 2,
        orden: 4,
        titulo: "¿Qué es una URL?",
        definicion:
            "Es la dirección completa de un recurso en la Web. Tiene varias partes: protocolo, dominio, puerto (opcional), path, query parameters y fragmento.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`https://tienda.com:443/productos/zapatos?color=rojo&talla=42#reseñas`\n- `https` → protocolo\n- `tienda.com` → dominio\n- `443` → puerto\n- `/productos/zapatos` → path\n- `?color=rojo&talla=42` → query params\n- `#reseñas` → fragmento",
            },
        ],
        analogia:
            "Una URL es como la dirección completa de una casa con instrucciones extra: \"País (protocolo) → Ciudad (dominio) → Calle (path) → número (puerto) → instrucciones especiales (query) → habitación exacta (fragmento)\".",
        tags: ["url", "direccion", "web"],
    },
    {
        id: 20,
        slug: "que-es-una-peticion-request",
        nivelId: 2,
        orden: 5,
        titulo: "¿Qué es una petición (request)?",
        definicion:
            "Es el mensaje que envía el cliente al servidor pidiendo algo. Incluye: método (GET, POST...), URL, headers, y a veces un body con datos.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando le das \"buscar\" en Google, tu navegador manda una petición: \"GET /search?q=gatos\". El servidor recibe eso y sabe qué hacer.",
            },
        ],
        analogia:
            "Una petición es como el formulario que llenas en una ventanilla: dices qué quieres (método), a qué oficina (URL), con qué datos (body) y quién eres (headers).",
        tags: ["peticion", "request", "http"],
    },
    {
        id: 21,
        slug: "que-es-una-respuesta-response",
        nivelId: 2,
        orden: 6,
        titulo: "¿Qué es una respuesta (response)?",
        definicion:
            "Es el mensaje que el servidor devuelve al cliente. Incluye: código de estado (200, 404...), headers, y a veces un body con el contenido solicitado.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Pides la página de Wikipedia y el servidor responde: `200 OK` + el HTML de la página. Si pides algo que no existe, responde `404 Not Found`.",
            },
        ],
        analogia:
            "La respuesta es lo que te devuelve la ventanilla: \"aquí está tu documento\" (200), \"no lo encontramos\" (404), \"no tienes permiso\" (403). Siempre trae un estado y, si aplica, el contenido.",
        tags: ["respuesta", "response", "http"],
    },
    {
        id: 22,
        slug: "que-son-los-metodos-o-verbos-http",
        nivelId: 2,
        orden: 7,
        titulo: "¿Qué son los métodos o verbos HTTP?",
        definicion:
            "Son las \"acciones\" que puedes pedir en una petición. Los principales son GET, POST, PUT, PATCH, DELETE, HEAD y OPTIONS. Cada uno dice *qué tipo de operación* quieres hacer sobre un recurso.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En una API de tienda:\n- GET → ver productos\n- POST → crear un producto\n- PUT → reemplazar un producto\n- PATCH → modificar un campo\n- DELETE → borrar un producto",
            },
        ],
        analogia:
            "Son como los verbos en una frase. \"Ver\", \"crear\", \"reemplazar\", \"modificar\", \"borrar\". La URL es el sustantivo (productos), y el verbo dice qué hacer con él.",
        tags: ["http", "metodos", "api"],
    },
    {
        id: 23,
        slug: "que-es-get",
        nivelId: 2,
        orden: 8,
        titulo: "¿Qué es `GET`?",
        definicion:
            "Es el método para **pedir/leer** información. No modifica nada en el servidor. Los datos van en la URL (query params).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`GET https://api.tienda.com/productos?categoria=zapatos` → devuelve la lista de zapatos. Solo lee, no cambia nada.",
            },
        ],
        analogia:
            "GET es como mirar la vitrina de una tienda. Ves lo que hay, pero no tocas ni compras nada. Puedes pedir \"muéstrame los de la sección roja\" (query params).",
        tags: ["get", "http", "lectura"],
    },
    {
        id: 24,
        slug: "que-es-post",
        nivelId: 2,
        orden: 9,
        titulo: "¿Qué es `POST`?",
        definicion:
            "Es el método para **crear** un recurso nuevo. Los datos van en el body (no en la URL), porque suelen ser más grandes o sensibles.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`POST https://api.tienda.com/productos` con body `{ \"nombre\": \"Zapatilla\", \"precio\": 50 }` → crea un producto nuevo en la base de datos.",
            },
        ],
        analogia:
            "POST es como llenar un formulario y entregarlo en la ventanilla para que te abran una cuenta nueva. Estás creando algo que antes no existía.",
        tags: ["post", "http", "creacion"],
    },
    {
        id: 25,
        slug: "que-es-put",
        nivelId: 2,
        orden: 10,
        titulo: "¿Qué es `PUT`?",
        definicion:
            "Es el método para **reemplazar** un recurso completo. Envías todos los campos, aunque no hayan cambiado. Si no mandas un campo, se borra.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`PUT /productos/5` con body `{ \"nombre\": \"Zapatilla\", \"precio\": 60, \"color\": \"negro\" }` → reemplaza *todo* el producto 5 con esos datos.",
            },
        ],
        analogia:
            "PUT es como reescribir una hoja entera. Si la hoja tenía 5 líneas y tú mandas 3, las otras 2 desaparecen. No editas: reemplazas.",
        tags: ["put", "http", "actualizacion"],
    },
    {
        id: 26,
        slug: "que-es-patch",
        nivelId: 2,
        orden: 11,
        titulo: "¿Qué es `PATCH`?",
        definicion:
            "Es el método para **modificar parcialmente** un recurso. Solo envías los campos que cambian; el resto queda igual.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`PATCH /productos/5` con body `{ \"precio\": 60 }` → solo cambia el precio, deja el nombre, color, etc. intactos.",
            },
        ],
        analogia:
            "PATCH es como corregir una hoja con liquid paper: solo tachas y corriges la línea que estaba mal. El resto del texto queda igual.",
        tags: ["patch", "http", "actualizacion"],
    },
    {
        id: 27,
        slug: "que-es-delete",
        nivelId: 2,
        orden: 12,
        titulo: "¿Qué es `DELETE`?",
        definicion: "Es el método para **borrar** un recurso.",
        ejemplo: [
            {
                tipo: "texto",
                contenido: "`DELETE /productos/5` → elimina el producto 5 del servidor.",
            },
        ],
        analogia:
            "DELETE es como tirar un papel a la basura. Le dices al servidor \"este ya no existe\".",
        tags: ["delete", "http", "borrado"],
    },
    {
        id: 28,
        slug: "que-es-head",
        nivelId: 2,
        orden: 13,
        titulo: "¿Qué es `HEAD`?",
        definicion:
            "Es igual que GET, pero el servidor responde **solo con los headers**, sin el body. Sirve para verificar si un recurso existe, cuánto pesa, cuándo se modificó, etc., sin descargarlo entero.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Antes de descargar un archivo de 2 GB, haces `HEAD` para ver su tamaño y fecha. Si no te interesa, no lo descargas.",
            },
        ],
        analogia:
            "HEAD es como mirar la portada y el índice de un libro sin leerlo completo. Sabes cuántas páginas tiene y de qué trata, sin gastar tiempo leyéndolo.",
        tags: ["head", "http", "headers"],
    },
    {
        id: 29,
        slug: "que-es-options",
        nivelId: 2,
        orden: 14,
        titulo: "¿Qué es `OPTIONS`?",
        definicion:
            "Es el método que pregunta al servidor **qué se puede hacer** con un recurso: qué métodos acepta, qué headers permite, etc. Se usa mucho en CORS (cuando una web pide datos a otro dominio).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Antes de mandar un `POST` a una API de otro dominio, el navegador manda un `OPTIONS` para preguntar: \"¿me dejas hacer POST desde este origen?\". El servidor responde sí o no.",
            },
        ],
        analogia:
            "OPTIONS es como llamar a un restaurante antes de ir: \"¿atienden los domingos? ¿aceptan tarjeta? ¿hacen delivery?\". Preguntas qué se puede hacer antes de intentarlo.",
        tags: ["options", "http", "cors"],
    },
    {
        id: 30,
        slug: "que-son-los-codigos-de-estado-http",
        nivelId: 2,
        orden: 15,
        titulo: "¿Qué son los códigos de estado HTTP?",
        definicion:
            "Son números de 3 dígitos que el servidor devuelve para decir cómo salió la petición. Se agrupan:\n- **1xx** → informativos\n- **2xx** → éxito (200 OK, 201 Created)\n- **3xx** → redirección (301, 302)\n- **4xx** → error del cliente (400, 401, 403, 404)\n- **5xx** → error del servidor (500, 503)",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Pides una página que no existe → `404`. Tu sesión expiró → `401`. El servidor se cayó → `500`. Todo salió bien → `200`.",
            },
        ],
        analogia:
            "Son como los semáforos de la conversación: verde (2xx, todo bien), amarillo (3xx, ve a otro lado), rojo por tu culpa (4xx, pediste mal), rojo por culpa del servidor (5xx, el servidor falló).",
        tags: ["codigos-de-estado", "http", "errores"],
    },
    {
        id: 31,
        slug: "que-son-los-headers",
        nivelId: 2,
        orden: 16,
        titulo: "¿Qué son los headers?",
        definicion:
            "Son metadatos que van en la petición y en la respuesta. No son el contenido en sí, sino información *sobre* el contenido: tipo de dato, idioma, cookies, autenticación, caché, etc.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`Content-Type: application/json`, `Authorization: Bearer abc123`, `Accept-Language: es-ES`. Le dicen al servidor cómo interpretar y responder.",
            },
        ],
        analogia:
            "Los headers son como los datos del sobre de una carta: remitente, destinatario, sello, \"frágil\", \"urgente\". No son la carta, pero sin ellos no se entrega bien.",
        tags: ["headers", "http", "metadatos"],
    },
    {
        id: 32,
        slug: "que-es-el-body-de-una-peticion",
        nivelId: 2,
        orden: 17,
        titulo: "¿Qué es el body de una petición?",
        definicion:
            "Es el contenido real que envías en una petición (o que recibes en una respuesta). Va después de los headers. Se usa sobre todo en POST, PUT y PATCH.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En un `POST /usuarios`, el body sería `{ \"nombre\": \"Ana\", \"email\": \"ana@mail.com\" }`. Eso es lo que se guarda en el servidor.",
            },
        ],
        analogia:
            "Si la petición es una carta, los headers son el sobre y el body es la carta misma: el mensaje real que quieres comunicar.",
        tags: ["body", "http", "peticion"],
    },
    {
        id: 33,
        slug: "que-es-un-query-parameter",
        nivelId: 2,
        orden: 18,
        titulo: "¿Qué es un query parameter?",
        definicion:
            "Son datos que van en la URL después del signo `?`, separados por `&`. Se usan para filtrar, ordenar o paginar resultados. No cambian el recurso, solo ajustan cómo lo ves.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`https://tienda.com/productos?categoria=zapatos&orden=precio` → filtra zapatos y los ordena por precio.",
            },
        ],
        analogia:
            "Los query params son como los filtros de una búsqueda en una tienda: \"muéstrame zapatos (categoría), ordenados por precio (orden), solo los de la talla 42 (talla)\". La tienda es la misma; cambia lo que ves.",
        tags: ["query-params", "url", "filtros"],
    },
    {
        id: 34,
        slug: "que-es-un-path-parameter",
        nivelId: 2,
        orden: 19,
        titulo: "¿Qué es un path parameter?",
        definicion:
            "Es un valor que va **dentro del path** de la URL y forma parte de la identidad del recurso. Se usa para identificar un recurso específico.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`https://api.tienda.com/productos/5` → el `5` es el path param que identifica al producto 5. No es un filtro, es *cuál* producto.",
            },
        ],
        analogia:
            "Si la URL es una dirección, el path param es el número de casa. No es un filtro (\"solo casas rojas\"), es la casa exacta que buscas.",
        tags: ["path-params", "url", "api"],
    },
    {
        id: 35,
        slug: "que-son-las-cookies",
        nivelId: 2,
        orden: 20,
        titulo: "¿Qué son las cookies?",
        definicion:
            "Son pequeños archivos de texto que el servidor manda al navegador y este guarda. En cada siguiente petición al mismo dominio, el navegador las reenvía automáticamente. Sirven para recordar quién eres, tu sesión, preferencias, etc.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando inicias sesión en Instagram, el servidor te manda una cookie con un token. En cada página que abres, el navegador la reenvía y así Instagram sabe que sigues siendo tú.",
            },
        ],
        analogia:
            "Las cookies son como el gafete que te dan al entrar a un edificio. Lo llevas puesto y cada vez que pasas por un control, lo muestras. El edificio recuerda que ya te registraste.",
        tags: ["cookies", "sesiones", "http"],
    },
    {
        id: 36,
        slug: "que-es-una-redireccion",
        nivelId: 2,
        orden: 21,
        titulo: "¿Qué es una redirección?",
        definicion:
            "Es cuando el servidor responde con un código 3xx y una nueva URL. Le dice al cliente: \"lo que buscas no está aquí, ve a esta otra dirección\". El navegador va automáticamente a la nueva.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Si entras a `http://google.com`, el servidor responde `301` y te manda a `https://google.com`. También pasa cuando una web cambió de dominio.",
            },
        ],
        analogia:
            "La redirección es como cuando llegas a una oficina y te dicen: \"eso ya no se atiende aquí, ve al piso 5\". No te dan lo que pediste, pero te indican a dónde ir.",
        tags: ["redireccion", "http", "3xx"],
    },
    {
        id: 37,
        slug: "que-es-la-cache-http",
        nivelId: 2,
        orden: 22,
        titulo: "¿Qué es la caché HTTP?",
        definicion:
            "Es un mecanismo para guardar copias de respuestas y reutilizarlas sin volver a pedirlas al servidor. El navegador (o un servidor intermedio) guarda la respuesta y, si la pides de nuevo, la usa si aún es válida. Ahorra tiempo y ancho de banda.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "La primera vez que entras a una web, descarga el logo, el CSS y las imágenes. La segunda vez, el navegador los saca de la caché y la página carga casi instantánea.",
            },
        ],
        analogia:
            "La caché es como tener la comida ya preparada en la heladera. La primera vez cocinas (descargas del servidor); las siguientes, solo la recalientas (usas la copia guardada). Si se venció (expiró la caché), vuelves a cocinar.",
        tags: ["cache", "http", "rendimiento"],
    },
    {
        id: 38,
        slug: "que-es-un-lenguaje-de-programacion",
        nivelId: 3,
        orden: 1,
        titulo: "¿Qué es un lenguaje de programación?",
        definicion:
            "Es un idioma formal que usamos para darle instrucciones a una computadora. Tiene reglas (sintaxis) y significados (semántica). Ejemplos: Python, JavaScript, Java, C++, Go, Rust.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Escribes `console.log(\"Hola\")` en JavaScript y la computadora muestra \"Hola\" en pantalla. Ese es el lenguaje diciéndole qué hacer.",
            },
        ],
        analogia:
            "Un lenguaje de programación es como el idioma que usas para darle órdenes a un empleado muy obediente pero literal. Si dices \"trae el libro rojo\", lo hará; pero si dices \"trae el libro\" sin más, no sabrá cuál. Hay que hablarle con reglas exactas.",
        tags: ["lenguaje", "programacion", "sintaxis"],
    },
    {
        id: 39,
        slug: "que-es-un-lenguaje-compilado",
        nivelId: 3,
        orden: 2,
        titulo: "¿Qué es un lenguaje compilado?",
        definicion:
            "Es un lenguaje cuyo código se traduce **completo** a otro idioma (código máquina) antes de ejecutarse. Esa traducción la hace un programa llamado compilador, y produce un archivo ejecutable. Ejemplos: C, C++, Rust, Go.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Escribes un programa en C, lo compilas con `gcc` y obtienes un `.exe` que puedes ejecutar mil veces sin volver a compilar.",
            },
        ],
        analogia:
            "Un lenguaje compilado es como traducir un libro completo al español antes de publicarlo. El traductor (compilador) hace todo el trabajo una vez, y luego los lectores leen directo sin traductor.",
        tags: ["compilador", "lenguaje", "ejecucion"],
    },
    {
        id: 40,
        slug: "que-es-un-lenguaje-interpretado",
        nivelId: 3,
        orden: 3,
        titulo: "¿Qué es un lenguaje interpretado?",
        definicion:
            "Es un lenguaje cuyo código se traduce **línea por línea** mientras se ejecuta. Un programa llamado intérprete lee el código y lo va ejecutando en tiempo real. Ejemplos: Python, JavaScript, Ruby, PHP.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Escribes un script en Python y lo corres con `python script.py`. El intérprete va leyendo y ejecutando línea por línea. Si hay un error en la línea 50, las primeras 49 ya se ejecutaron.",
            },
        ],
        analogia:
            "Un lenguaje interpretado es como un traductor simultáneo en una conferencia: traduce lo que va escuchando, en vivo, sin traducir todo el discurso antes.",
        tags: ["interprete", "lenguaje", "ejecucion"],
    },
    {
        id: 41,
        slug: "que-es-un-runtime",
        nivelId: 3,
        orden: 4,
        titulo: "¿Qué es un runtime?",
        definicion:
            "Es el entorno que necesita un programa para ejecutarse. Incluye el intérprete o máquina virtual, las librerías base y las herramientas que permiten que el código corra. Ejemplos: Node.js (runtime de JavaScript), la JVM (runtime de Java), CPython (runtime de Python).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "JavaScript no corre solo en cualquier lado; necesita un runtime. En el navegador es V8, en el servidor es Node.js. Sin runtime, el código es solo texto.",
            },
        ],
        analogia:
            "El runtime es como la cocina equipada donde se prepara la receta. La receta (código) no sirve sola: necesitas horno, sartenes, gas (runtime) para que funcione.",
        tags: ["runtime", "nodejs", "ejecucion"],
    },
    {
        id: 42,
        slug: "que-es-un-algoritmo",
        nivelId: 3,
        orden: 5,
        titulo: "¿Qué es un algoritmo?",
        definicion:
            "Es una secuencia finita y ordenada de pasos para resolver un problema o hacer una tarea. No es código específico: es la *lógica* detrás del código.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un algoritmo para hacer café: 1) hervir agua, 2) poner café en filtro, 3) verter agua, 4) esperar. Eso es un algoritmo. En código sería una función con esos pasos.",
            },
        ],
        analogia:
            "Un algoritmo es como una receta de cocina. Los ingredientes son los datos, los pasos son las instrucciones, y el plato final es el resultado. Distintas recetas (algoritmos) pueden lograr el mismo plato, unas más rápido que otras.",
        tags: ["algoritmo", "logica", "pasos"],
    },
    {
        id: 43,
        slug: "que-es-una-variable",
        nivelId: 3,
        orden: 6,
        titulo: "¿Qué es una variable?",
        definicion:
            "Es un espacio con nombre donde guardas un valor. Ese valor puede cambiar durante la ejecución del programa. Se declara con un nombre y un tipo (a veces implícito).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`let edad = 25;` → guardas 25 en una variable llamada `edad`. Luego puedes hacer `edad = 26;` y ahora vale 26.",
            },
        ],
        analogia:
            "Una variable es como una caja etiquetada. La etiqueta es el nombre (`edad`), y dentro guardas algo (25). Puedes cambiar el contenido, pero la caja sigue siendo la misma.",
        tags: ["variable", "datos", "tipos"],
    },
    {
        id: 44,
        slug: "que-es-un-tipo-de-dato",
        nivelId: 3,
        orden: 7,
        titulo: "¿Qué es un tipo de dato?",
        definicion:
            "Es la categoría del valor que guardas: número, texto, booleano, lista, objeto, etc. El tipo determina qué operaciones puedes hacer con él.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`5` es número, `\"hola\"` es string, `true` es booleano. No puedes sumar `\"hola\" + 5` en la mayoría de lenguajes (o te da resultados raros).",
            },
        ],
        analogia:
            "Los tipos de dato son como las categorías de cosas en una cocina: líquidos, sólidos, polvos. No puedes meter un sólido en una licuadora esperando que se comporte como líquido. Cada tipo tiene sus reglas.",
        tags: ["tipos-de-dato", "string", "booleano"],
    },
    {
        id: 45,
        slug: "que-es-una-funcion",
        nivelId: 3,
        orden: 8,
        titulo: "¿Qué es una función?",
        definicion:
            "Es un bloque de código con nombre que hace una tarea específica. Puede recibir datos (parámetros) y devolver un resultado. Se puede llamar muchas veces sin reescribir la lógica.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`function sumar(a, b) { return a + b; }`. Llamas `sumar(2, 3)` y devuelve 5. La usas mil veces sin repetir el código.",
            },
        ],
        analogia:
            "Una función es como una licuadora: le metes frutas (parámetros), la enciendes (la llamas) y te devuelve un batido (resultado). No te importa cómo funciona por dentro, solo qué entra y qué sale.",
        tags: ["funcion", "parametros", "retorno"],
    },
    {
        id: 46,
        slug: "que-es-una-condicion",
        nivelId: 3,
        orden: 9,
        titulo: "¿Qué es una condición?",
        definicion:
            "Es una estructura que permite ejecutar código solo si se cumple algo. Se usa con `if`, `else if`, `else`. Evalúa una expresión booleana (true/false).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`if (edad >= 18) { console.log(\"Puede votar\"); } else { console.log(\"No puede votar\"); }`.",
            },
        ],
        analogia:
            "Una condición es como un semáforo para el código: si está verde (true), pasa; si está rojo (false), no pasa y toma otro camino. El programa decide qué hacer según la situación.",
        tags: ["condicion", "if-else", "booleano"],
    },
    {
        id: 47,
        slug: "que-es-un-bucle",
        nivelId: 3,
        orden: 10,
        titulo: "¿Qué es un bucle?",
        definicion:
            "Es una estructura que repite un bloque de código varias veces, hasta que se cumpla una condición de salida. Se usa con `for`, `while`, `do-while`.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`for (let i = 0; i < 5; i++) { console.log(i); }` → imprime 0, 1, 2, 3, 4. Repite 5 veces sin escribir 5 líneas.",
            },
        ],
        analogia:
            "Un bucle es como una lavadora: repite el mismo ciclo (lavar, enjuagar, centrifugar) hasta que termina el programa. No lavas a mano cada prenda: dejas que el ciclo se repita solo.",
        tags: ["bucle", "for", "while"],
    },
    {
        id: 48,
        slug: "que-es-un-array",
        nivelId: 3,
        orden: 11,
        titulo: "¿Qué es un array?",
        definicion:
            "Es una lista ordenada de valores. Cada valor tiene una posición (índice) que empieza en 0. Puedes guardar muchos datos en una sola variable.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`let frutas = [\"manzana\", \"pera\", \"uva\"];` → `frutas[0]` es \"manzana\", `frutas[1]` es \"pera\". Puedes recorrerlo, agregar, quitar.",
            },
        ],
        analogia:
            "Un array es como una fila de casilleros numerados. Cada casillero tiene un número (índice) y dentro guardas algo. Puedes ir directo al casillero 3 sin abrir los anteriores.",
        tags: ["array", "listas", "indice"],
    },
    {
        id: 49,
        slug: "que-es-un-objeto",
        nivelId: 3,
        orden: 12,
        titulo: "¿Qué es un objeto?",
        definicion:
            "Es una estructura que agrupa datos relacionados en pares clave-valor. Cada propiedad tiene un nombre y un valor. Puede también tener funciones (métodos).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`let persona = { nombre: \"Ana\", edad: 30, saludar: () => \"Hola\" };` → `persona.nombre` es \"Ana\", `persona.saludar()` devuelve \"Hola\".",
            },
        ],
        analogia:
            "Un objeto es como una ficha de contacto: tiene campos con nombre (nombre, teléfono, email) y cada campo tiene un valor. Todo lo de esa persona está agrupado en una sola ficha.",
        tags: ["objeto", "clave-valor", "propiedades"],
    },
    {
        id: 50,
        slug: "que-es-un-modulo",
        nivelId: 3,
        orden: 13,
        titulo: "¿Qué es un módulo?",
        definicion:
            "Es un archivo o bloque de código que agrupa funcionalidad relacionada y puede exportarse para usarse en otros archivos. Permite dividir un programa grande en partes más pequeñas y manejables.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En JavaScript, `math.js` puede exportar `sumar` y `restar`. Otro archivo hace `import { sumar } from './math.js'` y las usa.",
            },
        ],
        analogia:
            "Un módulo es como una caja de herramientas etiquetada. Tienes la caja \"destornilladores\", la caja \"llaves\", la caja \"martillos\". Cuando necesitas algo, abres solo la caja correcta en vez de revolver todo el taller.",
        tags: ["modulo", "import-export", "organizacion"],
    },
    {
        id: 51,
        slug: "que-es-una-dependencia",
        nivelId: 3,
        orden: 14,
        titulo: "¿Qué es una dependencia?",
        definicion:
            "Es código externo que tu proyecto necesita para funcionar. En vez de escribirlo tú, lo instalas y lo usas. Puede ser una librería, un framework, una herramienta.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Si haces una web con React, React es una dependencia. Si usas Express para un servidor, Express es una dependencia. Vienen con versiones específicas.",
            },
        ],
        analogia:
            "Las dependencias son como los ingredientes que compras en el supermercado en vez de cultivarlos tú. No vas a sembrar trigo para hacer pan: compras la harina ya lista.",
        tags: ["dependencias", "paquetes", "npm"],
    },
    {
        id: 52,
        slug: "que-es-un-gestor-de-paquetes",
        nivelId: 3,
        orden: 15,
        titulo: "¿Qué es un gestor de paquetes?",
        definicion:
            "Es una herramienta que instala, actualiza y elimina dependencias automáticamente. Sabe de dónde bajarlas, qué versiones, y resuelve conflictos entre ellas. Ejemplos: npm (JavaScript), pip (Python), cargo (Rust), composer (PHP).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Escribes `npm install react` y npm descarga React y todo lo que React necesita, lo guarda en `node_modules` y actualiza `package.json`.",
            },
        ],
        analogia:
            "Un gestor de paquetes es como un supermercado con delivery. Le pides \"harina, huevos, leche\" y él te los trae, sabe dónde encontrarlos, y si falta algo, busca un sustituto. Tú no vas proveedor por proveedor.",
        tags: ["gestor-de-paquetes", "npm", "dependencias"],
    },
    {
        id: 53,
        slug: "que-es-una-excepcion",
        nivelId: 3,
        orden: 16,
        titulo: "¿Qué es una excepción?",
        definicion:
            "Es un evento que interrumpe el flujo normal del programa cuando algo sale mal. Se puede \"lanzar\" (throw) y \"atrapar\" (catch) para manejarlo sin que el programa se caiga.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`try { dividir(5, 0); } catch (e) { console.log(\"No se puede dividir por cero\"); }`. Sin el catch, el programa se rompería.",
            },
        ],
        analogia:
            "Una excepción es como cuando se pincha una llanta en el camino. El viaje se interrumpe. Pero si tienes un neumático de repuesto (catch), puedes cambiar la llanta y seguir. Si no, te quedas tirado.",
        tags: ["excepciones", "errores", "try-catch"],
    },
    {
        id: 54,
        slug: "que-es-el-scope",
        nivelId: 3,
        orden: 17,
        titulo: "¿Qué es el scope?",
        definicion:
            "Es el alcance o contexto donde una variable existe y es accesible. Fuera de ese scope, la variable no existe. Hay scope global, de función, de bloque.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Si declaras `let x = 5` dentro de una función, fuera de esa función `x` no existe. Si la declaras fuera, es global y todos la ven.",
            },
        ],
        analogia:
            "El scope es como el alcance de tu voz. Lo que dices en tu casa (scope local), solo lo oyen los de tu casa. Lo que dices por un megáfono en la plaza (scope global), lo oyen todos. Fuera del alcance, nadie te escucha.",
        tags: ["scope", "variables", "ambito"],
    },
    {
        id: 55,
        slug: "que-es-la-programacion-asincrona",
        nivelId: 3,
        orden: 18,
        titulo: "¿Qué es la programación asíncrona?",
        definicion:
            "Es un estilo donde el programa no espera a que una tarea termine para seguir con otra. Lanza la tarea, sigue ejecutando otras cosas, y cuando la tarea termina, la retoma. Se usa para operaciones lentas: redes, archivos, bases de datos.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Pides datos a una API. En vez de congelar toda la app esperando la respuesta, sigues mostrando la interfaz y, cuando llegan los datos, actualizas la pantalla.",
            },
        ],
        analogia:
            "La programación asíncrona es como pedir comida a domicilio. No te quedas parado en la puerta esperando. Sigues haciendo cosas en casa y, cuando suena el timbre, atiendes el pedido.",
        tags: ["asincronia", "concurrency", "event-loop"],
    },
    {
        id: 56,
        slug: "que-es-una-promesa",
        nivelId: 3,
        orden: 19,
        titulo: "¿Qué es una promesa?",
        definicion:
            "Es un objeto que representa un valor que *todavía no está* pero que estará en el futuro. Puede estar pendiente, resuelta (éxito) o rechazada (error). Se maneja con `.then()` y `.catch()`.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`fetch('https://api.com/datos').then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));`.",
            },
        ],
        analogia:
            "Una promesa es como el ticket que te dan cuando dejas ropa a lavar. No tienes la ropa aún, pero tienes la promesa de que estará lista. Puedes volver luego (then) o te avisan si hubo problema (catch).",
        tags: ["promesas", "then-catch", "asincronia"],
    },
    {
        id: 57,
        slug: "que-es-async-await",
        nivelId: 3,
        orden: 20,
        titulo: "¿Qué es `async/await`?",
        definicion:
            "Es una forma más limpia y legible de trabajar con promesas. `async` marca una función como asíncrona; `await` pausa la ejecución de esa función hasta que la promesa se resuelva, sin bloquear el resto del programa.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "javascript",
                contenido:
                    "async function obtenerDatos() {\n  const res = await fetch('https://api.com/datos');\n  const data = await res.json();\n  console.log(data);\n}",
            },
            {
                tipo: "texto",
                contenido:
                    "Es lo mismo que la promesa con `.then`, pero se lee como código síncrono.",
            },
        ],
        analogia:
            "`async/await` es como pedir comida y esperar en la mesa en vez de estar yendo y viniendo a la puerta. Te sientas, esperas (await) que llegue el plato, y cuando llega, comes. El resto del restaurante sigue funcionando mientras tanto.",
        tags: ["async-await", "promesas", "asincronia"],
    },
    {
        id: 58,
        slug: "que-es-una-estructura-de-datos",
        nivelId: 3,
        orden: 21,
        titulo: "¿Qué es una estructura de datos?",
        definicion:
            "Es una forma organizada de guardar y acceder a datos. Cada una tiene ventajas y desventajas según qué necesites hacer: buscar, insertar, borrar, ordenar. Ejemplos: arrays, listas enlazadas, pilas, colas, árboles, grafos, hash maps.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un array es rápido para acceder por índice. Un hash map es rápido para buscar por clave. Un árbol binario es rápido para buscar en datos ordenados. Eliges según el problema.",
            },
        ],
        analogia:
            "Las estructuras de datos son como los muebles de una casa. Una biblioteca (array) es buena para guardar libros ordenados. Un cajón de cubiertos (hash map) es bueno para encontrar el tenedor rápido. Un armario con cajas (árbol) es bueno para organizar por categorías. Cada mueble sirve para algo distinto.",
        tags: ["estructuras-de-datos", "arrays", "hash-map"],
    },
    {
        id: 59,
        slug: "que-es-la-complejidad-algoritmica",
        nivelId: 3,
        orden: 22,
        titulo: "¿Qué es la complejidad algorítmica?",
        definicion:
            "Es una medida de cuánto tiempo o memoria consume un algoritmo según crece el tamaño de los datos. Se expresa con notación Big O: O(1), O(log n), O(n), O(n²), etc. No mide segundos exactos, sino cómo escala.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Buscar en un array desordenado es O(n): si hay 1000 elementos, revisas hasta 1000. Buscar en un array ordenado con búsqueda binaria es O(log n): con 1000 elementos, solo ~10 pasos. Una diferencia enorme.",
            },
        ],
        analogia:
            "La complejidad algorítmica es como el esfuerzo de buscar un libro en una biblioteca. Si los libros están tirados al azar (O(n)), tienes que revisar uno por uno. Si están ordenados por título (O(log n)), vas directo al estante correcto. Con 10 libros da igual; con un millón, la diferencia es abismal.",
        tags: ["big-o", "rendimiento", "algoritmos"],
    },
    {
        id: 60,
        slug: "que-es-html",
        nivelId: 4,
        orden: 1,
        titulo: "¿Qué es HTML?",
        definicion:
            "Es el lenguaje de marcado que define la *estructura* de una página web. No es un lenguaje de programación (no tiene lógica, ni condiciones, ni bucles). Usa \"etiquetas\" para decir qué es cada cosa: un título, un párrafo, una imagen, un enlace.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "html",
                contenido:
                    '<h1>Mi tienda</h1>\n<p>Bienvenido a la tienda</p>\n<img src="logo.png" />\n<a href="contacto.html">Contacto</a>',
            },
            {
                tipo: "texto",
                contenido:
                    "Eso le dice al navegador: hay un título, un párrafo, una imagen y un enlace.",
            },
        ],
        analogia:
            "HTML es como el esqueleto de una casa. Define dónde va cada pared, cada puerta, cada ventana. No decide colores ni decoración, solo la estructura: qué hay y dónde.",
        tags: ["html", "marcado", "estructura"],
    },
    {
        id: 61,
        slug: "que-es-css",
        nivelId: 4,
        orden: 2,
        titulo: "¿Qué es CSS?",
        definicion:
            "Es el lenguaje que define la *presentación* visual de una página web: colores, tamaños, tipografías, márgenes, posiciones, animaciones. Trabaja sobre el HTML, dándole estilo.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "css",
                contenido:
                    "h1 { color: blue; font-size: 32px; }\np { color: gray; margin: 10px; }",
            },
            {
                tipo: "texto",
                contenido:
                    "Eso hace que los títulos sean azules y grandes, y los párrafos grises con espacio alrededor.",
            },
        ],
        analogia:
            "Si HTML es el esqueleto de la casa, CSS es la pintura, los muebles, la decoración y la iluminación. La casa ya existe, pero CSS decide cómo se ve y cómo se siente.",
        tags: ["css", "estilos", "presentacion"],
    },
    {
        id: 62,
        slug: "que-es-javascript",
        nivelId: 4,
        orden: 3,
        titulo: "¿Qué es JavaScript?",
        definicion:
            "Es el lenguaje de programación que da *comportamiento* a las páginas web. Se ejecuta en el navegador y permite interactividad: clics, animaciones, validaciones, peticiones al servidor, etc.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un botón que al hacer clic cambia el color de la página, un formulario que valida que el email esté bien escrito, un carrito de compras que suma precios en tiempo real. Todo eso es JavaScript.",
            },
        ],
        analogia:
            "Si HTML es el esqueleto y CSS la apariencia, JavaScript es el sistema nervioso y muscular: lo que hace que la casa \"reaccione\". Cuando tocas un interruptor, se prende la luz. Eso es JavaScript.",
        tags: ["javascript", "interactividad", "navegador"],
    },
    {
        id: 63,
        slug: "que-es-typescript",
        nivelId: 4,
        orden: 4,
        titulo: "¿Qué es TypeScript?",
        definicion:
            "Es JavaScript con *tipos*. Le agregas a cada variable, función y objeto qué tipo de dato maneja. El código se escribe en TypeScript y luego se \"compila\" a JavaScript para que el navegador lo entienda. Te avisa de errores antes de ejecutar.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "typescript",
                contenido:
                    "function sumar(a: number, b: number): number {\n  return a + b;\n}",
            },
            {
                tipo: "texto",
                contenido:
                    "Si llamas `sumar(\"hola\", 5)`, TypeScript te avisa antes de ejecutar: \"eso no es un número\".",
            },
        ],
        analogia:
            "JavaScript es como escribir una carta sin revisar. TypeScript es como tener un corrector que te avisa \"aquí falta una coma\", \"esto no concuerda\" antes de enviarla. Al final envías la misma carta, pero sin errores tontos.",
        tags: ["typescript", "tipos", "estatico"],
    },
    {
        id: 64,
        slug: "que-es-un-lenguaje-de-cliente",
        nivelId: 4,
        orden: 5,
        titulo: "¿Qué es un lenguaje de cliente?",
        definicion:
            "Es un lenguaje que se ejecuta en el dispositivo del usuario (navegador, celular, app). El código viaja al cliente y ahí corre. Ejemplo principal: JavaScript en el navegador.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando abres una web y ves animaciones, validaciones de formulario o cambios sin recargar, eso es JavaScript corriendo en tu navegador, no en el servidor.",
            },
        ],
        analogia:
            "Un lenguaje de cliente es como una receta que te dan para que cocines en tu casa. El restaurante (servidor) te manda los ingredientes y las instrucciones; tú (cliente) preparas el plato en tu cocina.",
        tags: ["lenguaje-de-cliente", "frontend", "navegador"],
    },
    {
        id: 65,
        slug: "que-es-un-lenguaje-de-servidor",
        nivelId: 4,
        orden: 6,
        titulo: "¿Qué es un lenguaje de servidor?",
        definicion:
            "Es un lenguaje que se ejecuta en el servidor, no en el navegador. El usuario nunca ve ese código; solo ve el resultado. Se usa para lógica de negocio, bases de datos, autenticación. Ejemplos: Node.js, Python, PHP, Ruby, Java, Go.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando inicias sesión en una web, el servidor (en PHP, Python o Node) verifica tu usuario y contraseña contra la base de datos. Eso nunca se ejecuta en tu navegador.",
            },
        ],
        analogia:
            "Un lenguaje de servidor es como la cocina de un restaurante. Los clientes nunca entran ahí; solo ven el plato terminado. Pero todo el trabajo pesado y secreto (recetas, ingredientes) pasa en la cocina.",
        tags: ["lenguaje-de-servidor", "backend", "nodejs"],
    },
    {
        id: 66,
        slug: "que-es-el-dom",
        nivelId: 4,
        orden: 7,
        titulo: "¿Qué es el DOM?",
        definicion:
            "Es la representación en memoria de la página HTML como un árbol de objetos. Cada etiqueta HTML se convierte en un \"nodo\" que JavaScript puede leer, modificar, agregar o eliminar. Es el puente entre el HTML y el código.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Si en JavaScript haces `document.querySelector(\"h1\").textContent = \"Hola\"`, estás cambiando el texto del `<h1>` en el DOM, y el usuario ve el cambio al instante.",
            },
        ],
        analogia:
            "El DOM es como el plano interactivo de una casa. El HTML es el plano dibujado en papel; el DOM es ese mismo plano pero en una pantalla táctil donde puedes mover paredes, cambiar puertas y pintar en tiempo real.",
        tags: ["dom", "nodos", "javascript"],
    },
    {
        id: 67,
        slug: "que-es-un-evento",
        nivelId: 4,
        orden: 8,
        titulo: "¿Qué es un evento?",
        definicion:
            "Es una acción que ocurre en la página y que JavaScript puede \"escuchar\" y responder. Ejemplos: clic, tecla presionada, mouse encima, scroll, envío de formulario, carga de página.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "javascript",
                contenido:
                    'boton.addEventListener("click", () => {\n  alert("Hiciste clic");\n});',
            },
            {
                tipo: "texto",
                contenido:
                    "Cuando el usuario hace clic, se dispara el evento y se ejecuta la función.",
            },
        ],
        analogia:
            "Un evento es como el timbre de una casa. Alguien lo toca (clic, tecla), suena (se dispara), y alguien dentro responde (la función). Sin timbre, no te enteras de que llamaron.",
        tags: ["eventos", "dom", "interactividad"],
    },
    {
        id: 68,
        slug: "que-es-la-manipulacion-del-dom",
        nivelId: 4,
        orden: 9,
        titulo: "¿Qué es la manipulación del DOM?",
        definicion:
            "Es usar JavaScript para cambiar el HTML/CSS de la página en tiempo real: agregar elementos, cambiar textos, modificar estilos, eliminar nodos, etc. Es lo que hace que la web sea dinámica.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un carrito de compras: al hacer clic en \"agregar\", JavaScript crea un nuevo `<li>` en la lista del carrito, sin recargar la página.",
            },
        ],
        analogia:
            "La manipulación del DOM es como un titiritero moviendo los hilos de una marioneta. La marioneta (página) está quieta, pero el titiritero (JavaScript) la mueve, la cambia, la hace reaccionar.",
        tags: ["dom", "manipulacion", "javascript"],
    },
    {
        id: 69,
        slug: "que-es-el-diseno-responsive",
        nivelId: 4,
        orden: 10,
        titulo: "¿Qué es el diseño responsive?",
        definicion:
            "Es diseñar páginas que se adapten a cualquier tamaño de pantalla: celular, tablet, laptop, monitor grande. Usa CSS flexible (media queries, unidades relativas, flexbox, grid) para que todo se vea bien en cualquier dispositivo.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una web que en celular muestra el menú como un ícono de hamburguesa y en desktop lo muestra como una barra horizontal. Mismo HTML, distinto CSS según el ancho.",
            },
        ],
        analogia:
            "El diseño responsive es como la ropa elástica: se adapta a tu cuerpo sin importar tu tamaño. No tienes una camiseta para cada talla; una sola se ajusta a todas.",
        tags: ["responsive", "css", "mobile-first"],
    },
    {
        id: 70,
        slug: "que-es-la-accesibilidad-web",
        nivelId: 4,
        orden: 11,
        titulo: "¿Qué es la accesibilidad web?",
        definicion:
            "Es diseñar y programar webs para que *todas* las personas puedan usarlas, incluidas personas con discapacidades visuales, auditivas, motoras o cognitivas. Incluye texto alternativo en imágenes, contraste de colores, navegación con teclado, lectores de pantalla, etc.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una imagen con `alt=\"Logo de la tienda\"` permite que un lector de pantalla le diga a una persona ciega qué hay ahí. Un botón con buen contraste se ve bien para alguien con baja visión.",
            },
        ],
        analogia:
            "La accesibilidad es como poner rampas además de escaleras en un edificio. No es solo para sillas de ruedas: también sirve para carritos de bebé, maletas, ancianos. Una web accesible es más usable para todos.",
        tags: ["accesibilidad", "a11y", "ux"],
    },
    {
        id: 71,
        slug: "que-es-la-semantica-html",
        nivelId: 4,
        orden: 12,
        titulo: "¿Qué es la semántica HTML?",
        definicion:
            "Es usar las etiquetas HTML correctas según su significado, no solo por su apariencia. Usar `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` en vez de puros `<div>`. Ayuda a navegadores, buscadores y lectores de pantalla a entender la estructura.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "html",
                contenido:
                    "<nav>...</nav>\n<main>\n  <article>...</article>\n</main>\n<footer>...</footer>",
            },
            {
                tipo: "texto",
                contenido: "Es más semántico que `<div><div><div>...`.",
            },
        ],
        analogia:
            "La semántica HTML es como etiquetar las cajas de una mudanza. Si todas dicen \"cosas\", no sabes qué hay. Si dicen \"cocina\", \"ropa\", \"libros\", todo es más claro y rápido de encontrar.",
        tags: ["html", "semantica", "seo"],
    },
    {
        id: 72,
        slug: "que-es-un-framework",
        nivelId: 4,
        orden: 13,
        titulo: "¿Qué es un framework?",
        definicion:
            "Es un conjunto de herramientas, reglas y estructura predefinida que te da un \"esqueleto\" para construir aplicaciones. Tú rellenas los huecos; el framework decide cómo organizar todo. Ejemplos: React, Angular, Vue, Django, Laravel, Next.js.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Con React, ya tienes componentes, estado, enrutamiento y renderizado resueltos. Tú solo escribes la lógica de tu app. Sin React, tendrías que construir todo eso desde cero.",
            },
        ],
        analogia:
            "Un framework es como comprar una casa prefabricada. Ya viene con planos, paredes, cañerías y electricidad. Tú solo eliges muebles y pintura. Si la construyeras desde cero (sin framework), tendrías que hacer todo tú.",
        tags: ["framework", "react", "angular"],
    },
    {
        id: 73,
        slug: "que-es-una-libreria",
        nivelId: 4,
        orden: 14,
        titulo: "¿Qué es una librería?",
        definicion:
            "Es un conjunto de funciones o utilidades listas para usar. No te impone una estructura; tú la llamas cuando la necesitas. Ejemplos: jQuery, Lodash, Axios, D3.js.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`axios.get(\"https://api.com/datos\")` te da una forma fácil de hacer peticiones HTTP. Sin Axios, usarías `fetch` con más código manual.",
            },
            {
                tipo: "texto",
                contenido:
                    "Diferencia clave framework vs librería: El framework te llama a ti (te impone estructura); tú llamas a la librería (la usas cuando quieres).",
            },
        ],
        analogia:
            "Una librería es como una caja de herramientas. Sacas el martillo cuando lo necesitas, pero tú decides cómo construir la casa. No te impone un plano, solo te da herramientas.",
        tags: ["libreria", "utilidades", "axios"],
    },
    {
        id: 74,
        slug: "que-es-un-componente",
        nivelId: 4,
        orden: 15,
        titulo: "¿Qué es un componente?",
        definicion:
            "Es una pieza reutilizable de interfaz con su propia lógica y estilo. Puede ser un botón, una tarjeta, un menú, un formulario. En frameworks como React o Vue, todo se construye combinando componentes.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un `<Boton>` que usas en 20 lugares distintos. Si cambias su estilo, cambia en los 20. Un `<TarjetaProducto>` que muestra imagen, nombre y precio, reutilizado para cada producto.",
            },
        ],
        analogia:
            "Un componente es como una pieza de LEGO. Puedes usar la misma pieza en muchas construcciones distintas. Si mejoras la pieza, mejora en todas las construcciones donde la usaste.",
        tags: ["componente", "reutilizacion", "react"],
    },
    {
        id: 75,
        slug: "que-es-el-estado-de-una-interfaz",
        nivelId: 4,
        orden: 16,
        titulo: "¿Qué es el estado de una interfaz?",
        definicion:
            "Es el conjunto de datos que describen la situación actual de la UI en un momento dado: qué está cargando, qué está seleccionado, qué texto hay en un input, si el menú está abierto, etc. Cuando el estado cambia, la UI se actualiza.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En un formulario, el estado incluye el valor de cada campo, si hay errores, si está enviando. Cuando escribes, el estado cambia y el campo se actualiza.",
            },
        ],
        analogia:
            "El estado es como la memoria de una conversación. Recuerda qué se dijo, quién habló, en qué tono. Si olvidas el estado, la conversación no tiene sentido. La UI sin estado es como alguien con amnesia: no sabe qué pasó antes.",
        tags: ["estado", "ui", "reactividad"],
    },
    {
        id: 76,
        slug: "que-es-el-enrutamiento-frontend",
        nivelId: 4,
        orden: 17,
        titulo: "¿Qué es el enrutamiento frontend?",
        definicion:
            "Es manejar las \"rutas\" (URLs) dentro de una aplicación frontend sin recargar la página. Cuando cambias de `/productos` a `/contacto`, el frontend muestra otro componente sin pedir toda la página al servidor otra vez.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En React usas React Router; en Vue, Vue Router. Al hacer clic en un enlace, la URL cambia y el componente correspondiente se renderiza, pero la página no se recarga.",
            },
        ],
        analogia:
            "El enrutamiento frontend es como cambiar de canal en la TV sin apagar y prender el televisor. La TV (la app) sigue encendida; solo cambia lo que muestra la pantalla (el componente).",
        tags: ["enrutamiento", "router", "spa"],
    },
    {
        id: 77,
        slug: "que-es-renderizar-una-pagina",
        nivelId: 4,
        orden: 18,
        titulo: "¿Qué es renderizar una página?",
        definicion:
            "Es el proceso de convertir código (HTML, CSS, JavaScript, datos) en píxeles visibles en la pantalla. El navegador interpreta el código, calcula posiciones, aplica estilos y dibuja todo.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando abres una web, el navegador lee el HTML, aplica el CSS, ejecuta el JavaScript, pide imágenes y las pinta. Eso es renderizar.",
            },
        ],
        analogia:
            "Renderizar es como montar una obra de teatro. El guion (HTML), el vestuario (CSS) y los actores (JavaScript) se combinan para dar la función (lo que ves en pantalla). Sin el montaje, solo hay texto en un papel.",
        tags: ["renderizado", "navegador", "pantalla"],
    },
    {
        id: 78,
        slug: "que-es-ssr",
        nivelId: 4,
        orden: 19,
        titulo: "¿Qué es SSR?",
        definicion:
            "*Server-Side Rendering*. El HTML se genera en el servidor y se envía ya armado al navegador. El usuario ve contenido de inmediato; luego JavaScript lo hace interactivo. Mejora SEO y primera carga.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Next.js en modo SSR: cuando pides `/productos`, el servidor consulta la base de datos, arma el HTML con los productos y te lo envía listo. Ves los productos al instante.",
            },
        ],
        analogia:
            "SSR es como pedir comida ya preparada. El restaurante (servidor) cocina y te entrega el plato listo para comer. No esperas a cocinarlo tú.",
        tags: ["ssr", "renderizado", "nextjs"],
    },
    {
        id: 79,
        slug: "que-es-csr",
        nivelId: 4,
        orden: 20,
        titulo: "¿Qué es CSR?",
        definicion:
            "*Client-Side Rendering*. El servidor envía un HTML casi vacío y un montón de JavaScript. El navegador ejecuta ese JavaScript, pide datos y arma la página en el cliente. La primera carga es más lenta, pero luego la navegación es rapidísima.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una app hecha con Create React App. Al entrar, ves un \"loading\" y luego la app aparece. Todo el renderizado pasa en tu navegador.",
            },
        ],
        analogia:
            "CSR es como pedir los ingredientes y cocinar tú en casa. El restaurante (servidor) te manda los ingredientes crudos (HTML vacío + JS); tú (cliente) cocinas el plato (renderizas la página). Tarda más al inicio, pero luego tienes control total.",
        tags: ["csr", "renderizado", "spa"],
    },
    {
        id: 80,
        slug: "que-es-ssg",
        nivelId: 4,
        orden: 21,
        titulo: "¿Qué es SSG?",
        definicion:
            "*Static Site Generation*. El HTML se genera *una sola vez*, en el momento de compilar/construir el sitio, y se guarda como archivos estáticos. Cada visita recibe el mismo HTML ya listo. Rapidísimo, pero el contenido no cambia hasta que vuelvas a generar.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un blog hecho con Astro, Hugo o Next.js en modo estático. Los artículos se generan al hacer build y se sirven como archivos `.html` fijos. Carga instantánea, pero si publicas algo nuevo, hay que regenerar.",
            },
        ],
        analogia:
            "SSG es como imprimir un libro. Una vez impreso, todas las copias son idénticas y se entregan al instante. Pero si quieres cambiar una página, tienes que reimprimir todo el libro.",
        tags: ["ssg", "estatico", "build"],
    },
    {
        id: 81,
        slug: "que-es-una-api",
        nivelId: 5,
        orden: 1,
        titulo: "¿Qué es una API?",
        definicion:
            "*Application Programming Interface*. Es un conjunto de reglas y \"puertas de entrada\" que un programa expone para que otros programas le pidan cosas. No es una interfaz visual: es un contrato entre dos sistemas para intercambiar datos.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "La API de Mercado Libre permite que otra app pregunte \"dame los productos de esta tienda\" y reciba los datos en JSON. La app no entra a la base de datos de Mercado Libre; solo usa su API.",
            },
        ],
        analogia:
            "Una API es como el menú de un restaurante. Tú no entras a la cocina a cocinar; pides del menú (los endpoints disponibles) y el restaurante (el sistema) te trae lo que pediste. El menú define qué puedes pedir y cómo.",
        tags: ["api", "interfaces", "contratos"],
    },
    {
        id: 82,
        slug: "que-es-una-api-rest",
        nivelId: 5,
        orden: 2,
        titulo: "¿Qué es una API REST?",
        definicion:
            "Es un estilo de diseño de APIs que usa HTTP y sus métodos (GET, POST, PUT, PATCH, DELETE) sobre *recursos* identificados por URLs. Cada URL representa una cosa (usuario, producto, pedido), y los métodos dicen qué hacer con ella. Es el estilo más común hoy.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "- `GET /productos` → lista productos\n- `POST /productos` → crea uno\n- `GET /productos/5` → ve el producto 5\n- `DELETE /productos/5` → borra el producto 5",
            },
        ],
        analogia:
            "REST es como una biblioteca bien organizada: cada libro tiene su ubicación (URL), y puedes pedirlo (GET), agregar uno nuevo (POST), reemplazarlo (PUT) o retirarlo (DELETE). Todo sigue un orden predecible.",
        tags: ["rest", "api", "recursos"],
    },
    {
        id: 83,
        slug: "que-es-un-endpoint",
        nivelId: 5,
        orden: 3,
        titulo: "¿Qué es un endpoint?",
        definicion:
            "Es una URL específica de una API donde puedes pedir algo. Es una \"puerta\" concreta. Cada endpoint hace una cosa distinta.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`https://api.tienda.com/productos` es un endpoint. `https://api.tienda.com/usuarios` es otro. Cada uno responde a peticiones distintas.",
            },
        ],
        analogia:
            "Un endpoint es como una ventanilla específica en una oficina pública. Hay ventanilla para pasaportes, otra para licencias, otra para impuestos. Cada una atiende un trámite distinto, aunque estén en el mismo edificio (el dominio).",
        tags: ["endpoint", "api", "urls"],
    },
    {
        id: 84,
        slug: "que-es-json",
        nivelId: 5,
        orden: 4,
        titulo: "¿Qué es JSON?",
        definicion:
            "*JavaScript Object Notation*. Es un formato de texto para representar datos estructurados: objetos, listas, números, textos, booleanos. Es el idioma estándar en que las APIs envían y reciben datos.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "json",
                contenido:
                    '{\n  "nombre": "Ana",\n  "edad": 30,\n  "hobbies": ["leer", "correr"],\n  "activo": true\n}',
            },
            {
                tipo: "texto",
                contenido: "Eso es JSON. Legible por humanos y por máquinas.",
            },
        ],
        analogia:
            "JSON es como una ficha de datos escrita en un idioma universal. Todos los sistemas (Python, JavaScript, Java) entienden ese formato, así que pueden intercambiar información sin problemas.",
        tags: ["json", "formato", "datos"],
    },
    {
        id: 85,
        slug: "que-es-un-servidor-http",
        nivelId: 5,
        orden: 5,
        titulo: "¿Qué es un servidor HTTP?",
        definicion:
            "Es un programa que escucha peticiones HTTP en un puerto, las procesa y devuelve respuestas. Puede servir archivos estáticos, ejecutar lógica, consultar bases de datos, etc. Ejemplos: Nginx, Apache, Express (Node.js), Django (Python).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando entras a una web, tu navegador manda una petición HTTP. Un servidor HTTP (por ejemplo Nginx) la recibe, decide qué hacer y devuelve el HTML, CSS, JS o los datos.",
            },
        ],
        analogia:
            "Un servidor HTTP es como un recepcionista incansable. Está en la puerta, escucha a todos los que llegan (peticiones), decide a quién dirigir cada uno, y responde. Nunca duerme, nunca se cansa.",
        tags: ["servidor-http", "nginx", "express"],
    },
    {
        id: 86,
        slug: "que-es-el-enrutamiento-backend",
        nivelId: 5,
        orden: 6,
        titulo: "¿Qué es el enrutamiento backend?",
        definicion:
            "Es la lógica que decide qué código ejecutar según la URL y el método HTTP de la petición. Es el \"mapa\" que conecta cada endpoint con su función correspondiente.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "javascript",
                contenido:
                    'app.get("/productos", listarProductos);\napp.post("/productos", crearProducto);\napp.delete("/productos/:id", borrarProducto);',
            },
            {
                tipo: "texto",
                contenido:
                    "Cuando llega un `GET /productos`, se ejecuta `listarProductos`.",
            },
        ],
        analogia:
            "El enrutamiento backend es como el conmutador de una central telefónica antigua. Según el número que marques (URL) y el tipo de llamada (método), te conecta con la persona correcta (función).",
        tags: ["rutas", "backend", "express"],
    },
    {
        id: 87,
        slug: "que-es-un-controlador",
        nivelId: 5,
        orden: 7,
        titulo: "¿Qué es un controlador?",
        definicion:
            "Es la función que recibe una petición HTTP, extrae los datos necesarios, llama a la lógica de negocio y devuelve una respuesta. Es el \"cerebro\" de cada endpoint.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "javascript",
                contenido:
                    "function crearProducto(req, res) {\n  const { nombre, precio } = req.body;\n  const producto = servicio.crear(nombre, precio);\n  res.status(201).json(producto);\n}",
            },
        ],
        analogia:
            "Un controlador es como un mesero: recibe tu pedido, lo lleva a la cocina (servicio), espera el plato y te lo trae. No cocina ni decide la receta; solo coordina entre tú (cliente) y la cocina (lógica).",
        tags: ["controlador", "backend", "patron-mvc"],
    },
    {
        id: 88,
        slug: "que-es-un-servicio",
        nivelId: 5,
        orden: 8,
        titulo: "¿Qué es un servicio?",
        definicion:
            "Es la capa donde vive la lógica de negocio. El controlador solo coordina; el servicio decide *qué* hacer y *cómo*: validar, calcular, consultar la base, aplicar reglas, etc.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`productoServicio.crear(nombre, precio)` valida que el precio sea positivo, verifica que el nombre no esté duplicado, guarda en la base y devuelve el producto creado.",
            },
        ],
        analogia:
            "El servicio es como el chef de un restaurante. El mesero (controlador) le pasa el pedido; el chef decide cómo prepararlo, con qué ingredientes, en qué orden. El mesero no cocina: solo entrega.",
        tags: ["servicio", "logica-de-negocio", "backend"],
    },
    {
        id: 89,
        slug: "que-es-un-middleware",
        nivelId: 5,
        orden: 9,
        titulo: "¿Qué es un middleware?",
        definicion:
            "Es una función que se ejecuta *entre* la petición y la respuesta, antes o después del controlador. Sirve para cosas transversales: autenticación, logging, validación, CORS, manejo de errores.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "javascript",
                contenido:
                    'app.use((req, res, next) => {\n  console.log("Petición recibida:", req.url);\n  next();\n});',
            },
            {
                tipo: "texto",
                contenido:
                    "Ese middleware registra cada petición antes de que llegue al controlador.",
            },
        ],
        analogia:
            "Un middleware es como los filtros de seguridad en un aeropuerto. Antes de llegar a la puerta de embarque (controlador), pasas por varios controles: revisión de pasaporte, rayos X, detector de metales. Cada filtro hace algo y te deja pasar (o no).",
        tags: ["middleware", "interceptor", "backend"],
    },
    {
        id: 90,
        slug: "que-es-una-regla-de-negocio",
        nivelId: 5,
        orden: 10,
        titulo: "¿Qué es una regla de negocio?",
        definicion:
            "Es una restricción o condición propia del dominio del negocio. Define qué está permitido y qué no, según las reglas de la empresa o el sistema. No es una regla técnica: es una regla del \"mundo real\" del negocio.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "\"Un usuario no puede comprar más de 5 entradas por evento\". \"El saldo no puede ser negativo\". \"Un pedido no se puede cancelar después de enviado\". Eso son reglas de negocio.",
            },
        ],
        analogia:
            "Las reglas de negocio son como las reglas de un juego de mesa. No son reglas del tablero ni de los dados (técnicas), son reglas del juego: \"no puedes mover dos veces seguidas\", \"si caes en esta casilla, retrocedes\". Definen cómo se juega.",
        tags: ["reglas-de-negocio", "dominio", "logica"],
    },
    {
        id: 91,
        slug: "que-es-una-validacion",
        nivelId: 5,
        orden: 11,
        titulo: "¿Qué es una validación?",
        definicion:
            "Es verificar que los datos que llegan cumplan ciertas condiciones antes de procesarlos. Puede ser de formato, tipo, longitud, rango, etc. Evita errores y datos basura.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Antes de crear un usuario, validar que el email tenga `@`, que la contraseña tenga al menos 8 caracteres, que la edad sea un número positivo.",
            },
        ],
        analogia:
            "La validación es como el control de calidad en una fábrica. Antes de empacar un producto, revisas que no esté roto, que tenga todas las piezas, que cumpla las medidas. Si no pasa, se rechaza.",
        tags: ["validacion", "datos", "calidad"],
    },
    {
        id: 92,
        slug: "que-es-un-dto",
        nivelId: 5,
        orden: 12,
        titulo: "¿Qué es un DTO?",
        definicion:
            "*Data Transfer Object*. Es un objeto simple que se usa para transportar datos entre capas o entre sistemas. No tiene lógica: solo campos. Sirve para definir *qué* datos entran y salen de una API.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "typescript",
                contenido:
                    "class CrearProductoDTO {\n  nombre: string;\n  precio: number;\n  categoria: string;\n}",
            },
            {
                tipo: "texto",
                contenido:
                    "El controlador recibe un objeto con esa forma exacta y lo pasa al servicio.",
            },
        ],
        analogia:
            "Un DTO es como un formulario de correo. Tiene campos específicos (remitente, destinatario, asunto, mensaje). No hace nada por sí solo: solo transporta la información de un lugar a otro.",
        tags: ["dto", "objetos", "transferencia"],
    },
    {
        id: 93,
        slug: "que-es-la-serializacion",
        nivelId: 5,
        orden: 13,
        titulo: "¿Qué es la serialización?",
        definicion:
            "Es convertir un objeto en memoria (de tu lenguaje de programación) a un formato transportable (JSON, XML, binario) para enviarlo por la red o guardarlo. La operación inversa se llama deserialización.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En Node, `JSON.stringify({ nombre: \"Ana\" })` convierte el objeto a `'{\"nombre\":\"Ana\"}'`. El servidor lo envía; el cliente hace `JSON.parse(...)` y recupera el objeto.",
            },
        ],
        analogia:
            "La serialización es como empacar un mueble para mudanza. El mueble (objeto) no cabe en el camión tal cual; lo desarmas en piezas (formato transportable), lo envías, y al llegar lo rearmas (deserializas).",
        tags: ["serializacion", "json", "objetos"],
    },
    {
        id: 94,
        slug: "que-es-un-orm",
        nivelId: 5,
        orden: 14,
        titulo: "¿Qué es un ORM?",
        definicion:
            "*Object-Relational Mapping*. Es una herramienta que traduce entre objetos de tu lenguaje (clases, instancias) y tablas de una base de datos relacional. En vez de escribir SQL a mano, usas métodos del lenguaje. Ejemplos: Prisma, TypeORM, Sequelize, Hibernate, SQLAlchemy.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En vez de `SELECT * FROM usuarios WHERE id = 5`, haces `usuarioRepo.findOne({ id: 5 })`. El ORM genera el SQL por ti.",
            },
        ],
        analogia:
            "Un ORM es como un traductor entre tú y la base de datos. Tú hablas en \"objetos\" (tu idioma), la base habla en \"SQL\" (otro idioma). El ORM traduce en ambos sentidos para que no tengas que aprender el otro idioma.",
        tags: ["orm", "prisma", "base-de-datos"],
    },
    {
        id: 95,
        slug: "que-es-una-integracion-entre-servicios",
        nivelId: 5,
        orden: 15,
        titulo: "¿Qué es una integración entre servicios?",
        definicion:
            "Es hacer que dos sistemas distintos se comuniquen y trabajen juntos. Puede ser vía API, webhooks, colas de mensajes, bases compartidas, etc. Cada servicio hace lo suyo, pero se coordinan.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tu tienda online se integra con Mercado Pago para cobrar y con Andreani para enviar. Tu sistema no implementa pagos ni logística: se comunica con esos servicios.",
            },
        ],
        analogia:
            "La integración entre servicios es como una cadena de proveedores. Tu restaurante no cultiva vegetales ni cría vacas: se coordina con la verdulería y la carnicería. Cada uno hace lo suyo, pero trabajan juntos para servirte el plato.",
        tags: ["integracion", "servicios", "terceros"],
    },
    {
        id: 96,
        slug: "que-es-un-webhook",
        nivelId: 5,
        orden: 16,
        titulo: "¿Qué es un webhook?",
        definicion:
            "Es una URL que tú expones para que *otro sistema* te avise cuando pasa algo. En vez de preguntar \"¿ya pasó?\", el otro sistema te llama cuando ocurre. Es una comunicación inversa: el servidor te notifica a ti.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando alguien paga en Mercado Pago, Mercado Pago hace un `POST` a tu webhook `https://tienda.com/webhooks/pago` avisándote \"se confirmó el pago\". Tu sistema reacciona.",
            },
        ],
        analogia:
            "Un webhook es como el timbre de tu casa. No estás llamando cada 5 minutos a la puerta para ver si llegó alguien. Cuando alguien llega, toca el timbre y tú reaccionas. El que llega te avisa a ti.",
        tags: ["webhook", "notificaciones", "eventos"],
    },
    {
        id: 97,
        slug: "que-es-una-api-versionada",
        nivelId: 5,
        orden: 17,
        titulo: "¿Qué es una API versionada?",
        definicion:
            "Es incluir la versión de la API en la URL o en un header, para poder cambiar cosas sin romper a los clientes viejos. Si haces cambios incompatibles, sacas una nueva versión y los que usaban la anterior siguen funcionando.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`https://api.tienda.com/v1/productos` y `https://api.tienda.com/v2/productos`. La v1 sigue viva para clientes antiguos; la v2 tiene mejoras.",
            },
        ],
        analogia:
            "La versionada es como las ediciones de un manual. La edición 2020 sigue siendo válida para quien la compró. Si sacas la edición 2025 con cambios, no rompes a quien usa la vieja. Cada uno elige cuándo actualizarse.",
        tags: ["versionado", "api", "compatibilidad"],
    },
    {
        id: 98,
        slug: "que-es-la-idempotencia",
        nivelId: 5,
        orden: 18,
        titulo: "¿Qué es la idempotencia?",
        definicion:
            "Es la propiedad de una operación que, si se ejecuta varias veces, produce el mismo resultado que ejecutarla una sola vez. Es clave en APIs para evitar duplicados si el cliente reintenta.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`DELETE /productos/5` es idempotente: si lo llamas 1 o 10 veces, el producto 5 queda borrado (o ya no existe). `POST /productos` no lo es: si lo llamas 2 veces, creas 2 productos.",
            },
        ],
        analogia:
            "La idempotencia es como apretar el botón del ascensor. Si lo aprietas 1 vez o 10 veces, el ascensor viene igual. Pero si el botón fuera \"agregar piso\", cada apretada agregaría uno. Por eso los ascensores usan botones idempotentes.",
        tags: ["idempotencia", "http", "api"],
    },
    {
        id: 99,
        slug: "que-es-un-job-en-segundo-plano",
        nivelId: 5,
        orden: 19,
        titulo: "¿Qué es un job en segundo plano?",
        definicion:
            "Es una tarea que se ejecuta en el servidor sin que el usuario espere su resultado. Se dispara y sigue corriendo por detrás. Se usa para cosas lentas o pesadas: enviar mails, generar reportes, procesar imágenes.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando te registras en una web, el sistema no te hace esperar a que se envíe el mail de bienvenida. Encola un job y te responde al instante. El mail se manda en segundo plano.",
            },
        ],
        analogia:
            "Un job en segundo plano es como poner la lavadora y seguir con tu día. No te quedas mirando la lavadora hasta que termine. La pones, sigue girando por detrás, y cuando termina, te avisa (o lo revisas después).",
        tags: ["jobs", "background", "tareas"],
    },
    {
        id: 100,
        slug: "que-es-una-cola-de-mensajes",
        nivelId: 5,
        orden: 20,
        titulo: "¿Qué es una cola de mensajes?",
        definicion:
            "Es un sistema que guarda mensajes/tareas en orden y las entrega a quien las procesa (workers), una por una o en paralelo. Permite desacoplar quien produce de quien consume. Ejemplos: RabbitMQ, Kafka, Redis Queue, SQS.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tu web encola 1000 mails en una cola. Varios workers van tomando mails de la cola y enviándolos en paralelo. Si un mail falla, se reintenta. La web no se bloquea.",
            },
        ],
        analogia:
            "Una cola de mensajes es como la fila del supermercado. Cada cliente (mensaje) espera su turno. Hay varias cajas (workers) atendiendo. Si una caja se cierra, las demás siguen. Nadie se pierde: todos están en la fila esperando ser atendidos.",
        tags: ["colas", "mensajeria", "rabbitmq"],
    },
    {
        id: 101,
        slug: "que-es-una-base-de-datos",
        nivelId: 6,
        orden: 1,
        titulo: "¿Qué es una base de datos?",
        definicion:
            "Es un sistema organizado para guardar, buscar y modificar información de forma persistente. Los datos sobreviven aunque apagues el programa. Hay distintos tipos: relacionales, documentales, clave-valor, etc.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "La lista de usuarios de Instagram, los productos de Mercado Libre, los mensajes de WhatsApp. Todo eso vive en bases de datos.",
            },
        ],
        analogia:
            "Una base de datos es como un archivo gigante de una oficina, pero ordenado y con un bibliotecario ultrarrápido. Puedes guardar millones de documentos y encontrar cualquiera en milisegundos.",
        tags: ["base-de-datos", "persistencia", "datos"],
    },
    {
        id: 102,
        slug: "que-es-una-base-de-datos-relacional",
        nivelId: 6,
        orden: 2,
        titulo: "¿Qué es una base de datos relacional?",
        definicion:
            "Es un tipo de base de datos que organiza la información en *tablas* con filas y columnas, y las conecta mediante *relaciones* (claves foráneas). Usa SQL para consultar. Ejemplos: PostgreSQL, MySQL, SQL Server, Oracle.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una tabla `usuarios` y otra `pedidos`. Cada pedido tiene un `usuario_id` que apunta a quién lo hizo. Así sabes qué pedidos son de cada usuario.",
            },
        ],
        analogia:
            "Una base relacional es como una planilla de Excel con muchas hojas conectadas entre sí. La hoja \"Clientes\" se conecta con la hoja \"Pedidos\" mediante un número de cliente. Todo está vinculado.",
        tags: ["relacional", "postgresql", "mysql"],
    },
    {
        id: 103,
        slug: "que-es-una-tabla",
        nivelId: 6,
        orden: 3,
        titulo: "¿Qué es una tabla?",
        definicion:
            "Es una estructura dentro de una base relacional que agrupa datos del mismo tipo. Tiene filas (registros) y columnas (campos). Cada tabla representa una \"entidad\" del mundo: usuarios, productos, pedidos.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "La tabla `productos` tiene columnas `id`, `nombre`, `precio`, `stock`. Cada fila es un producto distinto.",
            },
        ],
        analogia:
            "Una tabla es como una hoja de cálculo. Tiene encabezados (columnas) y filas con datos. Cada hoja guarda un tipo de cosa distinta: una hoja para clientes, otra para productos.",
        tags: ["tabla", "filas", "columnas"],
    },
    {
        id: 104,
        slug: "que-es-un-registro",
        nivelId: 6,
        orden: 4,
        titulo: "¿Qué es un registro?",
        definicion:
            "Es una fila de una tabla. Representa *una instancia* concreta de la entidad. Cada registro tiene valores para cada columna.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En la tabla `productos`, un registro sería: `id=5, nombre=\"Zapatilla\", precio=50, stock=10`. Ese es *un* producto específico.",
            },
        ],
        analogia:
            "Si la tabla es una hoja de cálculo, cada registro es una fila. Es como una ficha de una persona en una guía telefónica: una entrada completa con todos sus datos.",
        tags: ["registro", "fila", "datos"],
    },
    {
        id: 105,
        slug: "que-es-una-columna",
        nivelId: 6,
        orden: 5,
        titulo: "¿Qué es una columna?",
        definicion:
            "Es un campo de la tabla. Define *qué tipo de dato* guarda cada registro en esa posición: nombre, precio, fecha, etc. Tiene un tipo (texto, número, fecha, booleano).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En `productos`, la columna `precio` es de tipo número decimal. Todos los registros tienen un valor ahí.",
            },
        ],
        analogia:
            "Las columnas son como los campos de un formulario. Todos los formularios tienen \"Nombre\", \"Apellido\", \"Email\". Cada formulario (registro) llena esos mismos campos.",
        tags: ["columna", "campo", "tipos"],
    },
    {
        id: 106,
        slug: "que-es-una-clave-primaria",
        nivelId: 6,
        orden: 6,
        titulo: "¿Qué es una clave primaria?",
        definicion:
            "Es la columna (o combinación de columnas) que identifica *de forma única* a cada registro de la tabla. No se repite, no puede ser nula. Generalmente es un `id` autoincremental.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En `usuarios`, el `id` es la clave primaria. No puede haber dos usuarios con `id=5`. Es lo que distingue a Ana de Pedro aunque se llamen igual.",
            },
        ],
        analogia:
            "La clave primaria es como el número de DNI. Aunque haya dos \"Juan Pérez\", cada uno tiene un DNI distinto que lo identifica sin ambigüedad.",
        tags: ["clave-primaria", "pk", "unicidad"],
    },
    {
        id: 107,
        slug: "que-es-una-clave-foranea",
        nivelId: 6,
        orden: 7,
        titulo: "¿Qué es una clave foránea?",
        definicion:
            "Es una columna que apunta a la clave primaria de *otra* tabla. Sirve para relacionar tablas y garantizar integridad referencial: no puedes crear un pedido con un `usuario_id` que no existe.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En `pedidos`, la columna `usuario_id` es clave foránea que apunta a `usuarios.id`. Así sabes a qué usuario pertenece cada pedido.",
            },
        ],
        analogia:
            "La clave foránea es como el número de socio en un club. En la ficha de cada actividad, pones el número de socio que la realizó. Ese número apunta a la ficha del socio. Sin socio válido, no hay actividad.",
        tags: ["clave-foranea", "fk", "integridad"],
    },
    {
        id: 108,
        slug: "que-es-una-relacion-entre-tablas",
        nivelId: 6,
        orden: 8,
        titulo: "¿Qué es una relación entre tablas?",
        definicion:
            "Es un vínculo entre dos tablas mediante claves. Hay tres tipos principales:\n- **Uno a uno:** un usuario tiene un perfil.\n- **Uno a muchos:** un usuario tiene muchos pedidos.\n- **Muchos a muchos:** un producto está en muchos pedidos, y un pedido tiene muchos productos (se usa tabla intermedia).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`usuarios` (1) → `pedidos` (N): un usuario puede tener muchos pedidos, pero cada pedido pertenece a un solo usuario.",
            },
        ],
        analogia:
            "Las relaciones son como los vínculos familiares. Un padre puede tener muchos hijos (uno a muchos). Un cónyuge tiene un solo cónyuge (uno a uno). Un grupo de amigos se conocen entre todos (muchos a muchos).",
        tags: ["relaciones", "cardinalidad", "modelado"],
    },
    {
        id: 109,
        slug: "que-es-sql",
        nivelId: 6,
        orden: 9,
        titulo: "¿Qué es SQL?",
        definicion:
            "*Structured Query Language*. Es el lenguaje estándar para consultar y modificar bases de datos relacionales. Permite crear tablas, insertar, buscar, actualizar y borrar datos. Es declarativo: dices *qué* quieres, no *cómo* obtenerlo.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "sql",
                contenido:
                    "SELECT nombre, precio FROM productos WHERE precio > 100;",
            },
            {
                tipo: "texto",
                contenido: "Eso pide los productos que cuestan más de 100.",
            },
        ],
        analogia:
            "SQL es como el idioma que hablas con el bibliotecario. Le dices \"dame los libros de historia posteriores a 1990\" y él los busca. No le explicas cómo recorrer los estantes: solo le dices qué quieres.",
        tags: ["sql", "consultas", "base-de-datos"],
    },
    {
        id: 110,
        slug: "que-es-una-consulta",
        nivelId: 6,
        orden: 10,
        titulo: "¿Qué es una consulta?",
        definicion:
            "Es una instrucción que le das a la base de datos para pedir, modificar o eliminar información. En SQL se escribe con comandos como SELECT, INSERT, UPDATE, DELETE.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`SELECT * FROM usuarios WHERE activo = true` es una consulta que trae todos los usuarios activos.",
            },
        ],
        analogia:
            "Una consulta es como una pregunta que le haces a un archivo enorme. \"¿Qué clientes compraron este mes?\", \"¿cuántos productos quedan en stock?\". La base busca y te responde.",
        tags: ["consulta", "sql", "consultas"],
    },
    {
        id: 111,
        slug: "que-es-select",
        nivelId: 6,
        orden: 11,
        titulo: "¿Qué es `SELECT`?",
        definicion:
            "Es el comando SQL para **leer** datos. Especificas qué columnas y de qué tabla. Es la operación más común y no modifica nada.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "sql",
                contenido: "SELECT nombre, email FROM usuarios;",
            },
            {
                tipo: "texto",
                contenido: "Devuelve el nombre y email de todos los usuarios.",
            },
        ],
        analogia:
            "SELECT es como mirar una vitrina y elegir qué querés ver. Puedes pedir ver solo \"zapatos\" (columnas), o todo el escaparate (`SELECT *`).",
        tags: ["select", "sql", "lectura"],
    },
    {
        id: 112,
        slug: "que-es-insert",
        nivelId: 6,
        orden: 12,
        titulo: "¿Qué es `INSERT`?",
        definicion:
            "Es el comando SQL para **crear** nuevos registros en una tabla. Especificas la tabla y los valores de cada columna.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "sql",
                contenido:
                    "INSERT INTO usuarios (nombre, email) VALUES ('Ana', 'ana@mail.com');",
            },
            {
                tipo: "texto",
                contenido: "Crea un usuario nuevo con esos datos.",
            },
        ],
        analogia:
            "INSERT es como agregar una ficha nueva al archivo. Llenas un formulario en blanco y lo guardas en el cajón correspondiente.",
        tags: ["insert", "sql", "creacion"],
    },
    {
        id: 113,
        slug: "que-es-update",
        nivelId: 6,
        orden: 13,
        titulo: "¿Qué es `UPDATE`?",
        definicion:
            "Es el comando SQL para **modificar** registros existentes. Casi siempre va acompañado de `WHERE` para no modificar toda la tabla por error.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "sql",
                contenido:
                    "UPDATE usuarios SET email = 'nuevo@mail.com' WHERE id = 5;",
            },
            {
                tipo: "texto",
                contenido: "Cambia el email solo del usuario 5.",
            },
        ],
        analogia:
            "UPDATE es como corregir una ficha con liquid paper. Tachas el dato viejo y escribes el nuevo, sin reemplazar toda la ficha.",
        tags: ["update", "sql", "modificacion"],
    },
    {
        id: 114,
        slug: "que-es-delete-en-sql",
        nivelId: 6,
        orden: 14,
        titulo: "¿Qué es `DELETE` en SQL?",
        definicion:
            "Es el comando SQL para **borrar** registros de una tabla. También casi siempre va con `WHERE` para no borrar todo.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "sql",
                contenido: "DELETE FROM usuarios WHERE id = 5;",
            },
            {
                tipo: "texto",
                contenido:
                    "Borra al usuario 5. Sin el WHERE, borraría *todos* los usuarios.",
            },
        ],
        analogia:
            "DELETE es como tirar una ficha a la basura. La sacas del archivo. Si te olvidas del WHERE, tiras *todo* el archivo a la basura. Por eso hay que tener cuidado.",
        tags: ["delete", "sql", "borrado"],
    },
    {
        id: 115,
        slug: "que-es-where",
        nivelId: 6,
        orden: 15,
        titulo: "¿Qué es `WHERE`?",
        definicion:
            "Es la cláusula SQL que filtra registros según una condición. Solo se devuelven (o modifican, o borran) los que cumplen esa condición.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "sql",
                contenido: "SELECT * FROM productos WHERE precio > 100 AND stock > 0;",
            },
            {
                tipo: "texto",
                contenido: "Trae productos caros y con stock.",
            },
        ],
        analogia:
            "WHERE es como el filtro de una búsqueda. \"Muéstrame solo los rojos\", \"solo los que cuestan menos de 50\", \"solo los que están disponibles\". Sin filtro, ves todo.",
        tags: ["where", "sql", "filtros"],
    },
    {
        id: 116,
        slug: "que-es-join",
        nivelId: 6,
        orden: 16,
        titulo: "¿Qué es `JOIN`?",
        definicion:
            "Es la operación SQL que combina filas de dos o más tablas según una condición de relación (normalmente igualdad entre clave foránea y clave primaria). Permite consultar datos relacionados en una sola consulta.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "sql",
                contenido:
                    "SELECT u.nombre, p.total\nFROM usuarios u\nJOIN pedidos p ON p.usuario_id = u.id;",
            },
            {
                tipo: "texto",
                contenido: "Trae el nombre del usuario y el total de cada pedido.",
            },
        ],
        analogia:
            "JOIN es como cruzar dos listas. Tienes una lista de clientes y otra de compras. Al cruzarlas por el número de cliente, obtienes \"qué compró cada quién\". Sin el cruce, tendrías dos listas separadas sin conexión.",
        tags: ["join", "sql", "relaciones"],
    },
    {
        id: 117,
        slug: "que-es-group-by",
        nivelId: 6,
        orden: 17,
        titulo: "¿Qué es `GROUP BY`?",
        definicion:
            "Es la cláusula SQL que agrupa filas que comparten un valor y permite hacer cálculos sobre cada grupo (con funciones como COUNT, SUM, AVG, MAX, MIN).",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "sql",
                contenido:
                    "SELECT usuario_id, COUNT(*) AS total_pedidos\nFROM pedidos\nGROUP BY usuario_id;",
            },
            {
                tipo: "texto",
                contenido: "Devuelve cuántos pedidos hizo cada usuario.",
            },
        ],
        analogia:
            "GROUP BY es como separar monedas por país. Juntas todas las de un mismo país en un montón y luego cuentas cuántas hay en cada montón.",
        tags: ["group-by", "sql", "agrupacion"],
    },
    {
        id: 118,
        slug: "que-es-una-subconsulta",
        nivelId: 6,
        orden: 18,
        titulo: "¿Qué es una subconsulta?",
        definicion:
            "Es una consulta dentro de otra consulta. El resultado de la interna se usa como entrada de la externa. Sirve para cálculos intermedios o filtros complejos.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "sql",
                contenido:
                    "SELECT nombre FROM usuarios\nWHERE id IN (SELECT usuario_id FROM pedidos WHERE total > 1000);",
            },
            {
                tipo: "texto",
                contenido: "Trae los usuarios que hicieron pedidos de más de 1000.",
            },
        ],
        analogia:
            "Una subconsulta es como una pregunta dentro de otra. \"¿Quiénes son los clientes que compraron los productos que están en oferta?\" Primero resuelves \"¿cuáles productos están en oferta?\" (subconsulta) y con eso respondes la principal.",
        tags: ["subconsulta", "sql", "consultas"],
    },
    {
        id: 119,
        slug: "que-es-una-consulta-parametrizada",
        nivelId: 6,
        orden: 19,
        titulo: "¿Qué es una consulta parametrizada?",
        definicion:
            "Es una consulta SQL donde los valores variables se pasan por separado como parámetros, no concatenados en el texto. Es la forma segura de consultar y evita inyección SQL.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "javascript",
                contenido:
                    'db.query("SELECT * FROM usuarios WHERE email = ?", [email]);',
            },
            {
                tipo: "texto",
                contenido:
                    "El `?` es el parámetro. El driver lo inserta de forma segura, escapando caracteres peligrosos.",
            },
        ],
        analogia:
            "Una consulta parametrizada es como llenar un formulario con casilleros. No escribes sobre el formulario impreso; pones los datos en los espacios designados. Así no puedes \"romper\" el formulario escribiendo fuera de lugar.",
        tags: ["parametrizada", "seguridad", "sql-injection"],
    },
    {
        id: 120,
        slug: "que-es-un-indice",
        nivelId: 6,
        orden: 20,
        titulo: "¿Qué es un índice?",
        definicion:
            "Es una estructura adicional que la base de datos mantiene para acelerar búsquedas en una columna. Sin índice, la base recorre toda la tabla; con índice, va directo. Ocupa espacio extra y hace las escrituras un poco más lentas, pero acelera muchísimo las lecturas.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Si buscas usuarios por email frecuentemente, creas un índice en la columna `email`. La búsqueda pasa de milisegundos a microsegundos.",
            },
        ],
        analogia:
            "Un índice es como el índice de un libro. Sin él, para encontrar \"transacción\" tendrías que hojear todo el libro. Con él, vas directo a la página. Pero el índice ocupa páginas extra y hay que actualizarlo cuando cambia el libro.",
        tags: ["indice", "rendimiento", "consultas"],
    },
    {
        id: 121,
        slug: "que-es-la-normalizacion",
        nivelId: 6,
        orden: 21,
        titulo: "¿Qué es la normalización?",
        definicion:
            "Es el proceso de organizar las tablas para eliminar redundancia y dependencias problemáticas. Se divide en \"formas normales\" (1FN, 2FN, 3FN...). El objetivo: cada dato en un solo lugar, sin duplicación innecesaria.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En vez de guardar el nombre del cliente en cada pedido (redundante), guardas el `cliente_id` y el nombre vive solo en la tabla `clientes`. Si el cliente cambia de nombre, se actualiza en un solo lugar.",
            },
        ],
        analogia:
            "La normalización es como organizar un taller. En vez de tener destornilladores en 5 cajones distintos, tienes un solo cajón \"destornilladores\". Todo está en un único lugar, sin duplicados. Más fácil de encontrar y de mantener.",
        tags: ["normalizacion", "modelado", "diseno"],
    },
    {
        id: 122,
        slug: "que-es-una-transaccion",
        nivelId: 6,
        orden: 22,
        titulo: "¿Qué es una transacción?",
        definicion:
            "Es un conjunto de operaciones SQL que se ejecutan como una sola unidad. O se hacen *todas* con éxito, o no se hace *ninguna*. Sirve para mantener la consistencia cuando varias operaciones dependen entre sí.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Transferir dinero: restar de una cuenta y sumar a otra. Si falla la segunda, la primera se revierte. Sin transacción, el dinero desaparecería.",
            },
        ],
        analogia:
            "Una transacción es como una mudanza completa. Si a mitad de camino te das cuenta de que olvidaste algo, no puedes \"ir a medias\": deshaces todo y empiezas de nuevo. Todo se mueve o nada se mueve.",
        tags: ["transaccion", "atomicidad", "consistencia"],
    },
    {
        id: 123,
        slug: "que-son-las-propiedades-acid",
        nivelId: 6,
        orden: 23,
        titulo: "¿Qué son las propiedades ACID?",
        definicion:
            "Son cuatro garantías que ofrecen las bases de datos relacionales en las transacciones:\n- **Atomicity:** todo o nada.\n- **Consistency:** los datos siempre pasan de un estado válido a otro válido.\n- **Isolation:** las transacciones concurrentes no se interfieren.\n- **Durability:** una vez confirmada, la transacción persiste aunque se caiga el sistema.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En una transferencia bancaria, ACID garantiza que no se pierda ni se duplique dinero, que otras transacciones no vean estados intermedios, y que una vez confirmada, no se pierda aunque se corte la luz.",
            },
        ],
        analogia:
            "ACID es como las reglas de una cirugía: (A) no se puede dejar a mitad, (C) el paciente no puede quedar en estado inválido, (I) el quirófano está aislado del resto, (D) el resultado queda registrado permanentemente.",
        tags: ["acid", "transacciones", "garantias"],
    },
    {
        id: 124,
        slug: "que-es-una-migracion",
        nivelId: 6,
        orden: 24,
        titulo: "¿Qué es una migración?",
        definicion:
            "Es un archivo versionado que describe un cambio en el esquema de la base: crear tabla, agregar columna, cambiar tipo, etc. Se aplican en orden y permiten evolucionar la base sin perder datos ni hacer cambios manuales.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`001_crear_usuarios.sql`, `002_agregar_columna_email.sql`, `003_crear_pedidos.sql`. Cada migración se aplica una vez y queda registrada.",
            },
        ],
        analogia:
            "Las migraciones son como las actualizaciones de una app. Cada versión agrega o cambia algo, y las actualizaciones se aplican en orden. No reescribes la app desde cero: la vas evolucionando paso a paso.",
        tags: ["migraciones", "esquema", "versionado"],
    },
    {
        id: 125,
        slug: "que-es-un-pool-de-conexiones",
        nivelId: 6,
        orden: 25,
        titulo: "¿Qué es un pool de conexiones?",
        definicion:
            "Es un conjunto de conexiones a la base de datos ya abiertas y reutilizables. En vez de abrir y cerrar una conexión por cada consulta (caro), el sistema toma una del pool, la usa y la devuelve.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una app web con 100 usuarios concurrentes usa un pool de 20 conexiones. Las consultas hacen fila, pero no se abren 100 conexiones nuevas.",
            },
        ],
        analogia:
            "Un pool es como una flota de taxis. En vez de comprar un auto nuevo por cada viaje, tienes 20 taxis que se reutilizan. Cuando uno termina, queda libre para el próximo pasajero.",
        tags: ["pool", "conexiones", "rendimiento"],
    },
    {
        id: 126,
        slug: "que-es-nosql",
        nivelId: 6,
        orden: 26,
        titulo: "¿Qué es NoSQL?",
        definicion:
            "*Not Only SQL*. Es una familia de bases de datos que no usan el modelo relacional de tablas. Hay varios tipos: documentales, clave-valor, grafos, columnas. Se usan cuando la estructura es flexible, los datos son enormes o las relaciones no son el foco.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "MongoDB guarda documentos JSON. Redis guarda pares clave-valor. Neo4j guarda grafos de relaciones. Cada uno brilla en casos distintos.",
            },
        ],
        analogia:
            "NoSQL es como elegir el mueble adecuado para cada cosa. No todo va en cajones (tablas). Algunas cosas van en estantes (documentos), otras en ganchos (clave-valor), otras en redes (grafos). Cada mueble sirve para algo.",
        tags: ["nosql", "mongodb", "clave-valor"],
    },
    {
        id: 127,
        slug: "que-es-una-base-de-datos-documental",
        nivelId: 6,
        orden: 27,
        titulo: "¿Qué es una base de datos documental?",
        definicion:
            "Es un tipo de NoSQL que guarda *documentos* (generalmente JSON o BSON) en lugar de filas y columnas. Cada documento puede tener estructura distinta. Se agrupan en \"colecciones\". Ejemplo principal: MongoDB.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "json",
                contenido:
                    '{ "nombre": "Ana", "edad": 30, "hobbies": ["leer", "correr"] }',
            },
            {
                tipo: "texto",
                contenido:
                    "Cada documento puede tener campos distintos. Uno puede tener `hobbies`, otro no.",
            },
        ],
        analogia:
            "Una base documental es como una carpeta con fichas de distinto formato. Cada ficha puede tener campos diferentes. No hay una planilla rígida: cada documento se adapta a lo que necesita.",
        tags: ["documental", "mongodb", "nosql"],
    },
    {
        id: 128,
        slug: "que-es-redis-y-para-que-sirve",
        nivelId: 6,
        orden: 28,
        titulo: "¿Qué es Redis y para qué sirve?",
        definicion:
            "Es una base de datos en memoria, del tipo clave-valor. Guarda datos en RAM, así que es extremadamente rápida. Se usa para caché, sesiones, colas, contadores en tiempo real, pub/sub.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Guardas en Redis el resultado de una consulta costosa durante 5 minutos. Las siguientes peticiones leen de Redis (microsegundos) en vez de ir a la base (milisegundos).",
            },
        ],
        analogia:
            "Redis es como el post-it pegado al monitor. Guardas ahí lo que necesitas a mano y consultas rápido. No es para archivar a largo plazo (eso es el cajón), es para tener lo urgente al alcance inmediato.",
        tags: ["redis", "cache", "clave-valor"],
    },
    {
        id: 129,
        slug: "que-es-la-autenticacion",
        nivelId: 7,
        orden: 1,
        titulo: "¿Qué es la autenticación?",
        definicion:
            "Es el proceso de verificar *quién eres*. Compruebas tu identidad con algo que sabes (contraseña), algo que tienes (celular, token) o algo que eres (huella, rostro). Sin autenticación, el sistema no sabe quién eres.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando entras a tu banco online con usuario y contraseña, el sistema te autentica. Verifica que realmente eres tú y no un impostor.",
            },
        ],
        analogia:
            "La autenticación es como mostrar tu DNI en la puerta de un edificio. El guardia mira tu documento y confirma que eres quien dices ser. Si no coincide, no entras.",
        tags: ["autenticacion", "identidad", "credenciales"],
    },
    {
        id: 130,
        slug: "que-es-la-autorizacion",
        nivelId: 7,
        orden: 2,
        titulo: "¿Qué es la autorización?",
        definicion:
            "Es el proceso de decidir *qué puedes hacer* una vez que ya estás autenticado. No es lo mismo que \"quién eres\": es \"qué permisos tienes\". Un usuario común y un administrador pueden estar autenticados, pero el admin puede borrar usuarios y el común no.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En un sistema escolar, todos los usuarios están autenticados al entrar. Pero solo los profesores pueden subir notas; los alumnos solo pueden verlas.",
            },
        ],
        analogia:
            "La autorización es como las llaves de un edificio. Ya entraste (autenticación), pero no todas las puertas se abren con tu llave. La llave del administrador abre todo; la del empleado solo su oficina. La autenticación te deja entrar; la autorización decide hasta dónde.",
        tags: ["autorizacion", "permisos", "roles"],
    },
    {
        id: 131,
        slug: "que-es-una-sesion",
        nivelId: 7,
        orden: 3,
        titulo: "¿Qué es una sesión?",
        definicion:
            "Es el período durante el cual el sistema *recuerda* que ya te autenticaste. Se guarda un identificador de sesión (generalmente en una cookie) y el servidor asocia ese ID con tu usuario. Al cerrar sesión o expirar, se pierde.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando entras a Instagram, se crea una sesión. Mientras navegas, el servidor sabe que eres tú porque envías la cookie de sesión en cada petición. Si cierras sesión, la cookie se invalida.",
            },
        ],
        analogia:
            "Una sesión es como la pulsera que te dan en un festival. La muestras al entrar y te identifica todo el día. Cuando termina el festival (cierras sesión), la pulsera ya no sirve.",
        tags: ["sesion", "cookies", "estado"],
    },
    {
        id: 132,
        slug: "que-es-un-token",
        nivelId: 7,
        orden: 4,
        titulo: "¿Qué es un token?",
        definicion:
            "Es una cadena de texto que representa tu identidad o permisos. Se entrega tras autenticarte y se envía en cada petición (generalmente en un header `Authorization`). A diferencia de una sesión, el token puede ser autosuficiente y no requerir que el servidor guarde estado.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Al iniciar sesión en una API, recibes un token como `eyJhbGciOi...`. En cada petición posterior, lo envías en `Authorization: Bearer eyJhbGciOi...`.",
            },
        ],
        analogia:
            "Un token es como un pase VIP de un evento. Te lo dan al registrarte y lo muestras cada vez que quieres entrar a un área. El personal lo revisa y te deja pasar sin tener que verificar tu identidad de nuevo.",
        tags: ["token", "authorization", "sesion"],
    },
    {
        id: 133,
        slug: "que-es-jwt",
        nivelId: 7,
        orden: 5,
        titulo: "¿Qué es JWT?",
        definicion:
            "*JSON Web Token*. Es un tipo específico de token con formato estándar. Tiene tres partes separadas por puntos: header, payload y signature. El payload lleva datos (como tu ID de usuario) firmados criptográficamente. El servidor puede verificar que el token es auténtico sin consultar la base.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "text",
                contenido:
                    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjUsImV4cCI6MTcwMDAwMDAwMH0.firma...",
            },
            {
                tipo: "texto",
                contenido:
                    "El payload decodificado sería `{ \"userId\": 5, \"exp\": 1700000000 }`.",
            },
        ],
        analogia:
            "Un JWT es como un pasaporte sellado por la autoridad. Lleva tus datos (payload) y un sello de seguridad (firma). Cualquiera puede leerlo, pero solo la autoridad puede falsificarlo. El receptor confía en el sello sin tener que llamar a la autoridad.",
        tags: ["jwt", "token", "firma"],
    },
    {
        id: 134,
        slug: "que-es-oauth-20",
        nivelId: 7,
        orden: 6,
        titulo: "¿Qué es OAuth 2.0?",
        definicion:
            "Es un protocolo de autorización que permite que una app acceda a tus datos en otro servicio *sin que le des tu contraseña*. En vez de compartir credenciales, la app recibe un token con permisos limitados. Es el estándar detrás de \"Iniciar sesión con Google/Facebook/GitHub\".",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando entras a una app con \"Iniciar sesión con Google\", esa app no ve tu contraseña de Google. Google le da un token que dice \"este usuario autorizó acceso a su nombre y email\".",
            },
        ],
        analogia:
            "OAuth es como darle a un valet una llave especial de tu auto que solo abre la puerta y enciende, pero no abre la guantera ni el baúl. Le das acceso limitado sin entregarle la llave maestra.",
        tags: ["oauth", "login-social", "tokens"],
    },
    {
        id: 135,
        slug: "que-es-openid-connect",
        nivelId: 7,
        orden: 7,
        titulo: "¿Qué es OpenID Connect?",
        definicion:
            "Es una capa de *autenticación* construida sobre OAuth 2.0. Mientras OAuth sirve para *autorizar* (acceso a datos), OpenID Connect añade la identidad: quién es el usuario. Devuelve un `id_token` (un JWT) con datos del usuario.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "\"Iniciar sesión con Google\" es OAuth + OpenID Connect. Google te da un `id_token` que dice \"el usuario es ana@mail.com\". La app sabe quién eres y qué permisos tienes.",
            },
        ],
        analogia:
            "Si OAuth es la llave del valet, OpenID Connect es esa llave + una tarjeta que dice tu nombre y foto. No solo autoriza acceso, también identifica a quién pertenece.",
        tags: ["openid", "oidc", "autenticacion"],
    },
    {
        id: 136,
        slug: "que-es-el-hashing-de-contrasenas",
        nivelId: 7,
        orden: 8,
        titulo: "¿Qué es el hashing de contraseñas?",
        definicion:
            "Es convertir una contraseña en un texto irreversible mediante una función matemática. La base de datos guarda el hash, no la contraseña. Para verificar, se hashea lo que el usuario ingresa y se compara. Nunca se puede \"deshacer\". Se usa con *salt* (un valor aleatorio por usuario) para que dos contraseñas iguales den hashes distintos.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "La contraseña `\"123456\"` con salt puede dar `\"a3f5c8...\"`. La base guarda eso. Cuando el usuario ingresa `\"123456\"`, se hashea con el mismo salt y se compara.",
            },
        ],
        analogia:
            "El hashing es como pasar una fruta por una licuadora. De la fruta sale jugo, pero del jugo no puedes reconstruir la fruta. Cuando alguien te da una fruta, la licúas y comparas el jugo con el guardado. Si coincide, es la fruta correcta.",
        tags: ["hashing", "contrasenas", "bcrypt"],
    },
    {
        id: 137,
        slug: "que-es-el-control-de-acceso-por-roles-rbac",
        nivelId: 7,
        orden: 9,
        titulo: "¿Qué es el control de acceso por roles (RBAC)?",
        definicion:
            "*Role-Based Access Control*. Es un modelo donde los permisos se asignan a *roles* (admin, editor, cliente), y los usuarios tienen roles. En vez de dar permisos uno por uno, se asignan roles. Es más fácil de gestionar y auditar.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En un CMS, el rol \"editor\" puede crear y editar posts. El rol \"admin\" puede además borrar y gestionar usuarios. Asignas roles a personas, no permisos individuales.",
            },
        ],
        analogia:
            "RBAC es como los uniformes en un hospital. El uniforme de médico tiene ciertos accesos, el de enfermero otros, el de administrativo otros. No le das llaves distintas a cada persona: le das el uniforme según su rol.",
        tags: ["rbac", "roles", "permisos"],
    },
    {
        id: 138,
        slug: "que-es-el-principio-de-minimo-privilegio",
        nivelId: 7,
        orden: 10,
        titulo: "¿Qué es el principio de mínimo privilegio?",
        definicion:
            "Es la regla de dar a cada usuario, sistema o proceso *solo* los permisos estrictamente necesarios para hacer su trabajo, ni uno más. Reduce el daño si algo se ve comprometido.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una app que solo lee datos no debería tener permisos de escritura en la base. Un empleado de soporte no necesita acceso a los datos financieros.",
            },
        ],
        analogia:
            "El mínimo privilegio es como darle a un empleado solo la llave de su oficina, no la del edificio entero. Si pierde la llave, solo se compromete su oficina, no todo.",
        tags: ["seguridad", "privilegios", "principios"],
    },
    {
        id: 139,
        slug: "que-es-cors",
        nivelId: 7,
        orden: 11,
        titulo: "¿Qué es CORS?",
        definicion:
            "*Cross-Origin Resource Sharing*. Es un mecanismo del navegador que bloquea peticiones a dominios distintos al de la página, a menos que el servidor lo permita explícitamente con headers. Protege al usuario de que una web maliciosa haga peticiones en su nombre a otro sitio.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Si `tienda.com` intenta pedir datos a `api.otro.com`, el navegador bloquea la petición a menos que `api.otro.com` responda con `Access-Control-Allow-Origin: https://tienda.com`.",
            },
        ],
        analogia:
            "CORS es como el portero de un edificio. Solo deja entrar a personas de la lista (orígenes permitidos). Si no estás en la lista, aunque tengas buenas intenciones, no pasas.",
        tags: ["cors", "navegador", "origenes"],
    },
    {
        id: 140,
        slug: "que-es-csrf",
        nivelId: 7,
        orden: 12,
        titulo: "¿Qué es CSRF?",
        definicion:
            "*Cross-Site Request Forgery*. Es un ataque donde un sitio malicioso hace que tu navegador envíe una petición autenticada a otro sitio donde tienes sesión activa, sin que te des cuenta. Aprovecha que las cookies se envían automáticamente.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Estás logueado en tu banco. Entras a una web maliciosa que tiene un `<img src=\"https://banco.com/transferir?monto=1000&a=hacker\">`. Tu navegador envía la petición con tus cookies y, si el banco no se protege, se hace la transferencia.",
            },
        ],
        analogia:
            "CSRF es como alguien que falsifica tu firma en un cheque. Tú no firmaste, pero el banco ve tu firma (tus cookies) y procesa el cheque. La defensa es pedir un \"secreto compartido\" (token CSRF) que solo tu web conoce.",
        tags: ["csrf", "ataques", "cookies"],
    },
    {
        id: 141,
        slug: "que-es-xss",
        nivelId: 7,
        orden: 13,
        titulo: "¿Qué es XSS?",
        definicion:
            "*Cross-Site Scripting*. Es un ataque donde un atacante inyecta código JavaScript malicioso en una página que otros usuarios ven. Cuando esos usuarios cargan la página, el script se ejecuta en su navegador y puede robar cookies, sesiones o datos.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En un foro donde puedes publicar comentarios, un atacante publica `<script>robarCookies()</script>`. Si el foro no escapa el HTML, todos los que vean el comentario ejecutan el script.",
            },
        ],
        analogia:
            "XSS es como meter un virus en una carta que todos abren. Tú no infectas a todos directamente: infectas el correo (la web), y todos los que abren la carta se infectan. La defensa es \"desinfectar\" todo lo que los usuarios escriben.",
        tags: ["xss", "ataques", "sanitizacion"],
    },
    {
        id: 142,
        slug: "que-es-sql-injection",
        nivelId: 7,
        orden: 14,
        titulo: "¿Qué es SQL injection?",
        definicion:
            "Es un ataque donde el atacante inserta código SQL malicioso en un campo de entrada, y ese código se ejecuta en la base de datos porque la app concatena strings sin escapar. Puede leer, modificar o borrar datos, incluso toda la base.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Si el login hace `SELECT * FROM usuarios WHERE email = '${input}'` y el atacante escribe `' OR '1'='1`, la consulta se convierte en `SELECT * FROM usuarios WHERE email = '' OR '1'='1'`, que devuelve todos los usuarios.",
            },
        ],
        analogia:
            "SQL injection es como colar instrucciones falsas en un formulario. En vez de escribir tu nombre, escribes \"nombre; y además borra todo\". Si el sistema no distingue datos de instrucciones, ejecuta lo que escribiste. La defensa son las consultas parametrizadas.",
        tags: ["sql-injection", "ataques", "seguridad"],
    },
    {
        id: 143,
        slug: "que-es-ssrf",
        nivelId: 7,
        orden: 15,
        titulo: "¿Qué es SSRF?",
        definicion:
            "*Server-Side Request Forgery*. Es un ataque donde el atacante hace que *el servidor* haga peticiones a lugares que no debería: redes internas, servicios privados, metadatos de la nube. El servidor tiene acceso a cosas que el atacante no, y el atacante lo usa como proxy.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una app que carga imágenes desde URLs que el usuario ingresa. El atacante pone `http://169.254.169.254/latest/meta-data/` (metadatos de AWS) y el servidor lo consulta, filtrando credenciales internas.",
            },
        ],
        analogia:
            "SSRF es como convencer al mensajero de una empresa para que entregue un paquete en la bóveda interna. El mensajero tiene acceso porque trabaja ahí; tú no. Pero lo convences de que vaya a donde tú no puedes.",
        tags: ["ssrf", "ataques", "redes-internas"],
    },
    {
        id: 144,
        slug: "que-es-el-rate-limiting",
        nivelId: 7,
        orden: 16,
        titulo: "¿Qué es el rate limiting?",
        definicion:
            "Es limitar cuántas peticiones puede hacer un cliente en un período de tiempo. Protege contra ataques de fuerza bruta, abuso de API, DDoS y scraping. Si excedes el límite, recibes un `429 Too Many Requests`.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una API permite 100 peticiones por minuto por usuario. Si haces 101, te bloquea por un rato. Así un atacante no puede probar 10 millones de contraseñas.",
            },
        ],
        analogia:
            "El rate limiting es como el límite de velocidad en una autopista. No puedes ir a 500 km/h porque romperías todo. Si vas muy rápido, te multan (bloquean). Mantiene el sistema sano para todos.",
        tags: ["rate-limiting", "throttling", "seguridad"],
    },
    {
        id: 145,
        slug: "que-es-la-gestion-de-secretos",
        nivelId: 7,
        orden: 17,
        titulo: "¿Qué es la gestión de secretos?",
        definicion:
            "Es guardar y manejar de forma segura las credenciales sensibles: contraseñas de bases, API keys, tokens, certificados. *No* se hardcodean en el código ni se suben a Git. Se usan variables de entorno, vaults o gestores de secretos (AWS Secrets Manager, HashiCorp Vault, Doppler).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En vez de escribir `const API_KEY = \"sk-abc123\"` en el código, se usa `process.env.API_KEY` y el valor real se configura en el servidor o en un vault.",
            },
        ],
        analogia:
            "La gestión de secretos es como guardar las llaves de la casa en una caja fuerte, no debajo del felpudo. La caja fuerte (vault) está protegida, y solo quien debe acceder puede abrirla. El felpudo (código) lo ve cualquiera.",
        tags: ["secretos", "vault", "variables-de-entorno"],
    },
    {
        id: 146,
        slug: "que-es-el-control-de-permisos-en-el-servidor",
        nivelId: 7,
        orden: 18,
        titulo: "¿Qué es el control de permisos en el servidor?",
        definicion:
            "Es verificar, en *cada petición*, que el usuario autenticado tiene permiso para hacer lo que pide. No basta con autenticar: hay que autorizar en el servidor, no confiar en el cliente. Cada endpoint valida que el usuario pueda acceder al recurso.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un endpoint `DELETE /productos/5` no solo verifica que estés logueado, sino que seas admin o dueño del producto 5. Si eres un usuario común, recibes `403 Forbidden`.",
            },
        ],
        analogia:
            "El control de permisos en el servidor es como el guardia que revisa tu credencial en *cada* puerta, no solo en la entrada. Aunque ya estés dentro del edificio, cada área verifica si tienes permiso para estar ahí. Nunca confías en que \"si entró, puede pasar a todo\".",
        tags: ["autorizacion", "servidor", "endpoints"],
    },
    {
        id: 147,
        slug: "que-es-git",
        nivelId: 8,
        orden: 1,
        titulo: "¿Qué es Git?",
        definicion:
            "Es un sistema de control de versiones. Registra *todos* los cambios que haces en el código a lo largo del tiempo, quién los hizo y cuándo. Permite volver atrás, trabajar en paralelo con otros y fusionar cambios sin pisarse.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Si rompes algo, puedes volver a la versión de ayer con un comando. Si dos personas editan el mismo archivo, Git avisa y ayuda a combinar los cambios.",
            },
        ],
        analogia:
            "Git es como el \"historial de cambios\" de un documento de Word, pero mucho más potente. Cada vez que guardas, queda una foto del estado. Puedes volver a cualquier foto anterior, ver quién cambió qué, y trabajar en versiones paralelas.",
        tags: ["git", "control-de-versiones", "historial"],
    },
    {
        id: 148,
        slug: "que-es-un-repositorio",
        nivelId: 8,
        orden: 2,
        titulo: "¿Qué es un repositorio?",
        definicion:
            "Es el proyecto de Git: una carpeta que contiene tu código *y* todo el historial de cambios. Puede estar local (en tu máquina) o remoto (en GitHub, GitLab, Bitbucket).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "El repo de React en GitHub tiene todos los archivos de React y cada commit desde su creación en 2013. Miles de contribuyentes y años de historia en un solo repo.",
            },
        ],
        analogia:
            "Un repositorio es como un álbum de fotos familiar. No solo guarda las fotos actuales, sino todas las anteriores, con fechas y quién las sacó. Puedes ver cómo cambió la familia a lo largo del tiempo.",
        tags: ["repositorio", "git", "github"],
    },
    {
        id: 149,
        slug: "que-es-una-rama-branch",
        nivelId: 8,
        orden: 3,
        titulo: "¿Qué es una rama (branch)?",
        definicion:
            "Es una línea de desarrollo paralela dentro del repositorio. La rama principal (`main` o `master`) es la versión estable. Para trabajar en algo nuevo, creas una rama, haces cambios ahí, y luego la fusionas.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Creas la rama `feature/login` para desarrollar el login sin tocar `main`. Cuando terminas y pruebas, la fusionas. Si algo sale mal, `main` nunca se vio afectada.",
            },
        ],
        analogia:
            "Una rama es como un borrador paralelo de un documento. Trabajas en el borrador sin tocar el original. Cuando está listo, lo pasas al original. Si te arrepientes, descartas el borrador sin daño.",
        tags: ["branch", "git", "flujo-de-trabajo"],
    },
    {
        id: 150,
        slug: "que-es-un-commit",
        nivelId: 8,
        orden: 4,
        titulo: "¿Qué es un commit?",
        definicion:
            "Es una \"foto\" del estado del código en un momento dado, con un mensaje que describe qué cambió. Cada commit tiene un identificador único (hash) y apunta al commit anterior, formando una cadena.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`git commit -m \"Agrego validación de email en el registro\"` guarda los cambios actuales con ese mensaje. Queda en el historial para siempre.",
            },
        ],
        analogia:
            "Un commit es como guardar una partida en un videojuego. Queda registrado el estado exacto, con una nota de qué hiciste. Puedes volver a esa partida si algo sale mal.",
        tags: ["commit", "git", "historial"],
    },
    {
        id: 151,
        slug: "que-es-un-merge",
        nivelId: 8,
        orden: 5,
        titulo: "¿Qué es un merge?",
        definicion:
            "Es fusionar los cambios de una rama en otra. Git combina los commits de ambas ramas y crea un commit nuevo de fusión (o hace un \"fast-forward\" si no hay divergencia).",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Terminas `feature/login` y haces `git merge feature/login` en `main`. Los cambios del login pasan a la rama principal.",
            },
        ],
        analogia:
            "Un merge es como juntar dos ríos en uno. Cada río (rama) trajo su agua (cambios). Al unirse, forman uno solo con el aporte de ambos.",
        tags: ["merge", "git", "fusion"],
    },
    {
        id: 152,
        slug: "que-es-un-rebase",
        nivelId: 8,
        orden: 6,
        titulo: "¿Qué es un rebase?",
        definicion:
            "Es otra forma de integrar cambios, pero en vez de fusionar, *reescribe* la historia: toma los commits de tu rama y los \"recoloca\" encima de otra rama. Resultado: historial lineal y más limpio, pero cambia los hashes de los commits.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`git rebase main` en tu rama `feature/login` toma tus commits y los pone encima de los últimos cambios de `main`. Como si hubieras empezado a trabajar después.",
            },
        ],
        analogia:
            "El rebase es como reescribir un cuaderno en orden. En vez de tener hojas pegadas (merge), reescribes todo desde el principio con los cambios integrados. Queda más ordenado, pero es más trabajo y no debes hacerlo si ya compartiste esa historia.",
        tags: ["rebase", "git", "historial"],
    },
    {
        id: 153,
        slug: "que-es-un-conflicto-de-git",
        nivelId: 8,
        orden: 7,
        titulo: "¿Qué es un conflicto de Git?",
        definicion:
            "Es cuando Git no puede fusionar automáticamente dos cambios porque tocan la misma línea del mismo archivo. Te pide que decidas manualmente qué queda. Se resuelve editando el archivo y eligiendo, combinando o reescribiendo.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tú cambiaste el título a \"Hola\" y tu compañero a \"Buenas\". Git no sabe cuál dejar. Te muestra ambos y eliges.",
            },
        ],
        analogia:
            "Un conflicto es como dos personas editando el mismo párrafo de un documento a la vez. Al juntar, hay dos versiones del mismo texto. Alguien tiene que decidir cuál queda (o combinarlas).",
        tags: ["conflicto", "git", "merge"],
    },
    {
        id: 154,
        slug: "que-es-un-pull-request",
        nivelId: 8,
        orden: 8,
        titulo: "¿Qué es un pull request?",
        definicion:
            "Es una solicitud para que tus cambios de una rama se integren a otra (generalmente `main`). En GitHub/GitLab, abres un PR, muestras tus cambios, y otros revisan, comentan y aprueban antes del merge.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Terminas `feature/login`, abres un PR contra `main`. Tu equipo revisa el código, deja comentarios, y cuando todo está bien, se aprueba y se fusiona.",
            },
        ],
        analogia:
            "Un PR es como pedir permiso para publicar un capítulo nuevo en un libro colectivo. Lo escribes, lo muestras a los coautores, ellos revisan y sugieren cambios, y solo cuando todos aprueban, se publica.",
        tags: ["pull-request", "github", "colaboracion"],
    },
    {
        id: 155,
        slug: "que-es-una-revision-de-codigo",
        nivelId: 8,
        orden: 9,
        titulo: "¿Qué es una revisión de código?",
        definicion:
            "Es el proceso donde otros desarrolladores leen tu código antes de que se integre. Buscan errores, malas prácticas, mejoras, y comparten conocimiento. Es una de las prácticas más valiosas de la ingeniería.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En un PR, un compañero comenta: \"acá podrías usar `map` en vez de `for`\", o \"falta validar este caso\". Tú ajustas y vuelves a pedir revisión.",
            },
        ],
        analogia:
            "La revisión de código es como un editor revisando un manuscrito antes de publicarlo. No es para criticarte, es para que el texto final sea mejor. Cuatro ojos ven más que dos.",
        tags: ["code-review", "calidad", "colaboracion"],
    },
    {
        id: 156,
        slug: "que-es-la-deuda-tecnica",
        nivelId: 8,
        orden: 10,
        titulo: "¿Qué es la deuda técnica?",
        definicion:
            "Es el costo futuro de haber tomado atajos rápidos hoy. Código mal escrito, sin tests, con parches, que funciona pero es difícil de mantener. Como una deuda financiera: hoy ganas tiempo, mañana pagas con intereses.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Para lanzar rápido, hardcodeas una URL. Funciona. Pero cuando cambia el entorno, hay que buscar y reemplazar en 20 lugares. Eso es deuda técnica acumulada.",
            },
        ],
        analogia:
            "La deuda técnica es como arreglar una gotera con un balde en vez de llamar al plomero. Funciona hoy, pero mañana tendrás que vaciar el balde, y pasado el techo se habrá podrido. El atajo de hoy es el problema de mañana.",
        tags: ["deuda-tecnica", "mantenibilidad", "calidad"],
    },
    {
        id: 157,
        slug: "que-es-la-refactorizacion",
        nivelId: 8,
        orden: 11,
        titulo: "¿Qué es la refactorización?",
        definicion:
            "Es mejorar la estructura interna del código *sin cambiar su comportamiento externo*. Renombras variables, divides funciones, eliminas duplicación, aclaras lógica. El código hace lo mismo, pero mejor.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tienes una función de 200 líneas que hace 5 cosas. La divides en 5 funciones de 40 líneas cada una. El resultado es idéntico para el usuario, pero el código es mantenible.",
            },
        ],
        analogia:
            "La refactorización es como ordenar y limpiar una cocina sin cambiar el menú. Los platos siguen siendo los mismos, pero ahora cocinar es más rápido y agradable. La cocina (código) está mejor organizada.",
        tags: ["refactorizacion", "limpieza", "mantenibilidad"],
    },
    {
        id: 158,
        slug: "que-es-dry",
        nivelId: 8,
        orden: 12,
        titulo: "¿Qué es DRY?",
        definicion:
            "*Don't Repeat Yourself*. Es el principio de no duplicar lógica. Si tienes el mismo código en dos lugares, extráelo a una función, clase o módulo. Cada conocimiento debe tener una única representación en el sistema.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En vez de repetir la validación de email en 5 formularios, creas una función `validarEmail()` y la usas en los 5. Si cambia la regla, la cambias en un solo lugar.",
            },
        ],
        analogia:
            "DRY es como tener una sola receta para el pan en la panadería. Si cada panadero la recordara de memoria, cada uno haría un pan distinto. Con una receta escrita, todos hacen el mismo pan y las mejoras se aplican a todos.",
        tags: ["dry", "principios", "duplicacion"],
    },
    {
        id: 159,
        slug: "que-es-kiss",
        nivelId: 8,
        orden: 13,
        titulo: "¿Qué es KISS?",
        definicion:
            "*Keep It Simple, Stupid*. Es el principio de preferir la solución más simple que funcione. La complejidad innecesaria es enemiga de la mantenibilidad. No sobre-ingenierices.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Para sumar dos números, no crees una clase `SumadorFactory` con inyección de dependencias. Haz `a + b`. Simple, claro, funciona.",
            },
        ],
        analogia:
            "KISS es como abrir una lata con un abrelatas, no con un dron teledirigido. La solución simple resuelve el problema. La complejidad extra solo agrega puntos de falla.",
        tags: ["kiss", "principios", "simplicidad"],
    },
    {
        id: 160,
        slug: "que-es-yagni",
        nivelId: 8,
        orden: 14,
        titulo: "¿Qué es YAGNI?",
        definicion:
            "*You Aren't Gonna Need It*. Es el principio de no implementar funcionalidad que *crees* que vas a necesitar en el futuro. Impleméntalo cuando lo necesites de verdad. El código especulativo suele ser código desperdiciado.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "No agregues 10 parámetros opcionales a una función \"por si acaso\". Agrega los que necesitas hoy. Si mañana necesitas más, los agregas.",
            },
        ],
        analogia:
            "YAGNI es como no comprar un martillo hidráulico \"por si algún día necesito demoler una pared\". Compra el martillo normal. Si algún día demueles, alquilas el hidráulico.",
        tags: ["yagni", "principios", "simplicidad"],
    },
    {
        id: 161,
        slug: "que-es-solid",
        nivelId: 8,
        orden: 15,
        titulo: "¿Qué es SOLID?",
        definicion:
            "Son cinco principios de diseño orientado a objetos:\n- **S**ingle Responsibility: una clase, una razón para cambiar.\n- **O**pen/Closed: abierta a extensión, cerrada a modificación.\n- **L**iskov Substitution: las subclases deben poder reemplazar a la superclase.\n- **I**nterface Segregation: interfaces específicas, no gigantes.\n- **D**ependency Inversion: depende de abstracciones, no de concreciones.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una clase `ReportePDF` no debería también enviar mails. Eso viola SRP. Debería haber una `ReportePDF` y una `EmailSender` separadas.",
            },
        ],
        analogia:
            "SOLID es como las reglas de un buen edificio: cada habitación tiene un uso (SRP), se pueden agregar muebles sin romper paredes (OCP), las puertas estándar encajan en cualquier marco (LSP), no hay puertas que no uses (ISP), y los cables van por caños, no sueltos (DIP).",
        tags: ["solid", "principios", "diseno"],
    },
    {
        id: 162,
        slug: "que-es-la-inyeccion-de-dependencias",
        nivelId: 8,
        orden: 16,
        titulo: "¿Qué es la inyección de dependencias?",
        definicion:
            "Es un patrón donde una clase *recibe* sus dependencias desde afuera en vez de crearlas ella misma. En vez de `new Database()` dentro de la clase, la clase recibe una `Database` por constructor o setter. Facilita tests, desacopla y permite cambiar implementaciones.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "javascript",
                contenido:
                    "class UserService {\n  constructor(userRepo) { this.userRepo = userRepo; }\n}",
            },
            {
                tipo: "texto",
                contenido:
                    "Le pasas `userRepo` al construir. En tests, le pasas un mock. En producción, el real.",
            },
        ],
        analogia:
            "La inyección de dependencias es como enchufar electrodomésticos en vez de soldarlos a la pared. Si están enchufados, puedes cambiarlos, moverlos, probar otros. Si están soldados, cambiar uno es una obra.",
        tags: ["di", "patrones", "testeabilidad"],
    },
    {
        id: 163,
        slug: "que-es-una-arquitectura-por-capas",
        nivelId: 8,
        orden: 17,
        titulo: "¿Qué es una arquitectura por capas?",
        definicion:
            "Es organizar el código en capas con responsabilidades claras: presentación (UI), aplicación (casos de uso), dominio (reglas de negocio), infraestructura (base de datos, APIs externas). Cada capa solo habla con la de al lado.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "El controlador (presentación) llama al servicio (aplicación), que usa el repositorio (infraestructura). El controlador nunca habla directo con la base.",
            },
        ],
        analogia:
            "La arquitectura por capas es como un edificio con pisos. Cada piso tiene su función, y las personas se comunican con el piso de arriba o el de abajo, no saltando entre pisos. Cada capa tiene su rol y su nivel de acceso.",
        tags: ["arquitectura", "capas", "backend"],
    },
    {
        id: 164,
        slug: "que-es-clean-architecture",
        nivelId: 8,
        orden: 18,
        titulo: "¿Qué es Clean Architecture?",
        definicion:
            "Es un estilo de arquitectura que pone las reglas de negocio en el centro y las dependencias apuntan hacia adentro. La lógica de negocio no conoce frameworks, bases de datos ni UI. Todo lo externo se conecta mediante interfaces.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tu `UserService` no importa Express ni Prisma. Solo define una interfaz `UserRepository`. Express y Prisma viven en las capas externas y se conectan mediante implementaciones.",
            },
        ],
        analogia:
            "Clean Architecture es como una cebolla: el núcleo (negocio) está protegido por capas externas (UI, DB, frameworks). Las capas externas pueden cambiar sin tocar el núcleo. El núcleo no sabe ni le importa qué lo rodea.",
        tags: ["clean-architecture", "arquitectura", "solid"],
    },
    {
        id: 165,
        slug: "que-es-una-arquitectura-monolitica",
        nivelId: 8,
        orden: 19,
        titulo: "¿Qué es una arquitectura monolítica?",
        definicion:
            "Es cuando toda la aplicación es un solo proyecto, un solo deploy, una sola base. Todo el código vive junto: frontend, backend, lógica de negocio, etc. Es más simple de empezar y de desplegar, pero crece en complejidad.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un e-commerce con todo en un solo repo: catálogo, pagos, usuarios, envíos, todo en un mismo servidor. Un solo deploy actualiza todo.",
            },
        ],
        analogia:
            "Un monolito es como una casa con todas las habitaciones bajo un mismo techo. Fácil de construir y habitar, pero si querés reformar la cocina, tenés que convivir con el polvo en toda la casa.",
        tags: ["monolito", "arquitectura", "deploy"],
    },
    {
        id: 166,
        slug: "que-son-los-microservicios",
        nivelId: 8,
        orden: 20,
        titulo: "¿Qué son los microservicios?",
        definicion:
            "Es dividir la aplicación en *servicios independientes*, cada uno con su propia base, su propio deploy y su propia responsabilidad. Se comunican por red (APIs, colas). Cada equipo puede desarrollar y desplegar el suyo.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "En vez de un solo e-commerce, tienes: `servicio-usuarios`, `servicio-pagos`, `servicio-catálogo`, `servicio-envíos`. Cada uno escala y se despliega por separado.",
            },
        ],
        analogia:
            "Los microservicios son como una ciudad con edificios independientes: panadería, farmacia, ferretería. Cada uno abre y cierra cuando quiere, contrata a su gente y se especializa. Es más flexible que una mega-tienda, pero coordinar todo es más complejo.",
        tags: ["microservicios", "arquitectura", "servicios"],
    },
    {
        id: 167,
        slug: "que-es-una-prueba-unitaria",
        nivelId: 9,
        orden: 1,
        titulo: "¿Qué es una prueba unitaria?",
        definicion:
            "Es un test automático que verifica el comportamiento de *una unidad* pequeña de código: una función, un método, una clase. Aísla esa unidad de sus dependencias y comprueba que, dados ciertos inputs, devuelve ciertos outputs.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "javascript",
                contenido:
                    'test("sumar devuelve 5", () => {\n  expect(sumar(2, 3)).toBe(5);\n});',
            },
            {
                tipo: "texto",
                contenido: "Pruebas una función aislada, sin base de datos ni red.",
            },
        ],
        analogia:
            "Una prueba unitaria es como revisar cada tornillo de un mueble antes de armarlo. Verificas que cada pieza, por separado, esté bien hecha. No pruebas el mueble completo, sino cada componente.",
        tags: ["pruebas", "unitarias", "jest"],
    },
    {
        id: 168,
        slug: "que-es-una-prueba-de-integracion",
        nivelId: 9,
        orden: 2,
        titulo: "¿Qué es una prueba de integración?",
        definicion:
            "Es un test que verifica que *varias partes* del sistema funcionen juntas: la función con la base de datos, la API con el servicio, el módulo A con el módulo B. No aísla: prueba la interacción.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un test que hace un `POST /usuarios`, verifica que se guarde en la base, y luego consulta la base para confirmar. Prueba controlador + servicio + repositorio + base juntos.",
            },
        ],
        analogia:
            "Una prueba de integración es como probar que las piezas del mueble encajen entre sí. No basta con que cada tornillo esté bien: hay que verificar que la pata entre en la base, que el cajón deslice, etc.",
        tags: ["pruebas", "integracion", "testing"],
    },
    {
        id: 169,
        slug: "que-es-una-prueba-end-to-end",
        nivelId: 9,
        orden: 3,
        titulo: "¿Qué es una prueba end-to-end?",
        definicion:
            "*E2E*. Es un test que simula el flujo completo de un usuario real, desde el navegador hasta la base de datos, pasando por todas las capas. Es la prueba más realista pero la más lenta y frágil.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un test con Playwright que abre la web, hace clic en \"registrarse\", llena el formulario, envía, y verifica que aparezca \"bienvenido\". Todo el flujo real.",
            },
        ],
        analogia:
            "Una prueba E2E es como hacer una mudanza completa de prueba: cargas el camión, manejas, descargas, verificas que todo llegó. Pruebas el sistema entero, no cada pieza suelta.",
        tags: ["e2e", "pruebas", "playwright"],
    },
    {
        id: 170,
        slug: "que-es-un-mock",
        nivelId: 9,
        orden: 4,
        titulo: "¿Qué es un mock?",
        definicion:
            "Es un objeto falso que reemplaza a una dependencia real en un test. Simula su comportamiento para aislar la unidad bajo prueba y evitar efectos externos (llamar a una API real, escribir en la base, etc.).",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "javascript",
                contenido:
                    'const mockRepo = { findById: jest.fn().mockReturnValue({ id: 1, nombre: "Ana" }) };\nconst servicio = new UserService(mockRepo);',
            },
            {
                tipo: "texto",
                contenido: "El servicio cree que habla con una base real, pero es un mock.",
            },
        ],
        analogia:
            "Un mock es como un actor de doblaje en una escena peligrosa. Hace el papel del actor real, pero sin el riesgo. En el test, simula la dependencia real sin sus costos.",
        tags: ["mock", "pruebas", "aislamiento"],
    },
    {
        id: 171,
        slug: "que-es-la-cobertura-de-codigo",
        nivelId: 9,
        orden: 5,
        titulo: "¿Qué es la cobertura de código?",
        definicion:
            "Es el porcentaje del código que es ejecutado por los tests. Si tienes 80% de cobertura, significa que 8 de cada 10 líneas se ejecutan al menos una vez en los tests. Es una métrica útil pero no garantiza calidad: puedes tener 100% de cobertura con tests malos.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Jest, Istanbul y otras herramientas generan reportes: \"80% statements, 70% branches, 90% functions\". Te muestran qué líneas nunca se testearon.",
            },
        ],
        analogia:
            "La cobertura es como el porcentaje de la casa que barrí. Barrer el 90% suena bien, pero si el 10% restante es la cocina, no está tan bien. Y barrer no garantiza que quedó limpio: depende de cómo barrí.",
        tags: ["cobertura", "metricas", "testing"],
    },
    {
        id: 172,
        slug: "que-es-la-depuracion-debugging",
        nivelId: 9,
        orden: 6,
        titulo: "¿Qué es la depuración (debugging)?",
        definicion:
            "Es el proceso de encontrar y corregir errores en el código. Se usan breakpoints, logs, inspección de variables, herramientas del navegador o IDE. Es una de las actividades más comunes del desarrollo.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Pones un breakpoint en Chrome DevTools, ejecutas, y ves paso a paso qué valores tienen las variables. Descubres que `precio` está en `undefined` por un typo.",
            },
        ],
        analogia:
            "Depurar es como ser detective de un crimen. Hay un síntoma (el bug), y tú sigues pistas (logs, breakpoints) hasta encontrar al culpable (la línea de código). A veces es obvio, a veces es un caso complejo.",
        tags: ["debugging", "breakpoints", "devtools"],
    },
    {
        id: 173,
        slug: "que-es-un-log",
        nivelId: 9,
        orden: 7,
        titulo: "¿Qué es un log?",
        definicion:
            "Es un registro de eventos que el sistema escribe mientras corre. Puede incluir errores, advertencias, información, debug. Sirve para entender qué pasó, especialmente en producción donde no puedes usar breakpoints.",
        ejemplo: [
            {
                tipo: "codigo",
                lenguaje: "javascript",
                contenido:
                    'console.log("Usuario creado:", userId);\nconsole.error("Fallo al conectar a la base:", err);',
            },
            {
                tipo: "texto",
                contenido:
                    "En producción, los logs se envían a sistemas como Datadog, Sentry, CloudWatch.",
            },
        ],
        analogia:
            "Un log es como el cuaderno de bitácora de un barco. Anota todo lo que pasa: a qué hora salió, qué clima hubo, qué problemas surgieron. Si algo sale mal, revisas el cuaderno para entender qué pasó.",
        tags: ["logs", "monitoreo", "observabilidad"],
    },
    {
        id: 174,
        slug: "que-es-el-profiling",
        nivelId: 9,
        orden: 8,
        titulo: "¿Qué es el profiling?",
        definicion:
            "Es medir el rendimiento del código para encontrar dónde se gasta el tiempo y los recursos. Se usan herramientas (profilers) que muestran qué funciones consumen más CPU, memoria o tiempo. No arregla nada: *identifica* dónde arreglar.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Chrome DevTools tiene un profiler que muestra un \"flame graph\" con las funciones que más tardan. Descubres que `renderizarLista` tarda 800ms y es el cuello de botella.",
            },
        ],
        analogia:
            "El profiling es como un examen médico con estudios. No te cura, pero te dice exactamente dónde está el problema: \"el colesterol alto\", \"la rodilla inflamada\". Después de eso, decides qué hacer.",
        tags: ["profiling", "rendimiento", "devtools"],
    },
    {
        id: 175,
        slug: "que-es-un-cuello-de-botella",
        nivelId: 9,
        orden: 9,
        titulo: "¿Qué es un cuello de botella?",
        definicion:
            "Es el punto del sistema que limita el rendimiento general. Aunque todas las demás partes sean rápidas, el cuello de botella marca el ritmo. Puede ser CPU, memoria, red, base de datos, disco.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tu app responde en 2 segundos. Descubres que 1.8s se van en una consulta SQL sin índice. Esa consulta es el cuello de botella. Optimizarla mejora todo.",
            },
        ],
        analogia:
            "Un cuello de botella es como el carril que se cierra en una autopista. Todos los carriles son rápidos, pero al llegar al cierre, todos se frenan. El tráfico entero depende de ese punto.",
        tags: ["cuello-de-botella", "rendimiento", "optimizacion"],
    },
    {
        id: 176,
        slug: "que-es-la-optimizacion-de-consultas",
        nivelId: 9,
        orden: 10,
        titulo: "¿Qué es la optimización de consultas?",
        definicion:
            "Es mejorar la velocidad de las consultas a la base de datos: agregar índices, reescribir JOINs, evitar SELECT *, reducir subconsultas, usar paginación, cachear resultados. Es una de las optimizaciones más rentables.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una consulta tardaba 3 segundos. Le agregas un índice a la columna `fecha`, y baja a 20ms. Cambio enorme con poco esfuerzo.",
            },
        ],
        analogia:
            "Optimizar consultas es como reorganizar un almacén para encontrar cosas rápido. En vez de buscar en todas las cajas, pones etiquetas y estantes ordenados. El mismo trabajo, mucho menos tiempo.",
        tags: ["optimizacion", "consultas", "indices"],
    },
    {
        id: 177,
        slug: "que-es-la-carga-diferida-lazy-loading",
        nivelId: 9,
        orden: 11,
        titulo: "¿Qué es la carga diferida (lazy loading)?",
        definicion:
            "Es cargar recursos *solo cuando se necesitan*, no todos al inicio. Imágenes que se cargan al hacer scroll, módulos que se importan al entrar a una ruta, componentes que se renderizan al mostrarse.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Una web con 100 imágenes. Al inicio solo carga las 5 visibles; las demás se cargan cuando haces scroll. La página carga mucho más rápido.",
            },
        ],
        analogia:
            "Lazy loading es como no servir todos los platos de un buffet a la vez. Sirves los que el comensal va a comer primero, y cuando pide más, sirves más. Así no se desperdicia ni se satura.",
        tags: ["lazy-loading", "rendimiento", "imagenes"],
    },
    {
        id: 178,
        slug: "que-es-la-paginacion",
        nivelId: 9,
        orden: 12,
        titulo: "¿Qué es la paginación?",
        definicion:
            "Es dividir resultados grandes en páginas más pequeñas. En vez de devolver 10.000 productos, devuelves 20 por página. Se usan parámetros como `page`, `limit`, `offset` o `cursor`. Reduce carga, tiempo y memoria.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`GET /productos?page=2&limit=20` devuelve los productos 21 al 40. La UI muestra \"página 2 de 500\".",
            },
        ],
        analogia:
            "La paginación es como un libro con páginas. No imprimes todo el contenido en una hoja gigante: lo divides en páginas. El lector lee una a la vez, y puede ir y volver.",
        tags: ["paginacion", "api", "rendimiento"],
    },
    {
        id: 179,
        slug: "que-es-la-observabilidad",
        nivelId: 9,
        orden: 13,
        titulo: "¿Qué es la observabilidad?",
        definicion:
            "Es la capacidad de entender el estado interno de un sistema a partir de sus salidas externas. Se basa en tres pilares: **logs** (qué pasó), **métricas** (números agregados) y **trazas** (el recorrido de una petición por varios servicios). Permite diagnosticar problemas en producción.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Con Datadog o Grafana, ves métricas de CPU, latencia y errores; logs con detalle; y trazas que muestran que una petición tardó 2s en el servicio de pagos. Todo junto te dice qué pasó.",
            },
        ],
        analogia:
            "La observabilidad es como los instrumentos de un avión. El piloto no ve el motor, pero ve las agujas (métricas), los registros (logs) y las alertas (trazas). Con eso entiende qué pasa aunque no esté dentro del motor.",
        tags: ["observabilidad", "metricas", "trazas"],
    },
    {
        id: 180,
        slug: "que-son-las-metricas-de-rendimiento-web",
        nivelId: 9,
        orden: 14,
        titulo: "¿Qué son las métricas de rendimiento web?",
        definicion:
            "Son números que miden qué tan rápido y fluida es una web para el usuario. Las principales (Core Web Vitals de Google) son:\n- **LCP** (Largest Contentful Paint): cuándo carga el contenido principal.\n- **FID/INP** (First Input Delay / Interaction to Next Paint): qué tan rápido responde a la interacción.\n- **CLS** (Cumulative Layout Shift): cuánto salta el contenido mientras carga.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Si tu LCP es 4s, Google te penaliza en SEO y los usuarios se van. Si tu CLS es alto, los botones se mueven y los usuarios hacen clic mal.",
            },
        ],
        analogia:
            "Las métricas de rendimiento web son como los indicadores de un auto: velocidad, consumo, frenado. No manejas mirándolos todo el tiempo, pero si alguno está mal, el viaje se vuelve incómodo o peligroso.",
        tags: ["core-web-vitals", "rendimiento", "seo"],
    },
    {
        id: 181,
        slug: "que-es-un-sistema-operativo-de-servidor",
        nivelId: 10,
        orden: 1,
        titulo: "¿Qué es un sistema operativo de servidor?",
        definicion:
            "Es un sistema operativo diseñado para correr en servidores: encendido 24/7, sin interfaz gráfica (o mínima), optimizado para red, seguridad y múltiples usuarios. Ejemplos: Ubuntu Server, Debian, CentOS, Red Hat, Windows Server.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "El servidor donde corre Wikipedia usa Linux. No tiene monitor ni mouse: se administra por terminal remota y está optimizado para servir millones de peticiones.",
            },
        ],
        analogia:
            "Un sistema operativo de servidor es como un camión de carga. No tiene asientos cómodos ni radio bonita como un auto de paseo (Windows de escritorio), pero está hecho para trabajar: cargar peso, andar todo el día, resistir.",
        tags: ["linux", "servidor", "sistemas-operativos"],
    },
    {
        id: 182,
        slug: "que-es-un-proceso",
        nivelId: 10,
        orden: 2,
        titulo: "¿Qué es un proceso?",
        definicion:
            "Es un programa en ejecución. Cuando abres un programa, el sistema operativo le asigna memoria, CPU y recursos, y lo ejecuta como un proceso. Cada proceso tiene su propio espacio de memoria y puede correr en paralelo con otros.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cuando corres `node app.js`, se crea un proceso de Node con su PID (identificador). Si abres Chrome, hay un proceso por pestaña (en muchos casos).",
            },
        ],
        analogia:
            "Un proceso es como un empleado trabajando. El programa es el manual de instrucciones; el proceso es el empleado ejecutándolo. Puedes tener varios empleados haciendo lo mismo al mismo tiempo.",
        tags: ["proceso", "cpu", "memoria"],
    },
    {
        id: 183,
        slug: "que-es-una-variable-de-entorno",
        nivelId: 10,
        orden: 3,
        titulo: "¿Qué es una variable de entorno?",
        definicion:
            "Es un valor de configuración que vive *fuera* del código, en el entorno donde corre el programa. Se usa para guardar credenciales, URLs, modos (producción/desarrollo), sin hardcodearlas. Se accede con `process.env.NOMBRE` en Node, `os.environ` en Python, etc.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`DATABASE_URL=postgres://user:pass@host:5432/db`. El código lee esa variable y sabe a qué base conectarse. En desarrollo apunta a una base local; en producción, a la real.",
            },
        ],
        analogia:
            "Las variables de entorno son como los ajustes del clima del lugar donde trabajas. No cambias tu forma de trabajar, pero te adaptas al contexto: si hace frío, sacas abrigo; si hace calor, te pones fresco. El entorno cambia, tú te adaptas leyéndolo.",
        tags: ["variables-de-entorno", "configuracion", "dotenv"],
    },
    {
        id: 184,
        slug: "que-es-nginx",
        nivelId: 10,
        orden: 4,
        titulo: "¿Qué es Nginx?",
        definicion:
            "Es un servidor web y proxy inverso muy usado. Sirve archivos estáticos, hace de intermediario entre clientes y aplicaciones, balancea carga, maneja SSL, y es famoso por su rendimiento y bajo consumo. Es la puerta de entrada de la mayoría de las webs modernas.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tu app Node corre en el puerto 3000. Nginx escucha en el 80/443, recibe las peticiones, las pasa a Node, y devuelve las respuestas. También sirve las imágenes y el CSS directo, sin molestar a Node.",
            },
        ],
        analogia:
            "Nginx es como el portero de un edificio. Recibe a todos los visitantes, les indica a qué oficina ir, y se encarga de tareas simples (entregar folletos) para que las oficinas (la app) se dediquen a lo complejo.",
        tags: ["nginx", "servidor-web", "proxy"],
    },
    {
        id: 185,
        slug: "que-es-apache",
        nivelId: 10,
        orden: 5,
        titulo: "¿Qué es Apache?",
        definicion:
            "Es otro servidor web, más antiguo y muy usado históricamente. Similar a Nginx en función: sirve archivos, corre aplicaciones (PHP, Python) y maneja SSL. Es más pesado pero muy flexible y modular.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Muchos WordPress corren sobre Apache con PHP. Apache procesa las peticiones y ejecuta el código PHP.",
            },
        ],
        analogia:
            "Apache es como un mayordomo veterano: muy confiable, sabe hacer de todo, pero más lento que un portero joven (Nginx). Muchos edificios antiguos lo siguen usando con cariño.",
        tags: ["apache", "servidor-web", "php"],
    },
    {
        id: 186,
        slug: "que-es-un-proxy-inverso",
        nivelId: 10,
        orden: 6,
        titulo: "¿Qué es un proxy inverso?",
        definicion:
            "Es un servidor que se pone *delante* de tus aplicaciones y recibe todas las peticiones de los clientes. Luego las reenvía al servidor adecuado, y devuelve la respuesta. Oculta la infraestructura interna, maneja SSL, cachea, balancea carga.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Nginx como proxy inverso: recibe `https://tienda.com/api/...` y lo manda a `http://localhost:3000/...`. El cliente nunca sabe que hay un Node detrás.",
            },
        ],
        analogia:
            "Un proxy inverso es como la recepcionista de una empresa. Los clientes llaman a un solo número; ella decide a qué departamento pasarlos. Nadie conoce los números internos, solo el de recepción.",
        tags: ["proxy", "nginx", "balanceo"],
    },
    {
        id: 187,
        slug: "que-es-docker",
        nivelId: 10,
        orden: 7,
        titulo: "¿Qué es Docker?",
        definicion:
            "Es una herramienta que empaqueta una aplicación con *todo lo que necesita* (código, librerías, configuraciones, sistema base) en una unidad llamada contenedor. Ese contenedor corre igual en cualquier máquina con Docker instalado. Resuelve el \"en mi máquina funciona\".",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Empaquetas tu app Node con su versión de Node, sus dependencias y su config en un contenedor. Lo corres en tu laptop, en el servidor de staging y en producción, idéntico.",
            },
        ],
        analogia:
            "Docker es como una vianda. Preparas la comida con todo lo necesario y la sellas. Donde la abras, tendrá lo mismo. No importa si es en tu casa, en la oficina o en un picnic: la vianda es la misma.",
        tags: ["docker", "contenedores", "empaquetado"],
    },
    {
        id: 188,
        slug: "que-es-un-contenedor",
        nivelId: 10,
        orden: 8,
        titulo: "¿Qué es un contenedor?",
        definicion:
            "Es una instancia en ejecución de una imagen Docker. Corre aislado del sistema anfitrión y de otros contenedores, con su propio sistema de archivos, red y procesos. Es más liviano que una máquina virtual porque comparte el kernel del host.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Corres `docker run -p 3000:3000 mi-app`. Se crea un contenedor con tu app escuchando en el puerto 3000. Puedes correr 10 contenedores de la misma imagen sin conflicto.",
            },
        ],
        analogia:
            "Un contenedor es como un departamento dentro de un edificio. Cada uno tiene su espacio, su puerta, su cocina. Comparten la estructura del edificio (kernel) pero viven aislados.",
        tags: ["contenedor", "docker", "aislamiento"],
    },
    {
        id: 189,
        slug: "que-es-una-imagen-docker",
        nivelId: 10,
        orden: 9,
        titulo: "¿Qué es una imagen Docker?",
        definicion:
            "Es la \"plantilla\" o \"receta\" a partir de la cual se crean los contenedores. Define qué sistema base, qué archivos, qué comandos. Es inmutable. Un contenedor es una instancia en ejecución de una imagen.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`node:20-alpine` es una imagen. `docker run node:20-alpine` crea un contenedor a partir de ella. Puedes crear 100 contenedores de la misma imagen.",
            },
        ],
        analogia:
            "La imagen es como el molde de una galletita; los contenedores son las galletitas. Puedes hacer muchas galletitas iguales con el mismo molde. El molde no cambia; las galletitas se comen (se destruyen).",
        tags: ["imagen", "docker", "plantilla"],
    },
    {
        id: 190,
        slug: "que-es-ci-cd",
        nivelId: 10,
        orden: 10,
        titulo: "¿Qué es CI/CD?",
        definicion:
            "*Continuous Integration / Continuous Delivery* (o *Deployment*). CI: cada cambio que subes se integra automáticamente, se testea y se valida. CD: si pasa los tests, se despliega automáticamente a staging o producción. Automatiza todo el camino del código al usuario.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Haces push a `main`. GitHub Actions corre los tests, construye la imagen Docker y la despliega al servidor. Todo sin intervención manual.",
            },
        ],
        analogia:
            "CI/CD es como una línea de montaje automatizada. Cada pieza (cambio) que entra se revisa, se ensambla, se pinta y sale como producto terminado sin que un humano mueva cada cosa a mano.",
        tags: ["ci-cd", "automatizacion", "github-actions"],
    },
    {
        id: 191,
        slug: "que-es-un-pipeline",
        nivelId: 10,
        orden: 11,
        titulo: "¿Qué es un pipeline?",
        definicion:
            "Es la secuencia de pasos automatizados que corre CI/CD: instalar dependencias, correr tests, construir, analizar, desplegar. Cada paso debe pasar para ir al siguiente. Si uno falla, se detiene y avisa.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un pipeline típico: 1) checkout, 2) npm install, 3) npm test, 4) npm run build, 5) docker build, 6) docker push, 7) deploy. Si el paso 3 falla, nada más corre.",
            },
        ],
        analogia:
            "Un pipeline es como una línea de producción con estaciones. Cada estación hace una tarea y pasa el producto a la siguiente. Si una falla, la línea se detiene. Nada sale defectuoso al final.",
        tags: ["pipeline", "ci-cd", "automatizacion"],
    },
    {
        id: 192,
        slug: "que-es-un-entorno-de-desarrollo",
        nivelId: 10,
        orden: 12,
        titulo: "¿Qué es un entorno de desarrollo?",
        definicion:
            "Es el ambiente donde los programadores escriben y prueban código. Tiene datos de prueba, herramientas de debug, y no afecta a usuarios reales. Generalmente corre en la máquina del desarrollador o en un servidor de desarrollo.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tu laptop con la app corriendo en `localhost:3000`, con una base de datos local con datos falsos. Ahí rompes todo lo que quieras sin consecuencias.",
            },
        ],
        analogia:
            "El entorno de desarrollo es como un taller de ensayo. Ahí practicas, equivocas, rompes y arreglas sin que nadie te vea. Nadie del público (usuarios) está mirando.",
        tags: ["entorno", "desarrollo", "localhost"],
    },
    {
        id: 193,
        slug: "que-es-staging",
        nivelId: 10,
        orden: 13,
        titulo: "¿Qué es staging?",
        definicion:
            "Es un entorno *casi* idéntico a producción, con datos y configuración similares, pero sin usuarios reales. Sirve para probar todo antes de pasar a producción. Es la última parada antes del lanzamiento.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Subes tu cambio a staging, el equipo de QA prueba, y si todo está bien, se despliega a producción.",
            },
        ],
        analogia:
            "Staging es como el ensayo general de una obra de teatro. Vestuario, luces, escenario, todo igual que el estreno, pero sin público. Si algo sale mal, se corrige antes de la función real.",
        tags: ["staging", "qa", "entornos"],
    },
    {
        id: 194,
        slug: "que-es-produccion",
        nivelId: 10,
        orden: 14,
        titulo: "¿Qué es producción?",
        definicion:
            "Es el entorno real, donde los usuarios usan la aplicación. Tiene datos reales, tráfico real, y cualquier error afecta a personas de verdad. Se despliega con cuidado, con backups, monitoreo y planes de rollback.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`https://tienda.com` es producción. Si se cae, los clientes no pueden comprar. Cada deploy a producción se hace con red de seguridad.",
            },
        ],
        analogia:
            "Producción es el estreno con público. Ya no hay red: lo que salga mal, sale mal en vivo. Por eso se ensaya tanto antes (staging) y se tiene plan B (rollback).",
        tags: ["produccion", "entornos", "deploy"],
    },
    {
        id: 195,
        slug: "que-es-un-despliegue",
        nivelId: 10,
        orden: 15,
        titulo: "¿Qué es un despliegue?",
        definicion:
            "Es el proceso de llevar el código desde el repositorio hasta el servidor donde corre. Puede ser manual o automático, y hay varias estrategias: reemplazo total, blue-green, canary, rolling. El objetivo es actualizar sin romper.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "`git push` a `main` → CI/CD construye la imagen → la sube al servidor → reinicia los contenedores con la nueva versión.",
            },
        ],
        analogia:
            "Un despliegue es como cambiar el motor de un avión en pleno vuelo. Hay que hacerlo sin que los pasajeros noten nada. Hay técnicas (blue-green, canary) para que el cambio sea invisible.",
        tags: ["despliegue", "deploy", "estrategias"],
    },
    {
        id: 196,
        slug: "que-es-un-rollback",
        nivelId: 10,
        orden: 16,
        titulo: "¿Qué es un rollback?",
        definicion:
            "Es volver a la versión anterior cuando un despliegue sale mal. Se guarda la versión previa y se restaura en segundos o minutos. Es la red de seguridad de todo deploy.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Desplegaste la v2 y los usuarios reportan errores. Haces rollback a la v1 y el sistema vuelve a funcionar mientras investigas qué falló.",
            },
        ],
        analogia:
            "El rollback es como el botón de \"deshacer\" de Word. Si el cambio arruinó el documento, presionas Ctrl+Z y vuelves a la versión anterior. Sin él, cada error sería catastrófico.",
        tags: ["rollback", "deploy", "recuperacion"],
    },
    {
        id: 197,
        slug: "que-es-un-backup",
        nivelId: 10,
        orden: 17,
        titulo: "¿Qué es un backup?",
        definicion:
            "Es una copia de seguridad de datos (base, archivos, configuraciones) guardada en otro lugar. Sirve para recuperar información si algo se pierde, se corrompe o es atacado. Debe ser periódico, automático y probado.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Cada noche, la base de datos se copia a un almacenamiento externo (S3, otro servidor). Si mañana se borra algo, se restaura desde el backup de anoche.",
            },
        ],
        analogia:
            "Un backup es como tener una copia de las llaves de tu casa en lo de un vecino. Si pierdes las tuyas, no te quedas afuera. Si no tienes copia, un día te quedas en la calle.",
        tags: ["backup", "copias", "seguridad"],
    },
    {
        id: 198,
        slug: "que-es-la-restauracion-de-una-base-de-datos",
        nivelId: 10,
        orden: 18,
        titulo: "¿Qué es la restauración de una base de datos?",
        definicion:
            "Es recuperar la base a partir de un backup. Se usa cuando hubo corrupción, borrado accidental, ataque o fallo. Es un proceso crítico: hay que saber *cómo* restaurar antes de necesitarlo.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Alguien borró la tabla `usuarios` por error. Restauras el backup de anoche, pierdes los datos del día, pero recuperas todo lo anterior.",
            },
        ],
        analogia:
            "Restaurar es como usar la copia de llaves del vecino. Tenías backup (la copia), y ahora la usas para volver a entrar. Si nunca probaste la copia, puede que no funcione cuando la necesites.",
        tags: ["restauracion", "backup", "recuperacion"],
    },
    {
        id: 199,
        slug: "que-es-cdn",
        nivelId: 10,
        orden: 19,
        titulo: "¿Qué es una CDN?",
        definicion:
            "*Content Delivery Network*. Es una red de servidores distribuidos por el mundo que cachean y sirven contenido estático (imágenes, CSS, JS, videos) desde el servidor más cercano al usuario. Reduce latencia y carga del servidor principal. Ejemplos: Cloudflare, Akamai, CloudFront.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Un usuario en Argentina pide una imagen de una web hosteada en EE.UU. Sin CDN, la imagen viaja 8000 km. Con CDN, la sirve un servidor en Buenos Aires en milisegundos.",
            },
        ],
        analogia:
            "Una CDN es como tener sucursales de una biblioteca en cada barrio. En vez de ir a la central (lejos), vas a la sucursal más cercana. Mismo contenido, mucho más rápido.",
        tags: ["cdn", "cache", "rendimiento"],
    },
    {
        id: 200,
        slug: "que-es-la-escalabilidad",
        nivelId: 10,
        orden: 20,
        titulo: "¿Qué es la escalabilidad?",
        definicion:
            "Es la capacidad de un sistema de manejar más carga (usuarios, datos, peticiones) sin degradarse. Hay dos tipos:\n- **Vertical:** mejorar el servidor (más CPU, más RAM).\n- **Horizontal:** agregar más servidores y repartir la carga.",
        ejemplo: [
            {
                tipo: "texto",
                contenido:
                    "Tu app aguanta 100 usuarios. Con escalabilidad horizontal, agregas 5 servidores más y aguanta 500. Con vertical, mejoras el servidor y aguanta 300.",
            },
        ],
        analogia:
            "Escalar es como un restaurante que recibe más clientes. Vertical: agrandas la cocina y contratas más cocineros. Horizontal: abres sucursales en otros barrios. Ambas funcionan; la horizontal es más flexible a gran escala.",
        tags: ["escalabilidad", "horizontal", "vertical"],
    },
];

// Helpers de consulta sobre los arrays exportados.

/**
 * Busca un concepto por su slug.
 *
 * @param slug - Slug kebab-case del concepto
 * @returns El concepto encontrado o `undefined` si no existe
 */
export const getConceptoBySlug = (slug: string) =>
    conceptos.find((c) => c.slug === slug);

/**
 * Busca un concepto por su id numérico.
 *
 * @param id - Identificador numérico del concepto (1-200)
 * @returns El concepto encontrado o `undefined` si no existe
 */
export const getConceptoById = (id: number) =>
    conceptos.find((c) => c.id === id);

/**
 * Filtra los conceptos que pertenecen a un nivel.
 *
 * @param nivelId - Identificador del nivel (1-10)
 * @returns Array con los conceptos del nivel
 */
export const getConceptosByNivel = (nivelId: number) =>
    conceptos.filter((c) => c.nivelId === nivelId);

/**
 * Busca un nivel por su slug.
 *
 * @param slug - Slug kebab-case del nivel
 * @returns El nivel encontrado o `undefined` si no existe
 */
export const getNivelBySlug = (slug: string) =>
    niveles.find((n) => n.slug === slug);

/**
 * Busca conceptos por texto libre en título, definición y tags.
 *
 * @param query - Texto a buscar (se compara en minúsculas)
 * @returns Array con los conceptos que coinciden con la búsqueda
 */
export const buscarConceptos = (query: string) => {
    const q = query.toLowerCase();
    return conceptos.filter(
        (c) =>
            c.titulo.toLowerCase().includes(q) ||
            c.definicion.toLowerCase().includes(q) ||
            c.tags.some((t) => t.includes(q)),
    );
};
