import Option from '../../components/Option/Option';
import Home from '../../../src/assets/Home.png';
import Resturent from '../../../src/assets/Resturent.png';
import { useNavigate } from "react-router-dom";
import styles from './OptionView.module.css';

const OptionView = () => {
    const navigate = useNavigate();

    const handelResturentOrderClick = () => {
        navigate("/resturent");
    }
    const handelHpmePrepareClick = () => {

    } 
    return(
        <div className={styles.container}>
            <Option onClick={handelResturentOrderClick} icon={Resturent} name={"Order Your Food"}/> 
            <Option onClick={handelHpmePrepareClick} icon={Home} name={"Prepare At Home"}/>
        </div>
    )
}
export default OptionView;