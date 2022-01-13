import NavFooter from '../components/NavFooter'
import Error from '../components/Error404'
import CustomHead from '../components/CustomHead'

export default function error() {
  return (
    <>
      <CustomHead>
        <title>Cebuliony | 404</title>
      </CustomHead>
      <Error />
      <NavFooter />
    </ >
  )
}
