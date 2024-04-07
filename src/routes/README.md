Import and use the **properties** (naka all-caps) in MainPages and LoginPages from paths.jsx for routing/redirecting/linking elements in a webpage.

*Example:*
```
import { Link } from 'react-router-dom';
import { MainPages } from '../routes/paths';
//...
<Link to={MainPages.HOME}></Link>
```