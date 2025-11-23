function LoginButton (props:any) {
    return(
        <div>
            <button onClick={props.login}>
                Login
            </button>
        </div>
    );
}

export default LoginButton;