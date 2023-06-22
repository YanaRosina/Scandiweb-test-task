import classes from './Layout.module.sass';

function Layout(props) {
    return <div className={classes.layout}> 
        <main>
            {props.children}
        </main>
        <footer>Scandiweb Test assignment</footer>  
    </div>
}

export default Layout;