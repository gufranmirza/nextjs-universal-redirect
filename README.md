# Next.js universal redirect

Higher order component to handle both client and server side redirecting with [Next.js](https://github.com/zeit/next.js)

Note: this package is made for Next.js 7.0.0

## API
### Router

```
Router: (target, res, next) => boolean
// target: Url to be redirected
// req: Request object if availabe
// next: Next Url i.e. ?next=next

// Returns current environment Server || Browser
 ```

## Server Side Ussage

```
import React from 'react';
import Redirect from 'nextjs-universal-redirect';

export default class MyPage extends React.Component {
  static async getInitialProps({ req, res }) {
    if (!req.user) {
      Redirect('/login', res, 'url-to-be-continued-after-login')
    }
  }

  render() {
    return (
      <div>
       Authenticate
      </div>
    )
  }
}
```

## Client Side Usage

```
import React from 'react';
import Redirect from 'nextjs-universal-redirect';

class ScrollingList extends React.Component {
  
  componentDidMount() {
    if (!this.props.user) {
      Redirect('/login', undefined, 'url-to-be-continued-after-login')
    }
  }

  render() {
    return (
      <div >
       Authenticate
      </div>
    );
  }
}
```
