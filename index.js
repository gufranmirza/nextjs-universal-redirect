const Router = require('next-routes')();

const getUrl = (target, next) => {
  if (next) {
    return `${target}?next=${next}`;
  }

  return `${target}`;
};

// pass target, res, next i.e. next route to be passed as params
const redirect = (target, res, next) => {
  let isBrowser = false;
  if (res) {
    // Check if Headers are not sent already
    if (!res.headersSent) {
      // Server
      // 303: "See other"
      res.writeHead(303, { Location: getUrl(target, next) });
      res.end();
      isBrowser = false;
    }
  }
  if (typeof window !== 'undefined') {
    // Browser
    // In the browser, we just pretend like this never even happened ;)
    isBrowser = true;
    Router.pushRoute(getUrl(target, next));
  }

  return isBrowser;
};

export default redirect;
