import classes from './header.module.sass'

function Header(props){
return <div className={classes.header}>
            <h1>{props.name}</h1>
            <div className={classes.buttonWraper}>
                {props.buttonFirst}
                {props.buttonSecond}
            </div>
        </div> 
}

export default Header;