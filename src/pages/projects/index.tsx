import { Link, NavLink } from "react-router-dom";
import { PageLayout } from "../../components/layouts/page";

export default function Projects() {
    return (
        <div>
            <Link to='/projects/game-of-life'>
                Game of life
                <img className="max-w-lg" src='/images/game-of-life-screen.png'></img>
            </Link>
        </div>
    )
}
