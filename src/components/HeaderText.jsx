
const HeaderText = props => {
    return(
      <div class ='mt-10 text-center max-w-lg mx-auto'>
      <h1 class='uppercase mb-2 font-bold text-secondary-200 text-3xl'>{props.header}</h1>
      <h3 class='text-md text-black'> {props.description}</h3>
      </div>
    )
  }  

export default HeaderText;