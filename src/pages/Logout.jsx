import {
  AuthBoxContainer,
  AuthButton,
  LoaderAnimation,
  PageContainer,
} from 'components/shared'
import { getLogoutURL } from 'config/sso'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from 'store/authSlice'

const Logout = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)
  const handleLogout = async () => {
    dispatch(logoutAction())
    window.location.href = getLogoutURL()
  }

  return (
    <PageContainer>
      <Helmet>
        <title>Logout - ResoBin</title>
        <meta name="description" content="Login to continue" />
      </Helmet>

      {loading && <LoaderAnimation fixed />}

      <AuthBoxContainer>
        <h4>Are you sure?</h4>

        <AuthButton danger type="primary" onClick={handleLogout}>
          Logout
        </AuthButton>
      </AuthBoxContainer>
    </PageContainer>
  )
}

export default Logout
