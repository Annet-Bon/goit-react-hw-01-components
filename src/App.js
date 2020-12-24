// js
import Profile from './components/First/first-index';
// json
import user from './components/First/user.json';
//css
import './components/First/first-index.css';

export default function App() {
    return (
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
    );
}