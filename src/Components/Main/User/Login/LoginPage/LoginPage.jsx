import "./loginPage.css";
import {useSelector} from "react-redux";
import Loader from "../../../../Reusable/Loader/Loader";

export default function LoginPage({passwordEnter, textEnter, text, password, handle}) {
  const status = useSelector(state => state.user.status)

  return (
    <div className={'loginForm'}>
      {!status ? (
        <>
          <h1 className={'loginForm__text'}>Login</h1>
          <form onSubmit={handle} className={'loginForm__form'}>
            <input type="text" value={text} placeholder='Name...' required
                   onChange={textEnter}/>
            <input type="password" value={password} placeholder='Password...' required
                   onChange={passwordEnter}/>
            <button className={'loginForm__button'}>Login</button>
          </form>
          <div className={'hint__bar'}>
            <div className={'hint'}>
              <p className={'hint__text'}>Name: admin; password: admin</p>
            </div>
            <div className={'hint'}>
              <p className={'hint__text'}>Name: helper; password: helper</p>
            </div>
            <div className={'hint'}>
              <p className={'hint__text'}>Name: writer; password: writer</p>
            </div>
          </div>
        </>) : <Loader/>}

    </div>
  )
}