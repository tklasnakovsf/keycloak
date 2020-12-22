module.exports = (targetOptions, indexHtml) => {
  const stripedScriptHtml = indexHtml.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "");
  const i = stripedScriptHtml.indexOf('</head>');
  const keyCloakScript = `<script src="http://localhost:8080/auth/js/keycloak.js"></script>

  <script>
    let tokenExpire, keyclLogin, keyclLogout, keycloakInst;
    (function () {
      const scripts = ['main', 'runtime', 'polyfills', 'vendor', 'styles'];
      const fileExtension = '.js'
      const attribute = 'src';
      const publicUrlsPathname = ['/home'];
      const mainPageUrl = '/';
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

      function redirectToMain() {
        location.href = mainPageUrl;
      }

      if(publicUrlsPathname.includes(location.pathname)) {
          keycloak.init({})
          injectScripts()
      } else {
        keycloak.init({
          onLoad: 'login-required',
        })
        keycloak.onAuthSuccess = injectScripts;
        keycloak.onAuthLogout = redirectToMain;
      }
      keyclLogin = keycloak.login;
      keyclLogout = keycloak.logout;
      tokenExpire = keycloak.isTokenExpired;
      keycloakInst = keycloak;
    })()
  </script>`;

  return `${stripedScriptHtml.slice(0, i)}
          ${keyCloakScript}
          ${stripedScriptHtml.slice(i)}`;
};

