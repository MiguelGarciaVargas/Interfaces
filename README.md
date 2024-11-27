# Informe de Revisión de Diseño - Figma

Este documento resume los detalles importantes que deben ser corregidos o aclarados en el diseño de Figma recibido para el proyecto. A continuación, se describen algunos problemas encontrados que necesitan atención y mejora:

## 1. Estilos Definidos Solo para Desktop
En el diseño recibido, solo se definieron los estilos para un tamaño de pantalla: desktop. Esto generó trabajo extra ya que no había detalles o adaptaciones para otras resoluciones o tamaños de pantalla. Esta falta de definición causó inconvenientes al intentar adaptar el diseño a pantallas con dimensiones no cubiertas por estos tres estilos.
 

## 2. Falta de Transiciones en Componentes
Se observó que los componentes como botones y tarjetas (cards) no incluyen transiciones visuales adecuadas, lo cual es crucial para mejorar la experiencia del usuario. Las transiciones ayudan a proporcionar un feedback visual sobre las interacciones, como al pasar el mouse o hacer clic en estos componentes.

**Recomendación**: Agregar transiciones  para los botones, las tarjetas (cards) y otros elementos para mejorar la interactividad del usuario.

## 2. Falta de Transiciones entre Páginas
El diseño no incluye transiciones entre las páginas, ni indicaciones sobre cómo debería ser la navegación de una página a otra. 

**Recomendación**: Definir y documentar las transiciones entre páginas. También es especificar qué acciones o interacciones causan el cambio de página, así como el diseño esperado de esas transiciones.

## 3. Falta de Documentación del Uso de los Botones
La documentación sobre el comportamiento y la finalidad de algunos botones no está clara, lo que genera confusión sobre su uso y resultado. A continuación, se destacan algunos ejemplos:

### a. Search Bar
No está especificado qué tipo de información debería buscar la barra de búsqueda, ni cómo se espera que se presenten los resultados. Sin esta información, no podemos definir su comportamiento correctamente.

**Recomendación**: Incluir detalles sobre qué tipo de búsqueda se espera (por ejemplo, búsqueda de usuarios, tareas, etc.) y cómo deberían mostrarse los resultados.

### b. Botones de Agregar y Editar en la Página de Tareas
Los botones de agregar y editar en la página de tareas no están acompañados de información suficiente sobre cómo deben comportarse. No hay indicaciones de cómo se verían las páginas o modales correspondientes, ni cómo debería funcionar la transición cuando un usuario haga clic en estos botones.

**Recomendación**: Especificar cómo deberían lucir los modales de agregar y editar, qué datos deberían incluir y cómo debe ser la transición de la interfaz al hacer clic en estos botones. 

## 4. Estilos de Letra y Color No Estandarizados
Se observó que los estilos de letra y colores en el diseño no están estandarizados para diferentes tamaños de ventana. 

**Recomendación**: Establecer un conjunto de estilos de letra y colores para diferentes tamaños de ventana y dispositivos. 

