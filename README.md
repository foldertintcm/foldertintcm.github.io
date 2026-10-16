# FolderTintCM — sitio web

El sitio de FolderTintCM, publicado con GitHub Pages en
<https://foldertintcm.github.io/>, y las descargas del instalador
en [Releases](https://github.com/foldertintcm/foldertintcm.github.io/releases).

- `index.html` — la página, en español; `assets/site.js` la pasa a inglés.
- `privacy.html` — la política de privacidad.
- `assets/img/es`, `assets/img/en` — fotografías del selector de color real,
  en cada idioma y tema (compilación de depuración con `FT_LANG`, `FT_THEME`,
  `FT_SCALE=2` y `FT_RECENT`; ver `DEVELOPMENT.md` de la app).
- `assets/icon-*.png`, `assets/folders/*.png` — el icono y las carpetas,
  exportados por la propia app (`foldertintcm.exe --export-brand assets`), del
  mismo dibujo que instala.
- El menú del Explorador de la sección *Colorear* está hecho en HTML con esos
  iconos, para no publicar las carpetas de nadie.

Mismo diseño y patrones que el sitio de ScreenShotCM: HTML, CSS y JavaScript
sin dependencias ni paso de compilación. Las tipografías (Instrument Serif e
Inter, SIL Open Font License) se cargan desde Google Fonts.

La descarga permanente de la última versión es
<https://github.com/foldertintcm/foldertintcm.github.io/releases/latest/download/FolderTintCM.msi>.
