import { NavLink } from "react-router-dom";
import "../../App.css";

export const Sidebar = () => {

    const getStyles=({ isActive })=>{
        return  isActive ?  'flex align-center gap-1 bg-lime-600 px-2 py-1 rounded-tr-full rounded-br-full' :'flex align-center gap-1 hover:bg-lime-600 px-2 py-1 rounded-tr-full rounded-br-full ';
     }

	return (
		<aside className="flex flex-col gap-5  h-screen  px-3">
			<NavLink className={getStyles}  id="Home" to="/" >
				<span className="material-icons">home</span>
				<span>Home</span>
			</NavLink>
			<NavLink to="/archive" className={getStyles}>
				<span className="material-icons-outlined">archive</span>
				<span>Archive</span>
			</NavLink>
			<NavLink to="/important" className={getStyles}>
				<span className="material-icons">label_important</span>
				<span>Important</span>
			</NavLink>
			<NavLink to="/bin" className={getStyles}>
				<span className="material-icons-outlined">delete</span>
				<span>Bin</span>
			</NavLink>
		</aside>
	);
};
