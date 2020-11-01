const d = document, w = window, n = navigator, ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
        isMobile = {
          android: () => ua.match(/android/i),
          ios: () => ua.match(/iphone|ipad|ipod/i),
          windows: () => ua.match(/windows/i),
          any: function () {
            return this.android() || this.ios() || this.windows();
          }
        },
        isDesktop = {
          linux: () => ua.match(/linux/i),
          ios: () => ua.match(/mac os/),
          windows: () => ua.match(/windows nt/i),
          any: function (){
            return this.linux() || this.ios() || this.windows();
          }
        },
        isBrowser = {
          chrome: () => ua.match(/chrome/i),
          safari: () => ua.match(/safari/i),
          firefox: () => ua.match(/firefox/i),
          opera: () => ua.match(/opera|opera mini/i),
          ie: () => ua.match(/msie|iemobile/i),
          edge: () => ua.match(/edge/i),
          any: function () {
            return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();
          }
        }

        /* console.log(ua);
        console.log(isDesktop.windows()); */
        $id.innerHTML = `
        <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${
          isMobile.any()?isMobile.any():isDesktop.any()
        } </b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li> 
        `;
}