/**
 * Spanish catalog. Keys are the exact English strings used in the UI; a key
 * that no longer appears in the source is dead and gets flagged by es.test.ts.
 */
export const es: Readonly<Record<string, string>> = {
  // Common
  Close: "Cerrar",
  Search: "Buscar",
  "Search...": "Buscar...",
  Settings: "Ajustes",
  System: "Sistema",
  English: "English",
  Español: "Español",
  Language: "Idioma",
  "Interface language. System follows your browser or operating system.":
    "Idioma de la interfaz. Sistema sigue el idioma del navegador o del sistema operativo.",
  "Reset to default": "Restablecer valor predeterminado",
  "Error occurred": "Se ha producido un error",

  // Settings navigation
  General: "General",
  Appearance: "Apariencia",
  Projects: "Proyectos",
  Keybindings: "Atajos de teclado",
  SnapShots: "SnapShots",
  Providers: "Proveedores",
  Integrations: "Integraciones",
  "Source Control": "Control de versiones",
  Connections: "Conexiones",
  Archive: "Archivo",
  Diagnostics: "Diagnóstico",
  "Settings breadcrumb": "Ruta de ajustes",
  "Search settings": "Buscar en ajustes",
  "Clear settings search": "Borrar búsqueda de ajustes",
  "Settings search results": "Resultados de búsqueda de ajustes",
  "No settings found": "No se encontraron ajustes",

  // Settings: general
  Organization: "Organización",
  "Project grouping": "Agrupación de proyectos",
  "Combine matching repositories across environments.":
    "Combina los repositorios coincidentes de distintos entornos.",
  "Auto-settle merged threads": "Asentar hilos fusionados automáticamente",
  "Settle a thread when its pull request merges. Closed pull requests still settle automatically.":
    "Asienta un hilo cuando se fusiona su pull request. Las pull requests cerradas también se asientan automáticamente.",
  "Auto-settle inactive threads": "Asentar hilos inactivos automáticamente",
  "Sidebar threads with no activity for this long settle automatically.":
    "Los hilos de la barra lateral sin actividad durante este tiempo se asientan automáticamente.",
  "Days of inactivity before auto-settle": "Días de inactividad antes de asentar",
  "Any new activity un-settles a thread automatically.":
    "Cualquier actividad nueva vuelve a activar el hilo automáticamente.",
  "Continue threads after restarts": "Continuar hilos tras reinicios",
  "Automatically resume interrupted threads after an update, crash, or machine restart. Applies to this environment and all connected environments that support it. Update older servers first.":
    "Reanuda automáticamente los hilos interrumpidos tras una actualización, un fallo o un reinicio del equipo. Se aplica a este entorno y a todos los entornos conectados que lo admitan. Actualiza primero los servidores antiguos.",
  Behavior: "Comportamiento",
  "New threads": "Hilos nuevos",
  "Where new threads start, unless overridden by the project or t3.json.":
    "Dónde empiezan los hilos nuevos, salvo que el proyecto o t3.json lo cambien.",
  "Start from origin": "Empezar desde origin",
  "Creates the worktree from the latest matching branch on origin instead of your local branch.":
    "Crea el worktree desde la rama coincidente más reciente en origin en lugar de tu rama local.",
  "Automatically pull": "Hacer pull automáticamente",
  "Keeps the default branch current when the checkout has no local changes or commits. Projects can override it.":
    "Mantiene la rama principal al día cuando el checkout no tiene cambios ni commits locales. Los proyectos pueden cambiarlo.",
  "Keeps the default branch current in the background when the checkout has no local changes or commits.":
    "Mantiene la rama principal al día en segundo plano cuando el checkout no tiene cambios ni commits locales.",
  "Git fetch interval": "Intervalo de fetch de Git",
  "Health check interval": "Intervalo de comprobación de estado",
  "Provider update checks": "Comprobar actualizaciones de proveedores",
  "Check installed provider CLIs for newer available versions.":
    "Comprueba si hay versiones nuevas de las CLI de los proveedores instalados.",
  "Refresh provider status, versions, and models in the background. Set to 0 to disable.":
    "Actualiza en segundo plano el estado, las versiones y los modelos de los proveedores. Pon 0 para desactivarlo.",
  "Show skills in slash menu": "Mostrar skills en el menú /",
  "Also include skills in the / command menu. Skills always appear when you type $.":
    "Incluye también las skills en el menú de comandos /. Las skills siempre aparecen al escribir $.",
  "Collapse composer on scroll": "Contraer el compositor al desplazarse",
  "Rest the composer of an existing thread into a single line when you scroll the conversation. Focus the composer or start typing to expand it again.":
    "Reduce el compositor de un hilo existente a una sola línea cuando te desplazas por la conversación. Enfoca el compositor o empieza a escribir para expandirlo de nuevo.",
  "Proactive panels": "Paneles proactivos",
  "Open linked pull requests when found and turn diffs when work changes files.":
    "Abre las pull requests vinculadas cuando se detectan y muestra los diffs cuando el trabajo cambia archivos.",
  "Auto-show floating preview": "Mostrar vista previa flotante automáticamente",
  "Show the floating preview when an agent opens a browser unless the agent says otherwise.":
    "Muestra la vista previa flotante cuando un agente abre un navegador, salvo que el agente indique lo contrario.",
  "Follow change request templates": "Seguir plantillas de pull request",
  "Use the repository's template for change request descriptions when available.":
    "Usa la plantilla del repositorio para las descripciones de pull request cuando exista.",
  Confirmations: "Confirmaciones",
  "Archive confirmation": "Confirmar archivado",
  "Require a second click on the inline archive action before a thread is archived.":
    "Exige un segundo clic en la acción de archivar antes de archivar un hilo.",
  "Delete confirmation": "Confirmar eliminación",
  "Ask before deleting a thread and its chat history.":
    "Pregunta antes de eliminar un hilo y su historial de chat.",
  "Unpin confirmation": "Confirmar desanclado",
  "Ask before unpinning a thread from the pinned section.":
    "Pregunta antes de desanclar un hilo de la sección de anclados.",
  Models: "Modelos",
  Model: "Modelo",
  "Text generation model": "Modelo de generación de texto",
  "Text generation": "Generación de texto",
  "Used for thread titles and other generated text on connected devices with this provider. Source control can override it.":
    "Se usa para los títulos de hilo y otros textos generados en los dispositivos conectados con este proveedor. El control de versiones puede cambiarlo.",
  "Default model for new threads. Projects can override it.":
    "Modelo predeterminado para hilos nuevos. Los proyectos pueden cambiarlo.",
  "Background activity": "Actividad en segundo plano",
  "Publish agent activity": "Publicar actividad de los agentes",
  "Send activity to mobile notifications and Live Activities without T3 Connect.":
    "Envía la actividad a las notificaciones móviles y Live Activities sin T3 Connect.",
  "Load balancing": "Balanceo de carga",
  "Automatically balance load": "Balancear la carga automáticamente",
  "Choose a machine automatically for new threads in shared projects.":
    "Elige automáticamente una máquina para los hilos nuevos en proyectos compartidos.",
  "Remote environments": "Entornos remotos",
  "This environment": "Este entorno",
  "Environment identification": "Identificación del entorno",
  "Choose how Dev and Nightly environments are identified.":
    "Elige cómo se identifican los entornos Dev y Nightly.",
  "Environment icon": "Icono del entorno",
  Environment: "Entorno",
  "Server environment": "Entorno del servidor",
  "The machine other devices see this environment as. Automatic uses what the server detected.":
    "La máquina con la que otros dispositivos ven este entorno. Automático usa lo que detectó el servidor.",
  "Network access": "Acceso de red",
  "Tailscale HTTPS": "HTTPS de Tailscale",
  "Administrative access": "Acceso administrativo",
  "Authorized clients": "Clientes autorizados",
  "Limited permissions": "Permisos limitados",
  "Pairing links and client-session management require the access:write scope for this backend.":
    "Los enlaces de emparejamiento y la gestión de sesiones de cliente requieren el permiso access:write en este backend.",
  "Pairing link — scan to open on another device":
    "Enlace de emparejamiento: escanéalo para abrirlo en otro dispositivo",
  "T3 Connect": "T3 Connect",
  "WSL backend": "Backend WSL",
  "WSL only": "Solo WSL",
  "Run the selected WSL distro alongside Windows. Projects remain on their current filesystem.":
    "Ejecuta la distro WSL seleccionada junto a Windows. Los proyectos siguen en su sistema de archivos actual.",
  "Run only the WSL backend. T3 Code restarts when this changes.":
    "Ejecuta solo el backend WSL. T3 Code se reinicia al cambiar esto.",
  "WSL is unavailable, so Windows is running instead. Turn WSL off to clear this preference.":
    "WSL no está disponible, así que se está usando Windows. Desactiva WSL para borrar esta preferencia.",
  "Couldn't load the WSL backend state.": "No se pudo cargar el estado del backend WSL.",
  "Quit shortcut": "Atajo para salir",
  "Hold mode also quits on two quick presses.":
    "El modo de mantener también sale con dos pulsaciones rápidas.",
  "Open links in": "Abrir enlaces en",
  "Where links in the chat and terminal open. Hold ⌘ or Ctrl while clicking a link to open it in your default browser either way.":
    "Dónde se abren los enlaces del chat y del terminal. Mantén ⌘ o Ctrl al hacer clic en un enlace para abrirlo en tu navegador predeterminado de todas formas.",
  "Time format": "Formato de hora",
  "System default follows your browser or OS clock preference.":
    "Predeterminado del sistema sigue la preferencia de reloj del navegador o del sistema operativo.",
  About: "Acerca de",
  "Current version of the application.": "Versión actual de la aplicación.",
  "Update track": "Canal de actualizaciones",
  "Use stable releases or nightly builds. Switch back anytime.":
    "Usa versiones estables o compilaciones nightly. Puedes volver cuando quieras.",
  "Switches the hosted app release channel.": "Cambia el canal de versiones de la app alojada.",
  Advanced: "Avanzado",
  Danger: "Peligro",
  "Sidebar (legacy)": "Barra lateral (antigua)",
  "Restore per-project thread trees instead of the default flat sidebar.":
    "Restaura los árboles de hilos por proyecto en lugar de la barra lateral plana predeterminada.",
  "Plan mode (legacy)": "Modo plan (antiguo)",
  "Restore Build/Plan, /plan, /default, and Shift+Tab. Off uses build mode.":
    "Restaura Build/Plan, /plan, /default y Shift+Tab. Desactivado usa el modo build.",
  "Stream token by token (legacy)": "Transmitir token a token (antiguo)",
  "Stream output token by token. This legacy mode is slower and harder to follow.":
    "Transmite la salida token a token. Este modo antiguo es más lento y más difícil de seguir.",
  "Context window indicator (legacy)": "Indicador de ventana de contexto (antiguo)",
  "Shows context window usage as a circular indicator in the composer.":
    "Muestra el uso de la ventana de contexto como un indicador circular en el compositor.",

  // Settings: appearance
  "Colors & themes": "Colores y temas",
  "Color scheme": "Esquema de color",
  Themes: "Temas",
  Contrast: "Contraste",
  "Adjust the contrast of colors and borders across the interface.":
    "Ajusta el contraste de colores y bordes en toda la interfaz.",
  "Glass opacity": "Opacidad del cristal",
  "Higher values make menus, dialogs, and the composer more solid.":
    "Valores más altos hacen más sólidos los menús, los diálogos y el compositor.",
  Typography: "Tipografía",
  "Interface font": "Fuente de la interfaz",
  "Everything outside code blocks and the terminal.":
    "Todo lo que está fuera de los bloques de código y del terminal.",
  "Prompt font": "Fuente del prompt",
  "Only the box you write prompts in. Mono works well here.":
    "Solo la caja donde escribes los prompts. Una monoespaciada funciona bien aquí.",
  "Code font": "Fuente de código",
  "Code blocks, diffs, file previews, and the terminal.":
    "Bloques de código, diffs, vistas previas de archivos y el terminal.",
  "Terminal font": "Fuente del terminal",
  "Terminal output, independent from code blocks and diffs.":
    "Salida del terminal, independiente de los bloques de código y los diffs.",
  "Monospace font": "Fuente monoespaciada",
  "Font smoothing": "Suavizado de fuente",
  "Use thinner grayscale text smoothing instead of the macOS default.":
    "Usa un suavizado de texto en escala de grises más fino en lugar del predeterminado de macOS.",
  "Word wrap": "Ajuste de línea",
  "Wrap long lines in code blocks, tables, diffs, and file previews by default.":
    "Ajusta las líneas largas en bloques de código, tablas, diffs y vistas previas de archivos de forma predeterminada.",
  Interface: "Interfaz",
  Motion: "Animaciones",
  "Panel animations": "Animaciones de paneles",
  "Set how fast panels open and close.": "Define la velocidad de apertura y cierre de los paneles.",
  "Diff layout": "Disposición de los diffs",
  "Show diffs stacked or side by side. The toggle in the diff toolbar changes this too.":
    "Muestra los diffs apilados o en paralelo. El botón de la barra de diffs también lo cambia.",
  "Hide whitespace changes": "Ocultar cambios de espacios en blanco",
  "Set whether the diff panel ignores whitespace-only edits by default.":
    "Define si el panel de diffs ignora por defecto los cambios que solo afectan a espacios en blanco.",
  Accessibility: "Accesibilidad",

  // Settings: projects
  "Project defaults and overrides": "Valores predeterminados y ajustes por proyecto",
  "Project defaults": "Valores predeterminados del proyecto",
  "Choose the default model and workspace for all projects or a specific project.":
    "Elige el modelo y el espacio de trabajo predeterminados para todos los proyectos o para uno concreto.",
  Workspace: "Espacio de trabajo",
  Project: "Proyecto",
  "Projects & threads": "Proyectos e hilos",
  "Display name": "Nombre visible",
  "The shared name for this project group in the sidebar and thread lists.":
    "El nombre compartido de este grupo de proyectos en la barra lateral y las listas de hilos.",
  "Select a project to change its name.": "Selecciona un proyecto para cambiar su nombre.",
  "Project icon": "Icono del proyecto",
  "Select a project to change its icon.": "Selecciona un proyecto para cambiar su icono.",
  Checkout: "Checkout",
  "Select a project to choose one of its checkouts.":
    "Selecciona un proyecto para elegir uno de sus checkouts.",
  "Remove checkout": "Quitar checkout",
  "Removes this checkout and its threads from the project group. Files on disk are not touched.":
    "Quita este checkout y sus hilos del grupo de proyectos. Los archivos en disco no se tocan.",
  "Select a project to remove one of its checkouts.":
    "Selecciona un proyecto para quitar uno de sus checkouts.",
  "Remove project": "Quitar proyecto",
  "Select a project to remove its entries and threads. Files on disk are not touched.":
    "Selecciona un proyecto para quitar sus entradas e hilos. Los archivos en disco no se tocan.",
  "How this checkout joins project groups in the sidebar. Changing it can move you to a different project group.":
    "Cómo se une este checkout a los grupos de proyectos en la barra lateral. Cambiarlo puede moverte a otro grupo.",
  "Default grouping across all machines in this client. Individual checkout overrides are preserved.":
    "Agrupación predeterminada en todas las máquinas de este cliente. Se conservan los ajustes individuales por checkout.",
  "Default actions": "Acciones predeterminadas",
  Actions: "Acciones",
  "Actions and grouping belong to this checkout.":
    "Las acciones y la agrupación pertenecen a este checkout.",
  "Available in every inheriting checkout. Commands run in that checkout or its worktree.":
    "Disponible en todos los checkouts que heredan. Los comandos se ejecutan en ese checkout o su worktree.",
  "Different actions across machines": "Acciones distintas entre máquinas",
  "Select a machine to edit its actions. Adding an action applies to all selected connected machines.":
    "Selecciona una máquina para editar sus acciones. Añadir una acción se aplica a todas las máquinas conectadas seleccionadas.",
  "Import scripts": "Importar scripts",
  "Select a project to import actions from its checkout's t3.json.":
    "Selecciona un proyecto para importar acciones desde el t3.json de su checkout.",
  "t3.json is invalid": "t3.json no es válido",
  "A t3.json exists in this checkout but fails to parse, so every action and icon it declares is ignored. Check the JSON syntax and icon values.":
    "Existe un t3.json en este checkout pero no se puede analizar, así que se ignoran todas las acciones e iconos que declara. Revisa la sintaxis JSON y los valores de los iconos.",
  "Add project starts in": "Añadir proyecto empieza en",
  "Agent browser access": "Acceso de los agentes al navegador",
  "Allow agents to use the shared browser. Projects can override it.":
    "Permite a los agentes usar el navegador compartido. Los proyectos pueden cambiarlo.",
  "Choose whether agents can use the preview browser for all projects or a specific project.":
    "Elige si los agentes pueden usar el navegador de vista previa para todos los proyectos o para uno concreto.",
  "Default merge method": "Método de fusión predeterminado",
  "Pull requests in this project start with this method. It overrides the last method selected.":
    "Las pull requests de este proyecto empiezan con este método. Sustituye al último método seleccionado.",

  // Settings: browser
  Browser: "Navegador",
  "Browser profiles": "Perfiles del navegador",
  "Profiles separate cookies and logins. Incognito data is cleared when the app closes.":
    "Los perfiles separan cookies e inicios de sesión. Los datos de incógnito se borran al cerrar la app.",
  "Default browser profile": "Perfil de navegador predeterminado",
  "New profile": "Nuevo perfil",
  "Default browser appearance": "Apariencia predeterminada del navegador",
  "The color scheme pages are told to prefer. System follows your OS setting.":
    "El esquema de color que se indica a las páginas. Sistema sigue el ajuste del sistema operativo.",
  "Default browser viewport": "Ventana predeterminada del navegador",
  "Tab size for you and agents. Fill fits the panel; other sizes show the device toolbar.":
    "Tamaño de pestaña para ti y los agentes. Rellenar se ajusta al panel; los demás tamaños muestran la barra de dispositivo.",
  "Default browser zoom": "Zoom predeterminado del navegador",
  "Page zoom applied to new browser tabs.": "Zoom aplicado a las pestañas nuevas del navegador.",
  "Browser recording frame rate": "Fotogramas por segundo de grabación",
  "Maximum recording rate. 30 fps saves CPU and storage; 60 fps is smoother.":
    "Tasa máxima de grabación. 30 fps ahorra CPU y espacio; 60 fps es más fluido.",
  "Screen Recording": "Grabación de pantalla",

  // Settings: SnapShots
  "Capture shortcut": "Atajo de captura",
  "Capture the window you're using.": "Captura la ventana que estás usando.",
  "Capture animations": "Animaciones de captura",
  "Animate captured windows into your draft.": "Anima las ventanas capturadas hacia tu borrador.",
  "Capture flash": "Destello de captura",
  "Show a gentle cue on the captured window.": "Muestra una señal suave en la ventana capturada.",
  "Capture sound": "Sonido de captura",
  "Choose the sound played when capture starts.":
    "Elige el sonido que suena al empezar la captura.",
  "Include app text": "Incluir texto de la app",
  "Include text and controls when the app makes them available.":
    "Incluye el texto y los controles cuando la app los ofrece.",

  // Settings: providers, integrations, source control
  "API keys, base URLs, and other per-instance CLI settings.":
    "Claves de API, URL base y otros ajustes de CLI por instancia.",
  Driver: "Driver",
  Name: "Nombre",
  Runtime: "Runtime",
  Setup: "Configuración",
  Variables: "Variables",
  "Usage providers": "Proveedores de uso",
  "No usage providers configured.": "No hay proveedores de uso configurados.",
  "Source Control Providers": "Proveedores de control de versiones",
  "Source control": "Control de versiones",
  "Version Control": "Control de versiones",
  "Source control writer model": "Modelo de redacción para control de versiones",
  "Model for source control text and branch or bookmark names. Off uses the global default.":
    "Modelo para los textos de control de versiones y los nombres de rama o marcador. Desactivado usa el predeterminado global.",
  "Source control writing style": "Estilo de redacción para control de versiones",
  "Device unavailable": "Dispositivo no disponible",
  "Reconnect this device to set up its provider, or select another device.":
    "Vuelve a conectar este dispositivo para configurar su proveedor, o selecciona otro dispositivo.",

  // Settings: archive & diagnostics
  "Archived threads": "Hilos archivados",
  "Trace Diagnostics": "Diagnóstico de trazas",
  "Instrumented application I/O": "E/S instrumentada de la aplicación",
  "Resource monitor": "Monitor de recursos",
  "Resource History": "Historial de recursos",
  "Resource timeline": "Línea temporal de recursos",
  "Live Processes": "Procesos en vivo",
  "Live process tree": "Árbol de procesos en vivo",
  "Latest Failures": "Últimos fallos",
  "Most Common Failures": "Fallos más frecuentes",
  "Slowest Spans": "Spans más lentos",
  "Top Span Names": "Nombres de span más frecuentes",
  "Span Logs": "Registros de span",
  "Host & collection": "Host y recopilación",

  // Keybindings
  "New keybinding": "Nuevo atajo",

  // Sidebar
  "New thread": "Nuevo hilo",
  "New project": "Nuevo proyecto",
  "Add project": "Añadir proyecto",
  "Search threads": "Buscar hilos",
  "Clear thread search": "Borrar búsqueda de hilos",
  "Thread search results": "Resultados de búsqueda de hilos",
  "Filter threads by project": "Filtrar hilos por proyecto",
  "Search projects": "Buscar proyectos",
  "Search projects...": "Buscar proyectos...",
  "No matching projects.": "No hay proyectos que coincidan.",
  "No projects yet": "Aún no hay proyectos",
  Pinned: "Anclados",
  Active: "Activos",
  Settled: "Asentados",
  "Thread title": "Título del hilo",
  "Unsent draft": "Borrador sin enviar",
  "Discard draft": "Descartar borrador",
  "Snooze thread": "Posponer hilo",
  "Wake thread now": "Despertar hilo ahora",
  Woke: "Despertado",
  "Dismiss Woke notification": "Descartar aviso de despertar",
  "Unpin thread": "Desanclar hilo",
  "Settle thread": "Asentar hilo",
  "Un-settle thread": "Reactivar hilo",

  // Command palette
  "Search commands, projects, and threads...": "Buscar comandos, proyectos e hilos...",
  "Enter project path (e.g. ~/projects/my-app)":
    "Escribe la ruta del proyecto (p. ej. ~/proyectos/mi-app)",
  "Enter path (e.g. ~/projects/my-app)": "Escribe la ruta (p. ej. ~/proyectos/mi-app)",
  Threads: "Hilos",
  "Recent Threads": "Hilos recientes",
  Environments: "Entornos",
  Remote: "Remoto",
  "New thread in...": "Nuevo hilo en...",
  "Go to file": "Ir a archivo",
  "Search project contents": "Buscar en el contenido del proyecto",
  "Open WSL folder": "Abrir carpeta WSL",
  "Toggle theme editor": "Mostrar u ocultar el editor de temas",
  "Open settings": "Abrir ajustes",
  "Project settings": "Ajustes del proyecto",
  "Local folder": "Carpeta local",
  "Browse a folder on disk": "Explorar una carpeta del disco",
  "Environment unavailable": "Entorno no disponible",
  "No environment is available.": "No hay ningún entorno disponible.",
  "Unable to browse projects": "No se pueden explorar los proyectos",
  "Unable to run command": "No se puede ejecutar el comando",
  "Failed to add project": "No se pudo añadir el proyecto",
  "Failed to open project": "No se pudo abrir el proyecto",
  "Windows-style paths are only supported on Windows.":
    "Las rutas al estilo de Windows solo se admiten en Windows.",
  "Relative paths require an active project.": "Las rutas relativas requieren un proyecto activo.",
  "Repository lookup failed": "No se pudo consultar el repositorio",
  "Clone failed": "Falló la clonación",
  "Could not add WSL project": "No se pudo añadir el proyecto WSL",
  "Start the matching WSL backend, then choose the folder again.":
    "Inicia el backend WSL correspondiente y vuelve a elegir la carpeta.",

  // Composer and draft hero
  "Ask anything, @tag files/folders, $use skills, or / for commands":
    "Pregunta lo que quieras, @menciona archivos o carpetas, $usa skills o / para comandos",
  "Ask for changes, send follow-ups, or attach images":
    "Pide cambios, envía seguimientos o adjunta imágenes",
  "Add feedback to refine the plan, or leave this blank to implement it":
    "Añade comentarios para afinar el plan, o déjalo en blanco para implementarlo",
  "Choose a project above to start a thread": "Elige un proyecto arriba para empezar un hilo",
  "Enable a provider in Settings to send a message":
    "Activa un proveedor en Ajustes para enviar un mensaje",
  "Attach files": "Adjuntar archivos",
  "Expand composer": "Expandir compositor",
  "Runtime mode": "Modo de ejecución",
  "Write custom answer": "Escribir respuesta personalizada",
  "Draft attachment may not persist": "El adjunto del borrador puede no conservarse",
  "What should we build in {project}?": "¿Qué construimos en {project}?",
  "{project} to start": "{project} para empezar",
  "Add a project to start": "Añade un proyecto para empezar",
  "Add a project": "Añade un proyecto",
  "Choose a project": "Elige un proyecto",
  "Change project": "Cambiar proyecto",

  // Right panel surfaces
  "Open a surface": "Abrir un panel",
  "Choose what to show in the right panel.": "Elige qué mostrar en el panel derecho.",
  Terminal: "Terminal",
  Files: "Archivos",
  Diff: "Diff",
  "Pull request": "Pull request",
  Agents: "Agentes",
  "Open a local app or URL.": "Abre una app local o una URL.",
  "Start a shell in this workspace.": "Abre una terminal en este espacio de trabajo.",
  "Browse and read workspace files.": "Explora y lee los archivos del espacio de trabajo.",
  "Review changes in this thread.": "Revisa los cambios de este hilo.",
  "Open this branch's pull request.": "Abre la pull request de esta rama.",
  "Follow subagents and workflows.": "Sigue subagentes y workflows.",
  "Only available in the desktop app.": "Solo disponible en la app de escritorio.",
  "Available when a project is open.": "Disponible cuando hay un proyecto abierto.",
  "Available for Git repositories.": "Disponible para repositorios Git.",
  "No pull request on this branch yet.": "Esta rama aún no tiene pull request.",
  "Available from a thread.": "Disponible desde un hilo.",
  "Browser previews are only available in the T3 Code desktop app.":
    "Las vistas previas del navegador solo están disponibles en la app de escritorio de T3 Code.",
  "Terminal surfaces are only available from a project thread.":
    "Las terminales solo están disponibles desde un hilo de proyecto.",
  "Files are only available when a project is open.":
    "Los archivos solo están disponibles cuando hay un proyecto abierto.",
  "Diff is only available for server threads in Git repositories.":
    "El diff solo está disponible para hilos de servidor en repositorios Git.",
  "This thread's branch has no pull request yet.":
    "La rama de este hilo aún no tiene pull request.",
  "Agents are only available from a thread.": "Los agentes solo están disponibles desde un hilo.",
  "Add panel surface": "Añadir panel",
  "Open browser in a profile": "Abrir navegador con un perfil",
  "Scroll panel tabs": "Desplazar pestañas del panel",
  "Scroll tabs left": "Desplazar pestañas a la izquierda",
  "Scroll tabs right": "Desplazar pestañas a la derecha",
  "Mute tab": "Silenciar pestaña",
  "Unmute tab": "Activar sonido de la pestaña",
  "Close all": "Cerrar todas",
  "Close others": "Cerrar las demás",
  "Close to the right": "Cerrar las de la derecha",

  // Thread status pills
  "All projects": "Todos los proyectos",
  Working: "Trabajando",
  Monitoring: "Vigilando",
  Approval: "Aprobación",
  Input: "Respuesta",
  Failed: "Fallido",
  Done: "Hecho",
  Snoozed: "Pospuestos",
  "Awaiting Input": "Esperando respuesta",
  Connecting: "Conectando",
  "Plan Ready": "Plan listo",
  Completed: "Completado",
  "Pending Approval": "Pendiente de aprobación",
  "Started in background": "Iniciado en segundo plano",
  Open: "Abrir",

  // Thread toolbar: actions, git, workspace
  "Add action": "Añadir acción",
  "Project actions": "Acciones del proyecto",
  "Project scripts": "Scripts del proyecto",
  "Script actions": "Acciones del script",
  Import: "Importar",
  "Git actions": "Acciones de Git",
  "Git action options": "Opciones de acciones de Git",
  Commit: "Commit",
  "Commit & push": "Commit y push",
  Push: "Push",
  Pull: "Pull",
  "Sync ref": "Sincronizar ref",
  "Publish repository": "Publicar repositorio",
  "Publish failed": "La publicación falló",
  Branch: "Rama",
  Excluded: "Excluidos",
  Private: "Privado",
  Public: "Público",
  "Only invited people": "Solo personas invitadas",
  "Anyone on the web": "Cualquiera en la web",
  "Leave empty to auto-generate": "Déjalo vacío para generarlo automáticamente",
  "Waiting for Git...": "Esperando a Git...",
  "Committing...": "Haciendo commit...",
  "Generating commit message...": "Generando mensaje de commit...",
  "Pushing...": "Haciendo push...",
  "Pulling...": "Haciendo pull...",
  "Preparing feature ref...": "Preparando ref de la funcionalidad...",
  "Git action in progress.": "Acción de Git en curso.",
  "Git status is unavailable.": "El estado de Git no está disponible.",
  "No local commits to push.": "No hay commits locales que subir.",
  "Branch is up to date. No action needed.": "La rama está al día. No hace falta hacer nada.",
  "Branch has diverged from upstream. Rebase/merge first.":
    "La rama ha divergido de upstream. Haz rebase o merge primero.",
  "Commit is currently unavailable.": "Commit no está disponible ahora mismo.",
  "Commit or stash local changes before pushing.":
    "Haz commit o stash de los cambios locales antes de hacer push.",
  "This action is currently unavailable.": "Esta acción no está disponible ahora mismo.",
  "Commit & push to default ref?": "¿Commit y push a la ref predeterminada?",
  "Push to default ref?": "¿Push a la ref predeterminada?",
  "Run action on default refName?": "¿Ejecutar la acción en la ref predeterminada?",
  "Action failed": "La acción falló",
  "Pull failed": "El pull falló",
  "Git initialization failed": "Falló la inicialización de Git",
  "No open pull request found.": "No se encontró ninguna pull request abierta.",
  "Unable to open pull request link": "No se pudo abrir el enlace de la pull request",
  "Unable to open file": "No se pudo abrir el archivo",
  "Editor opening is unavailable.": "No se puede abrir el editor.",
  "Provider status unavailable. Open Settings -> Source Control and rescan.":
    "Estado del proveedor no disponible. Abre Ajustes -> Control de versiones y vuelve a escanear.",
  "Open Settings -> Source Control to configure this provider.":
    "Abre Ajustes -> Control de versiones para configurar este proveedor.",
  "Run on": "Ejecutar en",
  "This device": "Este dispositivo",
  "Local checkout": "Checkout local",
  "Current checkout": "Checkout actual",
  "Current worktree": "Worktree actual",
  "New worktree": "Nuevo worktree",
  "Previous worktree": "Worktree anterior",
  "Select ref": "Seleccionar ref",

  // Composer modes
  Supervised: "Supervisado",
  "Ask before commands and file changes.":
    "Pregunta antes de ejecutar comandos y cambiar archivos.",
  "Auto-accept edits": "Aceptar ediciones automáticamente",
  "Auto-approve edits, ask before other actions.":
    "Aprueba las ediciones automáticamente y pregunta antes de otras acciones.",
  Auto: "Auto",
  "Supported providers approve routine actions; others still ask.":
    "Los proveedores compatibles aprueban las acciones rutinarias; los demás siguen preguntando.",
  "Full access": "Acceso total",
  "Allow commands and edits without prompts.": "Permite comandos y ediciones sin preguntar.",
  Plan: "Plan",
  Build: "Build",
  "Plan mode — click to return to normal build mode":
    "Modo plan: haz clic para volver al modo build normal",
  "Default mode — click to enter plan mode": "Modo normal: haz clic para entrar en modo plan",
  "Ask anything...": "Pregunta lo que quieras...",
  "Enable a provider in Settings": "Activa un proveedor en Ajustes",
  "Choose an option above": "Elige una opción arriba",
  "Type your own answer, or leave this blank to use the selected option":
    "Escribe tu propia respuesta, o déjalo en blanco para usar la opción seleccionada",
  "More composer controls": "Más controles del compositor",
};
