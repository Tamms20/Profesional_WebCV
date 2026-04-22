# Instrucciones para abrir, probar y subir la pagina a GitHub

Esta carpeta contiene el portafolio academico listo para abrirse en otro PC Windows y publicarse con GitHub Pages.

## 1. Abrir la carpeta en otro PC Windows

1. Descomprime el ZIP.
2. Entra a la carpeta `Academic`.
3. Abre PowerShell dentro de esa carpeta.
4. Ejecuta:

```powershell
python run_website.py
```

5. Se abrira la pagina local en:

```text
http://localhost:5500
```

Si Windows no reconoce `python`, instala Python desde:

```text
https://www.python.org/downloads/
```

Durante la instalacion marca la opcion `Add python.exe to PATH`.

## 2. Crear el repositorio en GitHub

1. Entra a:

```text
https://github.com/
```

2. Crea un repositorio nuevo.
3. Nombre sugerido:

```text
academic-portfolio
```

4. No agregues README, `.gitignore` ni licencia desde GitHub, porque esta carpeta ya esta preparada.

## 3. Subir la carpeta a GitHub desde PowerShell

Abre PowerShell dentro de la carpeta `Academic` y ejecuta estos comandos.

Cambia `TU-USUARIO` por tu usuario real de GitHub:

```powershell
git init
git add .
git commit -m "Initial academic portfolio website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/academic-portfolio.git
git push -u origin main
```

Si Windows no reconoce `git`, instala Git desde:

```text
https://git-scm.com/download/win
```

Despues cierra y vuelve a abrir PowerShell.

## 4. Activar GitHub Pages

1. Entra al repositorio en GitHub.
2. Ve a `Settings`.
3. En el menu lateral, entra a `Pages`.
4. En `Build and deployment`, selecciona:

```text
Source: Deploy from a branch
Branch: main
Folder: /website
```

5. Guarda los cambios.

Despues de unos minutos, GitHub mostrara un enlace como:

```text
https://TU-USUARIO.github.io/academic-portfolio/
```

Ese es el link publico para compartir la pagina.

## 5. Archivos importantes

- `website/index.html`: pagina principal.
- `website/style.css`: estilos visuales.
- `website/script.js`: filtros, animaciones y lightbox.
- `website/images/`: fotos usadas por la pagina.
- `website/Tamia_Paillacho_CV.pdf`: CV descargable.
- `run_website.py`: servidor local para probar la pagina en Windows.

