module.exports = (targetOptions, indexHtml) => {
  const stripedScriptHtml = indexHtml.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "");
  const i = stripedScriptHtml.indexOf('</head>');
  const keyCloakScript = `<script src="http://localhost:8080/auth/js/keycloak.js"></script>

  <script>
    const scripts = ['main', 'runtime', 'polyfills', 'vendor', 'styles'];
    const fileExtension = '.js'
    const attribute = 'src';
    const publicUrlsPathname = ['/home']
    const keycloak = new Keycloak({
      url: 'http://localhost:8080/auth',
      realm: 'angular-tut',
      clientId: 'angular-tut',
    });

    function injectScripts() {
      scripts.forEach(script => {
          const newScriptElem = document.createElement('script');
          const fileName = script + fileExtension
          newScriptElem.setAttribute(attribute, fileName);
            document.head.appendChild(newScriptElem);
      })
    }

    keycloak.init({
          onLoad: 'login-required',
      })

    if(publicUrlsPathname.includes(location.pathname)) {
        injectScripts()
    } else {
      keycloak.onAuthSuccess = injectScripts;
    }
  </script>`;

  return `${stripedScriptHtml.slice(0, i)}
          ${keyCloakScript}
          ${stripedScriptHtml.slice(i)}`;
};

