import { Circles } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:"center",width:"100%"}}>
<Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
      
    </div>
  )
}

export default Loader