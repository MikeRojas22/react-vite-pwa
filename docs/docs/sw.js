if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let o = {};
    const d = (e) => i(e, t),
      l = { module: { uri: t }, exports: o, require: d };
    s[t] = Promise.all(n.map((e) => l[e] || d(e))).then((e) => (r(...e), o));
  };
}
define(["./workbox-3ea082d2"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/index.348c2aeb.css", revision: null },
        { url: "assets/index.db3434d1.js", revision: null },
        { url: "assets/react.35ef61ed.svg", revision: null },
        { url: "assets/workbox-window.prod.es5.d2780aeb.js", revision: null },
        { url: "index.html", revision: "87711fb3db79bdfac290e8b1383f6f35" },
        {
          url: "manifest.webmanifest",
          revision: "56df2db1ea69d84a203ac480a0dfa24b",
        },
        { url: "vite.svg", revision: "8e3a10e157f75ada21ab742c022d5430" },
        {
          url: "manifest.webmanifest",
          revision: "56df2db1ea69d84a203ac480a0dfa24b",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
