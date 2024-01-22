const v0 = {
  version: "v1.0.0",
  notes: "Test version",
  pub_date: "2020-06-22T19:25:57Z",
  platforms: {
    "darwin-x86_64": {
      signature: "Content of app.tar.gz.sig",
      url: "https://github.com/username/reponame/releases/download/v1.0.0/app-x86_64.app.tar.gz",
    },
    "darwin-aarch64": {
      signature: "Content of app.tar.gz.sig",
      url: "https://github.com/username/reponame/releases/download/v1.0.0/app-aarch64.app.tar.gz",
    },
    "linux-x86_64": {
      signature: "Content of app.AppImage.tar.gz.sig",
      url: "https://github.com/username/reponame/releases/download/v1.0.0/app-amd64.AppImage.tar.gz",
    },
    "windows-x86_64": {
      signature:
        "Content of app-setup.nsis.sig or app.msi.sig, depending on the chosen format",
      url: "https://github.com/username/reponame/releases/download/v1.0.0/app-x64-setup.nsis.zip",
    },
  },
};

const server = Bun.serve({
  fetch(request, server) {
    return new Response(JSON.stringify(v0));
  },
});

console.log(
  `Texitor Releases API running on http://${server.hostname}:${server.port}`
);
